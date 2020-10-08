/* eslint-disable react/jsx-props-no-spreading */
import Head from 'next/head'
import React, { ReactElement } from 'react'
import { ReactQueryConfigProvider } from 'react-query'

// TODO: Que es _app de next
export default function MyApp(props): ReactElement {
    const { Component, pageProps } = props

    React.useEffect(() => {
        // eslint-disable-next-line no-undef
        const jssStyles = document.querySelector('#jss-server-side')
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles)
        }
    }, [])

    return (
        <>
            <Head>
                <title>Gzi shop</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
            </Head>
            <ReactQueryConfigProvider
                config={{
                    queries: {
                        retry: false,
                        refetchOnWindowFocus: false,
                    },
                }}
            >
                <Component {...pageProps} />
            </ReactQueryConfigProvider>
        </>
    )
}
