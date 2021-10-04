import axios from 'axios';
import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom'
import About from '../views/About/About';
import Articles from '../views/Articles/Articles';
import Contact from '../views/Contact/Contact';
import Home from '../views/Home/Home';

export default function MainContainer() {
  const [articles, setArticles] = useState();

  useEffect(() => {
    fetchArticles();
  }, [])

  const fetchArticles = async (req, res) => {
    try {
      const url = 'http://localhost:1337';
      const getArticles = await axios.get(`${url}/articles`)
      setArticles(getArticles.data)
    } catch (error) {
      res.status(404).json({ error: error.message })
    }
  }

  return (
    <Switch>
      <Route path='/articles'>
        <Articles articles={articles} />
      </Route>
      <Route path='/about'>
        <About />
      </Route>
      {/* <Route>
        <Contact exact path='/contact-us' />
      </Route> */}
      <Route path='/'>
        <Home articles={articles} />
      </Route>
    </Switch>
  )
}
