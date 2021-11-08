import { Link } from 'react-router-dom'
import ReactMarkdown from "react-markdown";
import './ArticleSection.css'

export default function ArticleSection({ articles }) {
  const reversedArray = [...articles].reverse()
  console.log('reverse: ', reversedArray)

  return (
    <div className='article-section-container'>
      <div className='top-article-container'>
        <div className='article-section-img-top'>
          <div className='article-image-border top-border'></div>
        </div>
        <div className='article-section-text-group'>
          <h3 className='article-section-title'>{reversedArray[0]?.title}</h3>
          <ReactMarkdown className='article-section-text' children={reversedArray[0]?.description} />
          <div className='article-section-button'>
            <a href={`${reversedArray[0]?.content}`} target="_blank" rel='noreferrer'><button className='view-article-button'>View Article</button></a>
          </div>
        </div>
      </div>
      <div className='bottom-article-container'>
        <div className='article-section-text-group'>
          <h3 className='article-section-title'>{reversedArray[1]?.title}</h3>
          <ReactMarkdown className='article-section-text' children={reversedArray[1]?.description} />
          <div className='article-section-button'>
            <a href={`${reversedArray[1]?.content}`} target="_blank" rel='noreferrer'><button className='view-article-button'>View Article</button></a>
          </div>
        </div>

        <div className='article-section-img-bottom'>
          <div className='article-image-border bottom-border'></div>
        </div>
      </div>
    </div>
  )
}
