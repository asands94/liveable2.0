import { Link } from 'react-router-dom'
import Moment from "react-moment";
import ReactMarkdown from "react-markdown";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
// import EmailIcon from '@mui/icons-material/Email';
import './ArticleDetailCards.css'

export default function ArticleDetailCards({ article, articles }) {
  console.log(article)
  const HTTPS = 'https'
  const BASE_URL = 'liveable.com'
  const SLUG = 'what-s-inside-a-black-hole'

  return (
    <div className='article-detail-cards-container'>
      <div>
        <h1 className='article-title'>{article?.title}</h1>
        <p className='date'><Moment format="ll">{article?.published_at}</Moment></p>
        <div className='social-icons'>
          <div class="fb-share-button"
            data-href={`${HTTPS}://${BASE_URL}/articles/${SLUG}`}
            data-layout="button_count">
            <a target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=${HTTPS}%3A%2F%2F${BASE_URL}%2Farticles%2F${SLUG}&amp;src=sdkpreparse`} class="fb-xfbml-parse-ignore" rel='noreferrer'><FacebookIcon /></a>
          </div>
          <div>
            <a class="twitter-share-button"
              href={`https://twitter.com/intent/tweet?url=${HTTPS}://${BASE_URL}`}>
              <TwitterIcon /></a>
          </div>
          {/* <EmailIcon /> */}
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
