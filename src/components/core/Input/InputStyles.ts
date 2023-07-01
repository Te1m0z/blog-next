import styled from 'styled-components'
import themes, { Theme as t } from '@/styles/themes'

export const Input = styled.input`
  border: 1px solid red;
  padding: 6px 16px;
  color: ${(p) => themes[<t>p.theme.value].primaryColor};
`
