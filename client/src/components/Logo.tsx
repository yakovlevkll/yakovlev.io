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
    <Link to="/" className="text-gray-100">
      <span
        className={`text-2xl ${className}`}
        style={{ fontFamily: 'Montserrat', fontWeight: 400 }}
      >
        YAKOVLEV.IO
      </span>
    </Link>
  )
}

export default Logo
