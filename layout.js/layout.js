import Navbar from '../components/Navbar/navbar'
import React from 'react'
import Head from 'next/head'
import Footer from '../components/Footer/footer'

const RootLayout = ({ children }) => {
  return (
    <>
      <Head>
            <title>EDGE MATRIX-WEBSITE</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
            <meta name="title" content="EDGE MATRIX-WEBSITE" />
            <meta name="description" content="We are Edgematrix provides a service" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content='EDGE MATRIX-WEBSITE' />
            <meta property="og:description" content="We are Edgematrix provides a service" />
      </Head>
      <div>
        <Navbar/>
        {children}
        <Footer/>
      </div>
    </>
  )
}

export default RootLayout
