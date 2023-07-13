import { createGlobalStyle } from 'styled-components'
/* SOURCES: Oxanium */
import OxaniumMediumWoff from 'public/fonts/Oxanium/Oxanium-Medium.woff'
import OxaniumMediumWoff2 from 'public/fonts/Oxanium/Oxanium-Medium.woff2'
import OxaniumBoldWoff from 'public/fonts/Oxanium/Oxanium-Bold.woff'
import OxaniumBoldWoff2 from 'public/fonts/Oxanium/Oxanium-Bold.woff2'
import OxaniumLightWoff from 'public/fonts/Oxanium/Oxanium-Light.woff'
import OxaniumLightWoff2 from 'public/fonts/Oxanium/Oxanium-Light.woff2'
import OxaniumRegularWoff from 'public/fonts/Oxanium/Oxanium-Regular.woff'
import OxaniumRegularWoff2 from 'public/fonts/Oxanium/Oxanium-Regular.woff2'
import OxaniumSemiBoldWoff from 'public/fonts/Oxanium/Oxanium-SemiBold.woff'
import OxaniumSemiBoldWoff2 from 'public/fonts/Oxanium/Oxanium-SemiBold.woff2'

/* SOURCES: Poppins */
import PoppinsSemiBoldWoff from 'public/fonts/Poppins/Poppins-SemiBold.woff'
import PoppinsSemiBoldWoff2 from 'public/fonts/Poppins/Poppins-SemiBold.woff2'
import PoppinsBoldWoff from 'public/fonts/Poppins/Poppins-Bold.woff'
import PoppinsBoldWoff2 from 'public/fonts/Poppins/Poppins-Bold.woff2'
import PoppinsLightWoff from 'public/fonts/Poppins/Poppins-Light.woff'
import PoppinsLightWoff2 from 'public/fonts/Poppins/Poppins-Light.woff2'
import PoppinsMediumWoff from 'public/fonts/Poppins/Poppins-Medium.woff'
import PoppinsMediumWoff2 from 'public/fonts/Poppins/Poppins-Medium.woff2'
import PoppinsRegularWoff from 'public/fonts/Poppins/Poppins-Regular.woff'
import PoppinsRegularWoff2 from 'public/fonts/Poppins/Poppins-Regular.woff2'


const fontsStyles = createGlobalStyle`
  @font-face {
    font-family: 'Oxanium';
    src: url(${OxaniumMediumWoff}) format('woff'), url(${OxaniumMediumWoff2}) format('woff2');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Oxanium';
    src: url(${OxaniumBoldWoff}) format('woff'), url(${OxaniumBoldWoff2}) format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Oxanium';
    src: url(${OxaniumLightWoff}) format('woff'), url(${OxaniumLightWoff2}) format('woff2');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Oxanium';
    src: url(${OxaniumRegularWoff}) format('woff'), url(${OxaniumRegularWoff2}) format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Oxanium';
    src: url(${OxaniumSemiBoldWoff}) format('woff'), url(${OxaniumSemiBoldWoff2}) format('woff2');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsSemiBoldWoff}) format('woff'), url(${PoppinsSemiBoldWoff2}) format('woff2');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsBoldWoff}) format('woff'), url(${PoppinsBoldWoff2}) format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsLightWoff}) format('woff'), url(${PoppinsLightWoff2}) format('woff2');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsMediumWoff}) format('woff'), url(${PoppinsMediumWoff2}) format('woff2');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsRegularWoff}) format('woff'), url(${PoppinsRegularWoff2}) format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
`

export default fontsStyles
