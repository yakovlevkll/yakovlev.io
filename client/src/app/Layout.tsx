// Typings
import { Props } from "$cmp/typings";
import Header from "$src/layout/Header";
// import {  } from './typings'

// Plugins
// import i18n from './i18n'

// Styles, icons, etc.

// Components

interface ComponentProps extends Props {}

const Layout: React.FC<ComponentProps> = ({ children, className }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
