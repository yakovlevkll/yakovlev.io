import icons from './icons'

type SocialType = keyof typeof icons

export interface SocialItem {
  type: SocialType
  url: string
  alt: string
}
