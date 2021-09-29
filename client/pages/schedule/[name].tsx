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
  return (
    <>
      <Head>
        <title>
          Free time: {page.region}, {page.city}
        </title>
      </Head>
      <main>
        <h1>
          Free time: {page.region}, {page.city}
        </h1>
        <iframe
          src={`https://calendar.google.com/calendar/embed?height=600&amp;wkst=2&amp;bgcolor=%23343434&amp;ctz=${page.region}%2F${page.city}&amp;src=MDlpaDVwNm0wdThxcjc3MWkxZjY2N2dnajBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23009688&amp;showNav=0&amp;showTitle=0&amp;showPrint=0&amp;showCalendars=0&amp;showTabs=0&amp;showDate=0&amp;mode=AGENDA&amp;showTz=0`}
          style={{ borderWidth: 0 }}
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </main>
    </>
  )
}

export default Schedule
