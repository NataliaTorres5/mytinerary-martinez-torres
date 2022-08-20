import React from 'react'
import Header from '../Components/Header.js'
import Footer from '../Components/Footer.js'

export default function WebsiteLayout(props) {
  return (
    <div>
        <Header />
        {props.children}
        <Footer />
    </div>
  )
}
