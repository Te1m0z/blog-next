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
import * as s from './InputPasswordStyles'

export type Props<T extends FieldValues> = {
  placeholder: string
  name: Path<T>
  type?: 'text' | 'email' | 'password'
  multiline?: boolean
  width?: number
  control: Control<T>
  rules?: RegisterOptions
  defaultValue?: PathValue<T, Path<T>>
  children?: ReactNode
}

//const { className: scrollClass, styles } = getScrollStyles('textarea')

const InputPassword = <T extends FieldValues>({
  placeholder,
  name,
  multiline = false,
  control,
  rules,
  defaultValue = '' as PathValue<T, Path<T>>,
  children
}: Props<T>) => {

  const { field, fieldState: { invalid } } = useController({ control, name, rules, defaultValue })

  return (
    <>
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

export default InputPassword
