import styled from 'styled-components'
import themes, { Theme as t } from '@/styles/themes'
import { COLORS } from '@/styles/vars'

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 10px 20px;
  border: 1px solid ${COLORS.purple};
`

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`
