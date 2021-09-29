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
        <title>Yakovlev.IO</title>
      </Head>
      <main className="max-w-lg mx-auto px-2 py-6">
        <h1 className="text-3xl">Welcome</h1>
        <div className="text-lg mt-4">
          <p>Things are almost ready.</p>
          <p>Stay tuned.</p>
          <p className="mt-4">
            <Link
              to="tg://yakovlev_kll"
              className="flex items-center underline text-primary"
            >
              <Img
                src="/icons/telegram.svg"
                alt="Telegram icon"
                className="h-8 w-8 pr-2"
              />
              <span>@yakovlev_kll</span>
            </Link>
          </p>
        </div>
      </main>
    </>
  )
}

export default Home
