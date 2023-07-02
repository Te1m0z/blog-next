import styled from 'styled-components'
import themes, { Theme as t } from '@/styles/themes'
import { COLORS } from '@/styles/vars'

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 16px 14px;
  border: 1px solid ${COLORS.purple};
  font-size: 18px;
  font-weight: 500;
  font-family: 'Oxanium', sans-serif;
`

export const Label = styled.label`
  position: relative;
  display: inline-block;
  padding: 3px 10px;
  border-top: 1px solid ${COLORS.purple};
  border-left: 1px solid ${COLORS.purple};
  &::before {
    content: '';
    position: absolute;
    top: -1px;
    right: 0;
    width: 41px;
    transform: translateX(100%) rotate(65deg);
    transform-origin: left;
    background-color: ${COLORS.purple};
    border-top: 1px solid ${COLORS.purple};
  }
`
