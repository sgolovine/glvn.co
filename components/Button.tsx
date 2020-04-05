import React from 'react'

type LinkButtonProps = {
  href: string
  label: string
}

export const LinkButton = (props: LinkButtonProps) => {
  return (
    <a href={props.href} className="link-button">
      {props.label}
    </a>
  )
}
