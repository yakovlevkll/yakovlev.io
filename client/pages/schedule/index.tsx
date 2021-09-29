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
      <main className="px-2 py-4 max-w-xs mx-auto">
        <h1 className="text-xl">Free time</h1>
        <ul className="text-md">
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
