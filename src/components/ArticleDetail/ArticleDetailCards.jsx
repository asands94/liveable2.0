import { Link } from 'react-router-dom'
import Moment from "react-moment";
import ReactMarkdown from "react-markdown";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import './ArticleDetailCards.css'

export default function ArticleDetailCards({ article, articles }) {
  console.log(article)

  return (
    <div className='article-detail-cards-container'>
      <div>
        <h1 className='article-title'>{article?.title}</h1>
        <p className='date'><Moment format="ll">{article?.published_at}</Moment></p>
        <div className='social-icons'>
          <FacebookIcon />
          <TwitterIcon />
          <EmailIcon />
        </div>
        <img
          className='article-image'
          src={process.env.REACT_APP_BACKEND_URL + article?.image.url}
          alt={article?.title}
        />
        <ReactMarkdown className='article-text' children={article?.content} />
      </div>
      <aside>
        <h3 className='related-title'>Related Articles</h3>
        {articles.map((allArticles => (
          <ul key={allArticles.id}>
            {console.log('article: ', article, 'allArticles: ', allArticles)}
            {allArticles.category.name === article.category.name &&
              allArticles.title !== article.title &&
              <Link to={`/articles/${allArticles.slug}`}><li className='related-list'>{allArticles.title}</li></Link>
            }
          </ul>
        )))}

      </aside>
    </div>
  )
}
