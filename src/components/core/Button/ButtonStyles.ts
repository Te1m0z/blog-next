import styled from 'styled-components'
//import themes, { Theme as t } from '@/styles/themes'
import { COLORS } from '@/styles/vars'

export const Button = styled.button`
  position: relative;
  display: block;
  padding: 18px;
  border: 1px solid ${COLORS.purple};
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 5px;
    height: 35px;
    background-color: ${COLORS.purple};
  }
  &::before {
    left: 0;
    transform: translate(-100%, -50%);
  }
  &::after {
    right: 0;
    transform: translate(100%, -50%);
  }
`
