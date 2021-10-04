import { Fragment } from 'react'
// Typings

import { Props } from '$cmp/typings'
// import {  } from './typings'

// Plugins
// import i18n from './i18n'

// Styles, icons, etc.

// Components
import HeaderTabs from './HeaderTabs'
import Link from '$cmp/Link'

import { Popover, Transition, Menu } from '@headlessui/react'
import {
  CalendarIcon,
  MenuIcon,
  SupportIcon,
  XIcon,
  AnnotationIcon,
} from '@heroicons/react/outline'

import Logo from '$cmp/Logo'

const resources = [
  {
    name: 'Help Center',
    description:
      'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: SupportIcon,
  },
]

interface ComponentProps extends Props {}

const Header: React.FC<ComponentProps> = ({ className }) => {
  return (
    <Menu
      className="bg-black bg-opacity-10 z-20 border-gray-100 border-opacity-10 border-b absolute w-screen"
      as="header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Logo />
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Menu.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-200 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Menu.Button>
          </div>

          <HeaderTabs />
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-100 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Menu.Items className="absolute top-16 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="bg-bgr shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50 h-screen">
            <div className="pt-5 pb-6 px-5">
              <div className="mt-6">
                <nav className="flex flex-col">
                  <button onClick={() => close()}>
                    <Link
                      to="/schedule"
                      className="-m-3 p-3 flex items-center rounded-md hover:text-gray-100"
                    >
                      <CalendarIcon
                        className="flex-shrink-0 h-10 w-10 text-gray-200"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-xl font-medium">Schedule</span>
                    </Link>
                  </button>
                  <button onClick={() => close()}>
                    <Link
                      to="/contacts"
                      className="-m-3 p-3 flex items-center rounded-md hover:text-gray-100"
                    >
                      <AnnotationIcon
                        className="flex-shrink-0 h-10 w-10 text-gray-200"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-xl font-medium">Contacts</span>
                    </Link>
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default Header
