// Typings
import { Props } from "./typings";
// import {  } from './typings'

// Plugins
// import i18n from './i18n'

// Styles, icons, etc.

// Components
import Link from "$cmp/Link";
import Img from "./Img";

interface ComponentProps extends Props {}

const Hero: React.FC<ComponentProps> = ({ className }) => {
  return (
    <div className="py-1 bg-white lg:overflow-hidden">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
            <div className="lg:py-24">
              {/* Hiring section */}
              <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                <span className="block text-gray-800">Проектирование</span>
                <span className="block text-primary-500">
                  каким оно и должно быть
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat.
              </p>
              <div className="mt-10 sm:mt-12">
                <form action="#" className="sm:max-w-xl sm:mx-auto lg:mx-0">
                  <div className="sm:flex">
                    <div className="min-w-0 flex-1">
                      <label htmlFor="email" className="sr-only">
                        Email address
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="block w-full px-4 py-3 rounded-md border border-gray-300 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-300 focus:ring-offset-gray-900"
                      />
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <button
                        type="submit"
                        className="block w-full py-3 px-4 rounded-md shadow bg-primary-500 text-white font-medium hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-300 focus:ring-offset-gray-900"
                      >
                        Start free trial
                      </button>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-gray-500 sm:mt-4">
                    Start your free 14-day trial, no credit card necessary. By
                    providing your email, you agree to our{" "}
                    <Link to="#" className="font-medium text-white">
                      terms or service
                    </Link>
                    .
                  </p>
                </form>
              </div>
            </div>
          </div>
          <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
              <Img
                className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="/img/hero.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
