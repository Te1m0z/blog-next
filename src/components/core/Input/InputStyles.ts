import styled from 'styled-components'
import themes, { Theme as t } from '@/styles/themes'

export const Input = styled.input`
  padding: 10px 20px;
  border: 1px solid ${(p) => themes[<t>p.theme.value].inputBorderColor};
`
