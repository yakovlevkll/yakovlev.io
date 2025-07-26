// Typings
import { Props } from "$cmp/typings";

// import {  } from './typings'

// Plugins
import i18n from "./i18n";

// Styles, icons, etc.

// Components
import Link from "$cmp/Link";

interface ComponentProps extends Props {}

const LoginBtns: React.FC<ComponentProps> = ({ className }) => {
  return (
    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
      <Link
        to="/login"
        className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700"
      >
        {i18n.logIn}
      </Link>
    </div>
  );
};

export default LoginBtns;
