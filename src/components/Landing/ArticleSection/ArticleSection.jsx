import { Link } from 'react-router-dom'
import './ArticleSection.css'

export default function ArticleSection({ articles }) {

  return (
    <div className='article-section-container'>
      <div className='top-article-container'>

        <div className='article-section-img-top'>
          <div className='article-image-border top-border'></div>
        </div>
        <div className='article-section-text-group'>
          <h3 className='article-section-title'>{articles[0]?.title}</h3>
          <p className='article-section-text'>{articles[0]?.description}</p>
          <div className='article-section-button'>
            <Link to={`/articles/${articles[0]?.slug}`}><button className='view-article-button'>View Article</button></Link>
          </div>
        </div>
      </div>
      <div className='bottom-article-container'>
        <div className='article-section-text-group'>
          <h3 className='article-section-title'>{articles[1]?.title}</h3>
          <p className='article-section-text'>{articles[1]?.description}</p>
          <div className='article-section-button'>
            <Link to={`/articles/${articles[1]?.slug}`}><button className='view-article-button'>View Article</button></Link>
          </div>
        </div>

        <div className='article-section-img-bottom'>
          <div className='article-image-border bottom-border'></div>
        </div>
      </div>
    </div>
  )
}
