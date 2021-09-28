// Typings
import { Props } from '$cmp/typings'

// import {  } from './typings'

// Plugins
// import i18n from './i18n'

// Styles, icons, etc.

// Components
import Head from 'next/head'
import Link from '$cmp/Link'
import Img from '../components/Img'

interface ComponentProps extends Props {}

const Home: React.FC<ComponentProps> = ({ className }) => {
  return (
    <>
      <Head>
        <title>Yakovlev.IO</title>
      </Head>
      <main>
        <h1>Welcome</h1>
        <p>Things are almost ready.</p>
        <p>Stay tuned.</p>
        <p>
          <Link to="tg://yakovlev_kll">
            <Img src="/icons/telegram.svg" alt="Telegram icon" />
            @yakovlev_kll
          </Link>
        </p>
      </main>
    </>
  )
}

export default Home
