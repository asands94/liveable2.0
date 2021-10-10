import { Link } from 'react-router-dom';
import Moment from "react-moment";
import './ArticleCards.css'

export default function ArticleCards({ article }) {
  return (
    <div className='article-card-container'>
      <img
        className='article-card-image'
        src={process.env.REACT_APP_BACKEND_URL + article.image.url}
        alt={article.title}
      />
      <div className='article-card-body'>
        <Link className='article-link' to={`/articles/${article.slug}`}>{article.title}</Link>
        <p className='article-card-des'>{article.description}</p>
        <Moment className='article-date' format="ll">{article.published_at}</Moment>
      </div>
    </div>
  );
}

