import { createGlobalStyle } from 'styled-components'
import themes, { Theme as t } from '@/styles/themes'

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
		color: ${(p) => themes[<t>p.theme.value].siteColor};
		background-color: ${(p) => themes[<t>p.theme.value].siteBg};

		& > main {
			flex-grow: 1;
			//margin-top: $header-height + 70px;
		}
	}

	.container {
		width: 100%;
		max-width: $main-container-width;
		padding: 0 15px;
		margin: 0 auto;
		height: 100%;
	}

	img {
		object-fit: cover;
	}
`

export default globalStyles