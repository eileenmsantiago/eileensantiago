import Document, { Html, Head, Main, NextScript } from 'next/document'
import { fonts } from 'theme';

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }
    render() {
        return (
            <Html lang="en">
                <Head>
                    {Object.values(fonts).map(font => font.src.map(fontSrc => (
                        <link rel="preload" href={fontSrc.url} as="font" type={`font/${fontSrc.type}`} crossorigin="anonymous"/>
                    )))}

                    <meta name="author" content="Vallo"></meta>
                    <link rel="icon" href="/favicon/favicon.ico" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
                    <link rel="manifest" href="/favicont/site.webmanifest"/>
                    <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5"/>
                    <meta name="msapplication-TileColor" content="#da532c"/>
                    <meta name="theme-color" content="#ffffff"></meta>
                    <meta property="og:locale" content="en_CA" /> 
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
