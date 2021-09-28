// Typings
import type { AppProps } from 'next/app'

// Components
import Layout from '$root/src/app/Layout'

// Styles
import '$styles/index.css'

function NextApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default NextApp
