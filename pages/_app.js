import RootLayout from '../layout.js/layout'
import '../styles/global.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </>
  )
}