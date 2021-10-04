// Typings
import { Props } from '$cmp/typings'

// import {  } from './typings'

// Plugins
// import i18n from './i18n'

// Styles, icons, etc.

// Components
import Head from 'next/head'
import Link from '$cmp/Link'
import Img from '$cmp/Img'

interface ComponentProps extends Props {}

const Home: React.FC<ComponentProps> = ({ className }) => {
  return (
    <>
      <Head>
        <title>YAKOVLEV.IO</title>
      </Head>
      <main
        className="max-w-lg mx-auto py-6 px-2 flex flex-col justify-center"
        style={{ height: 'calc(100vh - 20rem)' }}
      >
        <article className="text-2xl font-light text-gray-800">
          <h1 className="text-5xl mb-6">Welcome</h1>
          <p>Things are almost ready.</p>
          <p>Stay tuned.</p>
          <p>
            
          </p>
        </article>
      </main>
    </>
  )
}

export default Home
