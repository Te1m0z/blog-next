import { createGlobalStyle } from 'styled-components'
import { SIZES } from '@/styles/vars'
import { TEXT_COLOR, BG_COLOR } from '@/styles/theming/colors'

const globalStyles = createGlobalStyle`
	body,
	html {
		overflow-x: hidden;
		scroll-behavior: smooth;
	}

	body {
		display: flex;
		flex-flow: column nowrap;
		min-width: 320px;
		min-height: 100vh;
		font-family: 'Oxanium', sans-serif;
		font-size: 20px;
		font-weight: 400;
		line-height: 1.5;
		transition: 300ms ease background-color, 300ms ease color;
		color: ${TEXT_COLOR};
		background-color: ${BG_COLOR};
	}

	.container {
		width: 100%;
		max-width: ${SIZES.container};
		padding: 0 15px;
		margin: 0 auto;
		height: 100%;
	}

	img {
		object-fit: cover;
	}
`

export default globalStyles
