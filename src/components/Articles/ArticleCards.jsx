import { Link } from 'react-router-dom';
import Moment from "react-moment";
import './ArticleCards.css'

export default function ArticleCards(props) {
  return (
    <div className='article-card-container'>
      <img
        className='article-card-image'
        src={process.env.REACT_APP_BACKEND_URL + props.imgURL}
        alt={props.title}
      />
      <div className='article-card-body'>
        <Link className='article-link' to={`/articles/${props.slug}`}>{props.title}</Link>
        <p className='article-card-des'>{props.description}</p>
        <Moment className='article-date' format="ll">{props.published_at}</Moment>
      </div>
    </div>
  );
}

