import { socials } from '@data'
import SocialLink from './SocialLink'
import { SocialItem } from './types'

interface ComponentProps {
  withText?: boolean
}

const Socials: React.FC<ComponentProps> = ({ withText }) => {
  const list = socials as SocialItem[]

  return (
    <>
      {list.map((el) => (
        <SocialLink
          href={el.url}
          about={el.alt}
          type={el.type}
          key={el.type}
          withText
        />
      ))}
    </>
  )
}

export default Socials
