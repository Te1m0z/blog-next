import { NextPage } from 'next'
import GlobalStyles from './global'
import ResetStyles from './reset'
import FontsStyles from './fonts'

const AppStyles: NextPage = () => {
  return (
    <>
      <FontsStyles />
      <ResetStyles />
      <GlobalStyles />
    </>
  )
}

export default AppStyles
