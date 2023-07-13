//import { NextPage } from 'next'
import { FC } from 'react'
import ResetStyles from './reset'
import FontsStyles from './fonts'
import GlobalStyles from './global'
//import { memo } from 'react'


// this component consists of parts of global styles
const AppStyles: FC = () => {
  return (
    <>
      <FontsStyles />
      <ResetStyles />
      <GlobalStyles />
    </>
  )
}

//export default memo(AppStyles)
export default AppStyles
