import React, { ReactNode } from 'react'
import {
  useController,
  Control,
  RegisterOptions,
  FieldValues,
  Path,
  PathValue
} from 'react-hook-form'
import cn from 'classnames'
//import { v4 as uuid } from 'uuid'
import * as s from './InputStyles'

export type Props<T extends FieldValues> = {
  type?: 'text' | 'email' | 'password'
  name: Path<T>
  placeholder?: string
  multiline?: boolean
  width?: number
  control: Control<T>
  rules?: RegisterOptions
  defaultValue?: PathValue<T, Path<T>>
  label?: string
  children?: ReactNode
}

//const { className: scrollClass, styles } = getScrollStyles('textarea')

const Input = <T extends FieldValues>({
  type = 'text',
  name,
  placeholder = '',
  multiline = false,
  control,
  rules = {},
  defaultValue = '' as PathValue<T, Path<T>>,
  label,
  children
}: Props<T>) => {

  if (type === 'email') {
    Object.assign(rules, {
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: 'Invalid email address',
      },
    })
  }

  if (type === 'password') {
    Object.assign(rules, {
      minLength: {
        value: 8,
        message: 'Password must be at least 8 characters long',
      },
    })
  }

  // Если нет дефолт сообщения - то устанавливаем
  if (typeof rules.required === 'boolean') {
    rules.required = {
      value: true,
      message: 'Поле ' + label + ' должно быть заполнено'
    }
  }

  const { field, fieldState: { invalid } } = useController({ control, name, rules, defaultValue })

  return (
    <>
      {label && <s.Label>{label}</s.Label>}
      {multiline ? (
        <textarea
          placeholder={placeholder}
          {...field}
        />
      ) : (
        <s.Input
          type='text'
          placeholder={placeholder}
          className={cn({ error: invalid })}
          {...field}
        />
      )}
      {children}
    </>
  )
}

export default Input
