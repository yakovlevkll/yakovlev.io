// Typings
import { Props } from "$cmp/typings";
// import {  } from './typings'

// Plugins
// import i18n from './i18n'

// Styles, icons, etc.
import { ChevronRightIcon } from "@heroicons/react/solid";

// Components
import Link from "$cmp/Link";

interface ComponentProps extends Props {}

const Hiring: React.FC<ComponentProps> = ({ className }) => {
  const text = "We're hiring";
  return (
    <Link
      to="#"
      className="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
    >
      <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-primary-500 rounded-full">
        {text}
      </span>
      <span className="ml-4 text-sm">Visit our careers page</span>
      <ChevronRightIcon
        className="ml-2 w-5 h-5 text-gray-500"
        aria-hidden="true"
      />
    </Link>
  );
};

export default Hiring;
