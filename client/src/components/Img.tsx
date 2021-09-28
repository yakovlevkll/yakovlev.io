// Typings
import { Props } from "$cmp/typings";
// import {  } from './typings'

// Plugins
// import i18n from './i18n'

// Styles, icons, etc.

// Components
import Image from "next/image";

interface ComponentProps extends Props {
  src: string;
  alt: string;
}

const Img: React.FC<ComponentProps> = ({ className, src, alt }) => {
  return <img src={src} alt={alt} />;
  // return <Image src={src} alt={alt} layout="fill" />;
};

export default Img;
