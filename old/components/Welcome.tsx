import React from 'react'

// Typings
import { Props } from '$cmp/typings'
import Link from './Link'
import Img from './Img'
// import {  } from './typings'

// Plugins
// import i18n from './i18n'

// Styles, icons, etc.

// Components

interface ComponentProps extends Props {}

const Welcome: React.FC<ComponentProps> = ({ className }) => {
  return (
    <div>
      <div className="relative bg-gray-900 h-screen">
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <Img
            src="/img/bgr.jpg"
            alt="Background"
            className="w-full h-full object-center object-cover"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gray-900 opacity-70"
        />

        <div className="relative max-w-3xl mx-auto pt-36 px-6 flex flex-col items-center text-center sm:pt-72 lg:px-0">
          <h1 className="text-4xl font-semibold tracking-tight text-white lg:text-6xl">
            Things are almost ready.
          </h1>
          <p className="mt-4 text-2xl xl:text-3xl text-white">Stay tuned.</p>
          <Link
            to="/contacts"
            className="mt-12 inline-block bg-primary border border-transparent rounded-md py-3 px-8  text-xl  font-semibold text-gray-200 hover:bg-primary-600"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Welcome
