import { NextPage } from 'next'
import GlobalStyles from './global'
import ResetStyles from './reset'
import FontsStyles from './fonts'

const AppStyles: NextPage = () => {
  return (
    <>
      <FontsStyles />
      <GlobalStyles />
      <ResetStyles />
    </>
  )
}

export default AppStyles
