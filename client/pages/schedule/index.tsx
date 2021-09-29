import type { NextPage } from 'next'
import Head from 'next/head'

import pages from '$api/schedulePages'

const Schedule: NextPage = ({}) => {
  return (
    <>
      <Head>
        <title>Free time</title>
      </Head>
      <main>
        <h1>Free time</h1>
        <ul>
          {Object.entries(pages).map(([link, el]) => (
            <li key={el.city}>
              <a href={`/schedule/${link}`}>{el.city}</a>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}

export default Schedule
