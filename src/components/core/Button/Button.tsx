import React, { ReactNode } from 'react'
import cn from 'classnames'
import * as s from './ButtonStyles'

export type ButtonProps = {
  children: ReactNode | string
}

const Input: React.FC<ButtonProps> = ({ children }: ButtonProps) => {

  return (
    <s.Button>
      {children}
    </s.Button>
  )
}

export default Input
