import Moment from "react-moment";
import ReactMarkdown from "react-markdown";
import './ArticleCards.css'

export default function ArticleCards(props) {
  return (
    <div className='article-card-container'>
      <div className='article-card-body'>
        <a href className='article-link' to={props.content}>{props.title}</a>
        <ReactMarkdown className='article-card-des' children={props.description} />
        <Moment className='article-date' format="ll">{props.date}</Moment>
      </div>
    </div>
  );
}

