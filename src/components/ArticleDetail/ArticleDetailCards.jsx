import Moment from "react-moment";
import ReactMarkdown from "react-markdown";

export default function ArticleDetailCards({ article }) {

  return (
    <div>
      <h1>{article?.title}</h1>
      <p><Moment format="ll">{article?.published_at}</Moment></p>
      <img
        src={process.env.REACT_APP_BACKEND_URL + article?.image.formats.medium.url}
        alt={article?.title}
      />
      <ReactMarkdown children={article?.content} />
    </div>
  )
}
