import React from 'react'

// Plugins
import { default as NextLink } from 'next/link'

// Interfaces
import { Props } from '$cmp/typings'

// Components

// Styles & icons

interface ComponentProps extends Props {
  to: string
  target?: string
  rel?: string
}

const Link: React.FC<ComponentProps> = ({
  className,
  children,
  to,
  target,
  rel,
}) => {
  return (
    // <a href={to} className={`${className}`} target={target} rel={rel}>
    //   {children}
    // </a>
    <NextLink href={to}>
      <a className={`${className}`}>{children}</a>
    </NextLink>
  )
}

export default Link
