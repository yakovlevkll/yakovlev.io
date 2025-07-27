import type { GetStaticPaths, NextPage } from 'next'
import Head from 'next/head'

import { schedule } from '@data'
import { SchedulePage } from './types'

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on posts
  const paths = schedule.map((el) => ({
    params: { name: el.city.toLowerCase() },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

interface IStaticPropsContext {
  params: {
    name: string
  }
}

export const getStaticProps = async ({ params }: IStaticPropsContext) => {
  const page = schedule.find((el) => el.city.toLowerCase() === params.name)
  return { props: { page } }
}

interface PageProps {
  page: SchedulePage
}

const Schedule: NextPage<PageProps> = ({ page }) => {
  const url = 'https://calendar.google.com/calendar/embed'

  const params = [
    'height=600',
    'wkst=2',
    'bgcolor=%23343434',
    `ctz=${page.region}%2F${page.time_city}`,
    'src=MDlpaDVwNm0wdThxcjc3MWkxZjY2N2dnajBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ',
    'color=%23009688',
    'showTitle=0',
    'showPrint=0',
    'showCalendars=0',
    'showTabs=0',
    'showDate=0',
    'mode=AGENDA',
    'showTz=0',
    'showNav=0',
  ]

  const link = url + '?' + params.join('&')

  return (
    <>
      <Head>
        <title>
          Free time | {page.emoji} {page.city}
        </title>
        <meta
          name="description"
          content={`${page.emoji} ${page.city}, ${page.country} (${page.time})`}
        />
      </Head>
      <main className="mx-auto flex h-screen max-w-sm flex-col flex-nowrap px-4 pt-20 pb-4">
        <h1 className="text-2xl">Free time</h1>
        <h2 className="text-lg">
          {page.emoji} {page.city} time ({page.time})
        </h2>
        <iframe
          src={link}
          frameBorder="0"
          scrolling="no"
          className="my-2 w-full flex-grow border-0"
        />
      </main>
    </>
  )
}

export default Schedule
