import React from 'react'
import ArticleSection from '../../components/Landing/ArticleSection/ArticleSection'
import Landing from '../../components/Landing/Landing'
import Stats from '../../components/Landing/Stats/Stats'

export default function Home({ articles }) {
  return (
    <>
      <Landing />
      <Stats />
      <ArticleSection articles={articles} />
    </>
  )
}
