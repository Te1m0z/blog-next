import styled from 'styled-components'
import themes, { Theme as t } from '@/styles/themes'
import { COLORS } from '@/styles/vars'

export const Input = styled.input`
  padding: 10px 20px;
  border: 1px solid ${COLORS.purple};
`

export const Label = styled.label`
  margin-bottom: 10px;
`
