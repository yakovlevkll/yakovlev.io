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
        to="/schedule"
        className="text-base font-medium text-gray-500 hover:text-gray-900"
      >
        Schedule
      </Link>
    </Popover.Group>
  )
}

export default HeaderTabs
