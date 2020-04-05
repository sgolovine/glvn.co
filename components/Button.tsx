import React from 'react'

type ButtonProps = {
  link?: boolean
  href?: string
  onClick?: () => void
  label: string
}

export const Button = (props: ButtonProps) => {
  return (
    <button onClick={props.onClick} className="button">
      <p>{props.label}</p>
    </button>
  )
}
