import React from 'react'
import classNames from 'classnames'

type LinkButtonProps = {
  href: string
  label: string
  className?: string
}

export const LinkButton = (props: LinkButtonProps) => {
  const styles = classNames({
    'link-button': true,
    ...(props.className && { [props.className]: true }),
  })
  return (
    <a href={props.href} className={styles}>
      {props.label}
    </a>
  )
}
