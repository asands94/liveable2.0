import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom'
import About from '../views/About/About';
import ArticleDetail from '../views/ArticleDetail/ArticleDetail';
import Articles from '../views/Articles/Articles';
import Contact from '../views/Contact/Contact';
import Home from '../views/Home/Home';
import { getAllArticles } from '../services/articles'

export default function MainContainer() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const articlesList = await getAllArticles();
      setArticles(articlesList);
    };
    fetchArticles()
  }, [])

  return (
    <Switch>
      <Route path='/articles/:id'>
        <ArticleDetail />
      </Route>
      <Route path='/articles'>
        <Articles articles={articles} />
      </Route>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/contact-us' >
        <Contact />
      </Route>
      <Route path='/'>
        <Home articles={articles} />
      </Route>
    </Switch>
  )
}
