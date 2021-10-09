import React from 'react'
import ArticleCards from '../../components/Articles/ArticleCards';
import './Articles.css'
import housebanner from '../../assets/house-banner.png'

export default function Articles({ articles }) {
  if (articles === undefined) return 'LOADING...'

  return (
    <div className='articles-container'>
      <div>
        <img className='house-banner' src={housebanner} alt='house' />
        <div className='house-overlay'>
          <div className='stories-text'>
            <h2 className='stories-header'>Recent Stories</h2>
            <p className='stories-subtext'>Here you’ll find articles on current house prices and how the laws about them as well us updates on the Healthy Homes Standards.</p>
          </div>
        </div>
      </div>
      <div className='filters-container'>
        <input
          className='stories-inputs'
          placeholder='Search'
        />
        <button className='stories-inputs'>House Prices</button>
        <button className='stories-inputs'>Healthy Homes</button>
      </div>
      <div className='articles-cards-container'>
        {articles.map((article => (
          <div key={article.id}>
            <ArticleCards article={article} />
          </div>
        )))}
      </div>
      <div className='page-numbers'>
        1 2 3 4 5
      </div>
    </div>
  )
}
