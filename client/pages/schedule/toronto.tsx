import type { NextPage } from 'next'
import Head from 'next/head'

const Schedule: NextPage = ({}) => {
  return (
    <>
      <Head>
        <title>Free time: Toronto</title>
      </Head>
      <main className="h-screen px-2 py-4">
        <h1>Free time</h1>
        <h2>Toronto, Canada</h2>
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=2&amp;bgcolor=%23343434&amp;ctz=America%2FToronto&amp;src=MDlpaDVwNm0wdThxcjc3MWkxZjY2N2dnajBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23009688&amp;showNav=0&amp;showTitle=0&amp;showPrint=0&amp;showCalendars=0&amp;showTabs=0&amp;showDate=0&amp;mode=AGENDA&amp;showTz=0"
          style={{ borderWidth: 0 }}
          frameBorder="0"
          scrolling="no"
          className="w-full flex-grow"
        ></iframe>
      </main>
    </>
  )
}

export default Schedule
