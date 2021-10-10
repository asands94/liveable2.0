import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOneArticle } from '../../services/articles';
import ArticleDetailCards from '../../components/ArticleDetail/ArticleDetailCards'
import './ArticleDetail.css'

export default function ArticleDetail({ articles }) {
  const [article, setArticle] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchArticle = async () => {
      const articleData = await getOneArticle(id);
      setArticle(articleData);
    };
    fetchArticle();
  }, [id])


  if (article === undefined) return 'LOADING DETAILS...'

  return (
    <div className='article-details-container'>
      <ArticleDetailCards article={article} articles={articles} />
    </div>
  )
}
