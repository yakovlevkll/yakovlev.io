import type { GetStaticPaths, NextPage } from 'next'
import Head from 'next/head'

import pages from '$api/schedulePages'
import { ISchedulePage } from '$api/typings'

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on posts
  const paths = Object.keys(pages).map((name) => ({
    params: { name },
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
  const page = pages[params.name]
  return { props: { page } }
}

interface PageProps {
  page: ISchedulePage
}

const Schedule: NextPage<PageProps> = ({ page }) => {
  const url = 'https://calendar.google.com/calendar/embed'

  const params = [
    'height=600',
    'wkst=2',
    'bgcolor=%23343434',
    `ctz=${page.region}%2F${page.city}`,
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
        <title>Free time | {page.city}</title>
        <meta
          name="description"
          content={`${page.emoji} ${page.city}, ${page.country} (${page.time})"`}
        />
      </Head>
      <main
        className="px-2 pt-4 pb-4 max-w-sm mx-auto flex flex-col flex-nowrap"
        style={{ height: 'calc(100vh - 72px)' }}
      >
        <h1 className="text-2xl">Free time</h1>
        <h2 className="text-lg">
          {page.emoji} {page.city} time ({page.time})
        </h2>
        <iframe
          src={link}
          frameBorder="0"
          scrolling="no"
          className="w-full my-2 border-0 flex-grow"
        />
      </main>
    </>
  )
}

export default Schedule
