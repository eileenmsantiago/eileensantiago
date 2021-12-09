import { Global, css, ThemeProvider } from '@emotion/react'
import theme, { fonts } from 'theme';

const getFontFaces = (faces) => {
    return Object.values(faces).map(font => (
        `@font-face {
            font-family: ${font.name};
            src: ${font.src.map(src => `url('${src.url}') format('${src.type}')`).join(',\n')};
            font-display: swap;
        }`
    )).join('\n')
}
const App = (props) => {
    console.log(getFontFaces(fonts))
    return (
        <ThemeProvider theme={theme}>
            <Global
                styles={css`
                    html {
                        font-size: ${theme.fontSizes.default}px;
                    }
                    html,body {
                        font-family: ${theme.fontFamily.default};
                        /* overflow-x: hidden; */
                    }
                    .sr-only {
                        position: absolute;
                        width: 1px;
                        height: 1px;
                        padding: 0;
                        margin: -1px;
                        overflow: hidden;
                        clip: rect(0, 0, 0, 0);
                        border: 0;
                    }
                    ${getFontFaces(fonts)}
                `}
            />
            {props.children}
        </ThemeProvider>
    )
};

export default App;