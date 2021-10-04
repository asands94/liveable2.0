import React from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import MobileHeader from './Header/MobileHeader'
import Subscribe from './Subscribe/Subscribe'

export default function Layout(props) {
  return (
    <div id='content-wrap'>
      <Header />
      <MobileHeader />
      <main>
        {props.children}
      </main>
      <div id="footer">
        <Subscribe />
        <Footer />
      </div>
    </div>
  )
}
