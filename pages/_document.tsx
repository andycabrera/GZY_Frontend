import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'
// TODO: Que es Docomento de next
class MyDocument extends Document {
    render(): any {
        return (
            <Html lang="es">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
