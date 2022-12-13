import React from 'react'
import Link from 'next/link'
import classes from "./Button.module.css"

function Button({children, link}) {
  return (
    <Link href={link}>
        <a className={classes.btn}>{children}</a>
    </Link>
  )
}

export default Button