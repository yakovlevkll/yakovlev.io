import clsx from 'clsx'
import Link from 'next/link'
import { SocialItem } from './types'
import icons from './icons'

type ComponentProps = React.ComponentPropsWithoutRef<typeof Link> & {
  type: SocialItem['type']

  withText?: boolean
}

const SocialLink: React.FC<ComponentProps> = ({
  type,
  className,
  withText = false,
  ...props
}) => {
  const Icon = icons[type]

  if (withText) {
    return (
      <li className={clsx(className, 'flex')}>
        <Link
          href={props.href}
          aria-label={props.about}
          className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
        >
          <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
          <span className="ml-4">{props.about}</span>
        </Link>
      </li>
    )
  }
  return (
    <Link className="group -m-1 p-1" {...props} aria-label={props.about}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

export default SocialLink
