import React from 'react'
import {
  useController,
  Control,
  RegisterOptions,
  FieldValues,
  Path,
  PathValue
} from 'react-hook-form'
import cn from 'classnames'
import * as s from './InputStyles'

export type Props<T extends FieldValues> = {
  placeholder: string
  name: Path<T>
  type?: 'text' | 'email' | 'password'
  multiline?: boolean
  width?: number
  control: Control<T>
  rules?: RegisterOptions
  defaultValue?: PathValue<T, Path<T>>
}

//const { className: scrollClass, styles } = getScrollStyles('textarea')

const Input = <T extends FieldValues>({
  placeholder,
  name,
  multiline = false,
  control,
  rules,
  defaultValue = '' as PathValue<T, Path<T>>,
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
    </>
  )
}

export default Input
