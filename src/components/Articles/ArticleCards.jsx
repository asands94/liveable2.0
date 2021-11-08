import { Link } from "react-router-dom"
import Moment from "react-moment";
import ReactMarkdown from "react-markdown";
import './ArticleCards.css'

export default function ArticleCards(props) {

  const slice = props.content.slice(6)

  return (
    <div className='article-card-container'>
      <div className='article-card-body'>
        <Link className='article-link' to={`${slice}`} target="_blank" rel="noreferrer">{props.title}</Link>
        <ReactMarkdown className='article-card-des' children={props.description} />
        <Moment className='article-date' format="ll">{props.date}</Moment>
      </div>
    </div>
  );
}

