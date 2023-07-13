import { NextPage } from 'next'
import ResetStyles from './reset'
import FontsStyles from './fonts'
import GlobalStyles from './global'

import { memo } from 'react'

const AppStyles: NextPage = () => {
  return (
    <>
      <FontsStyles />
      <ResetStyles />
      <GlobalStyles />
    </>
  )
}

export default memo(AppStyles)
