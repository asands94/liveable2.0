import ArticleCards from '../../components/Articles/ArticleCards';
import './Articles.css'
import housebanner from '../../assets/house-banner.png'
import Search from '../../components/Search/Search';

export default function Articles({ articles, searchResult, setSearchResult }) {
  const handleSearch = (event) => {
    const results = articles.filter((article) =>
      article.description.toLowerCase().includes(event.target.value.toLowerCase())
    )
    setSearchResult(results)
  }
  console.log(searchResult)

  const handleSubmit = (event) => event.preventDefault()

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
        <Search onSubmit={handleSubmit} handleSearch={handleSearch} />
      </div>
      <div className='articles-cards-holder'>
        {searchResult.map((article, index) => {
          return (
            <ArticleCards
              imgURL={article.image.url}
              title={article.title}
              description={article.description}
              date={article.published_at}
              slug={article.slug}
              key={index}
            />
          )
        })}
      </div>
    </div>
  )
}
