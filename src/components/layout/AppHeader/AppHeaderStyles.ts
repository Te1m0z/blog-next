import styled from 'styled-components'
//import { COLORS } from '@/styles/vars'

export const Header = styled.header`
  border-bottom: 1px dotted red;
`

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
`

export const ThemeBlock = styled.div`
  display: flex;
  align-items: center;

  & > button {
    border: 2px solid red;
    padding: 10px;
  }
`

export const AuthBlock = styled.div`
  display: flex;
  align-items: center;
`
