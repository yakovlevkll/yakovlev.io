import Image from 'next/image'

interface ComponentProps extends React.ComponentPropsWithoutRef<'img'> {
    unoptimized?: boolean
    sizes?: string
}

const Img: React.FC<ComponentProps> = ({ ...props }) => {
  return <img {...props} />
  // TODO: implement unoptimized and sizes
  // return <Image src={src} alt={alt} layout="fill" />;
}

export default Img
