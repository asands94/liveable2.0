import React from 'react'
import ReactMarkdown from "react-markdown";
import ArticleCards from '../../components/Articles/ArticleCards';

export default function Articles({ articles }) {
  if (articles === undefined) return 'DAMN BITCH, COULD YOU GIVE ME A CHANCE TO LOAD'

  return (
    <div>

      {articles.map((article => (
        <div key={article.id}>
          <ArticleCards article={article} />
          {/* <ReactMarkdown children={article.content} /> */}
        </div>
      )))}
    </div>
  )
}
