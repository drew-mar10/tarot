import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
    return (
    <Html>
        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Aboreto&family=Babylonica&family=Bebas+Neue&family=Estonia&family=Righteous&family=Rock+Salt&family=Sriracha&family=Moon+Dance&family=Kings&family=Explora&family=Bonheur+Royale&family=Quintessential&family=Merienda&family=Poiret+One&display=swap"
            rel="stylesheet" />
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
    )}
}

export default MyDocument