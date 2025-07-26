import { Fragment } from 'react'

// Typings
import { Props } from '$cmp/typings'

// import {  } from './typings'

// Plugins
// import i18n from './i18n'

// Styles, icons, etc.

// Components
import Link from '$cmp/Link'
import { Popover } from '@headlessui/react'

interface ComponentProps extends Props {}

const HeaderTabs: React.FC<ComponentProps> = ({ className }) => {
  return (
    <Popover.Group as="nav" className="hidden md:flex space-x-10">
      <Link
        to="/contacts"
        className="text-base font-medium text-gray-300 hover:text-gray-200"
      >
        Contacts
      </Link>
      <Link
        to="/schedule"
        className="text-base font-medium text-gray-300 hover:text-gray-200"
      >
        Schedule
      </Link>
    </Popover.Group>
  )
}

export default HeaderTabs
