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
      <main className="px-2 py-6 max-w-lg mx-auto">
        <h1 className="text-3xl">Free time</h1>
        <ul className="text-lg mt-4">
          {Object.entries(pages).map(([link, el]) => (
            <li key={el.city}>
              <Link
                to={`/schedule/${link}`}
                className="underline text-primary-600"
              >
                {el.city}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}

export default Schedule
