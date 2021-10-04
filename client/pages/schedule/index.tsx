import type { NextPage } from 'next'
import Head from 'next/head'

import pages from '$api/schedulePages'
import Link from '$root/src/components/Link'

const Schedule: NextPage = ({}) => {
  return (
    <>
      <Head>
        <title>Free time</title>
      </Head>
      <main className="px-4 pt-20 pb-6 max-w-lg mx-auto">
        <h1 className="text-2xl">Free time</h1>
        <ul className="text-lg mt-4">
          {Object.entries(pages).map(([link, el]) => (
            <li key={el.city}>
              <Link to={`/schedule/${link}`}>{el.city}</Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}

export default Schedule
