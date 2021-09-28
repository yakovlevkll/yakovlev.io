// Typings
import { Props } from '$cmp/typings'
// import {  } from './typings'

// Plugins
// import i18n from './i18n'

// Styles, icons, etc.

// Components
import Link from '$cmp/Link'

interface ComponentProps extends Props {}

const Logo: React.FC<ComponentProps> = ({ className }) => {
  return (
    <Link to="/">
      <span
        className={`text-2xl font-bold ${className}`}
        style={{ fontFamily: 'Montserrat' }}
      >
        Yakovlev.io
      </span>
    </Link>
  )
}

export default Logo
