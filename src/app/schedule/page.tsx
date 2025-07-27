import type { NextPage } from 'next'

import { schedule } from '@data'
import Link from 'next/link'
import { SimpleLayout } from '@/components/SimpleLayout'
import { config } from '@config'

export const metadata = {
  title: config['schedule.title'],
  description: config['schedule.heading'],
}

const Schedule: NextPage = ({}) => {
  return (
    <SimpleLayout
      title={config['schedule.heading']}
      intro={config['schedule.description']}
    >
      <div className="space-y-20">
        <ul className="mt-4 text-lg">
          {schedule.map((el) => (
            <li key={el.city}>
              <Link
                href={`/schedule/${el.city.toLowerCase()}`}
                className="space-x-2"
              >
                <span>{el.emoji}</span>
                <span>{el.city}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </SimpleLayout>
  )
}

export default Schedule
