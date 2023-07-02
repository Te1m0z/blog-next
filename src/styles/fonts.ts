import { createGlobalStyle } from 'styled-components'

const fontsStyles = createGlobalStyle`
  @font-face {
    font-family: 'Oxanium';
    src: url('/fonts/Oxanium/Oxanium-Medium.eot');
    src: url('/fonts/Oxanium/Oxanium-Medium.eot?#iefix') format('embedded-opentype'),
      url('/fonts/Oxanium/Oxanium-Medium.woff2') format('woff2'),
      url('/fonts/Oxanium/Oxanium-Medium.woff') format('woff'),
      url('/fonts/Oxanium/Oxanium-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Oxanium';
    src: url('/fonts/Oxanium/Oxanium-Bold.eot');
    src: url('/fonts/Oxanium/Oxanium-Bold.eot?#iefix') format('embedded-opentype'),
      url('/fonts/Oxanium/Oxanium-Bold.woff2') format('woff2'),
      url('/fonts/Oxanium/Oxanium-Bold.woff') format('woff'),
      url('/fonts/Oxanium/Oxanium-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Oxanium';
    src: url('/fonts/Oxanium/Oxanium-Light.eot');
    src: url('/fonts/Oxanium/Oxanium-Light.eot?#iefix') format('embedded-opentype'),
      url('/fonts/Oxanium/Oxanium-Light.woff2') format('woff2'),
      url('/fonts/Oxanium/Oxanium-Light.woff') format('woff'),
      url('/fonts/Oxanium/Oxanium-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Oxanium';
    src: url('/fonts/Oxanium/Oxanium-Regular.eot');
    src: url('/fonts/Oxanium/Oxanium-Regular.eot?#iefix') format('embedded-opentype'),
      url('/fonts/Oxanium/Oxanium-Regular.woff2') format('woff2'),
      url('/fonts/Oxanium/Oxanium-Regular.woff') format('woff'),
      url('/fonts/Oxanium/Oxanium-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Oxanium';
    src: url('/fonts/Oxanium/Oxanium-SemiBold.eot');
    src: url('/fonts/Oxanium/Oxanium-SemiBold.eot?#iefix') format('embedded-opentype'),
      url('/fonts/Oxanium/Oxanium-SemiBold.woff2') format('woff2'),
      url('/fonts/Oxanium/Oxanium-SemiBold.woff') format('woff'),
      url('/fonts/Oxanium/Oxanium-SemiBold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins/Poppins-SemiBold.eot');
    src: url('/fonts/Poppins/Poppins-SemiBold.eot?#iefix') format('embedded-opentype'),
      url('/fonts/Poppins/Poppins-SemiBold.woff2') format('woff2'),
      url('/fonts/Poppins/Poppins-SemiBold.woff') format('woff'),
      url('/fonts/Poppins/Poppins-SemiBold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins/Poppins-Bold.eot');
    src: url('/fonts/Poppins/Poppins-Bold.eot?#iefix') format('embedded-opentype'),
      url('/fonts/Poppins/Poppins-Bold.woff2') format('woff2'),
      url('/fonts/Poppins/Poppins-Bold.woff') format('woff'),
      url('/fonts/Poppins/Poppins-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins/Poppins-Light.eot');
    src: url('/fonts/Poppins/Poppins-Light.eot?#iefix') format('embedded-opentype'),
      url('/fonts/Poppins/Poppins-Light.woff2') format('woff2'),
      url('/fonts/Poppins/Poppins-Light.woff') format('woff'),
      url('/fonts/Poppins/Poppins-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins/Poppins-Medium.eot');
    src: url('/fonts/Poppins/Poppins-Medium.eot?#iefix') format('embedded-opentype'),
      url('/fonts/Poppins/Poppins-Medium.woff2') format('woff2'),
      url('/fonts/Poppins/Poppins-Medium.woff') format('woff'),
      url('/fonts/Poppins/Poppins-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins/Poppins-Regular.eot');
    src: url('/fonts/Poppins/Poppins-Regular.eot?#iefix') format('embedded-opentype'),
      url('/fonts/Poppins/Poppins-Regular.woff2') format('woff2'),
      url('/fonts/Poppins/Poppins-Regular.woff') format('woff'),
      url('/fonts/Poppins/Poppins-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
`

export default fontsStyles