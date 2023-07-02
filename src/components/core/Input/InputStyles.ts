import styled from 'styled-components'
import themes, { Theme as t } from '@/styles/themes'

export const Input = styled.input`
  padding: 6px 16px;
  border-radius: 10px;
  border: 5px solid ${(p) => themes[<t>p.theme.value].inputBorderColor};
`
