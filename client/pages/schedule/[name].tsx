import type { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import Head from 'next/head'

import pages from '$api/schedulePages'
import { ISchedulePage } from '$root/src/services/api/typings'

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
        <title>
          Free time: {page.region}, {page.city}
        </title>
      </Head>
      <main
        className="px-2 py-4 max-w-xs mx-auto flex flex-col"
        style={{ height: '90vh' }}
      >
        <h1 className="text-xl">Free time</h1>
        <h2 className="text-md">
          {page.emoji} {page.city} time ({page.time})
        </h2>
        <iframe
          src={link}
          frameBorder="0"
          scrolling="no"
          className="w-full my-2 border-0 flex-grow"
        ></iframe>
      </main>
    </>
  )
}

export default Schedule
