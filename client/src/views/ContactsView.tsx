import React from 'react'

// Typings
import { Props } from '$cmp/typings'
// import {  } from './typings'

// Plugins
// import i18n from './i18n'

// Styles, icons, etc.
import Img from '../components/Img'
import Link from '../components/Link'

// Components

interface ComponentProps extends Props {}

const links = [
  {
    text: '@yakovlev_io',
    icon: '/icons/telegram.svg',
    name: 'Telegram',
    link: 'tg://yakovlev_io',
  },
  {
    text: 'yakovlev.io#5586',
    icon: '/icons/discord.svg',
    name: 'Discord',
    link: 'https://discord.com/users/439106879155863552',
  },
]

const ContactsView: React.FC<ComponentProps> = ({ className }) => {
  return (
    <div className="pt-4 xl:pt-8 overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block absolute top-0 bottom-0 left-3/4 w-screen" />
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
              Contacts
            </h2>
            <h3 className="mt-2 text-3xl leading-8 font-semibold tracking-tight sm:text-4xl">
              Kirill Yakovlev
            </h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-2 hidden lg:block">
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-10 lg:aspect-none">
                  <Img
                    className="rounded-sm shadow-lg object-cover object-center filter saturate-50 grayscale"
                    src="/img/photo.webp"
                    alt="Kirill Yakovlev"
                  />
                </div>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <p className="text-lg">
                In case you have any questions, please contact me within the
                applications listed below (all provided links are clickable)
              </p>
              <div className="links mt-10">
                {links.map((el) => (
                  <Link
                    to={el.link}
                    className="flex items-center mb-2"
                    key={el.name}
                  >
                    <Img src={el.icon} alt={el.name} className="h-8 w-8 pr-2" />
                    <span className="text-primary-400">{el.text}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactsView
