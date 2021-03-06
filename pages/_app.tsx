import * as React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import '../styles/index.css'
import { AnimateSharedLayout } from 'framer-motion'

const title = 'drugly. | Anesthetic drug calculator'
const descriptions = ''

const MyApp = ({ Component, pageProps }) => {
    const router = useRouter()
    const url = `https://drugly.vercel.app${router.pathname}`

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, shrink-to-fit=no"
                />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

                <title>{title}</title>
                <meta name="description" content={descriptions} />
                <meta property="og:type" content="website" />
                {/* Essential for socials */}
                <meta property="og:title" content={title} />
                <meta property="og:description" content={descriptions} />
                <meta property="og:url" content={url} />
                <meta name="twitter:card" content="summary_large_image" />
                {/* TODO: Base image off image in content -- once library is open. Prob will come from CDN */}
                <meta property="og:image" content="/site.png" />
                {/* Less essential */}
                <meta property="og:site_name" content="drugly. | Anesthetic drug calculator" />
                <meta name="twitter:site" content="@byron_guina" />
                <meta name="twitter:creator" content="@byron_guina" />
                {/* <meta name="theme-color" content="#sdlakd" /> */}
                <link rel="shortcut icon" type="image/png" href="/192.png" />
                <link rel="apple-touch-icon" href="/192.png" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap"
                    rel="preconnect stylesheet"
                />
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#f2f2f2" />
            </Head>
            <div className="designed by byron">
                <AnimateSharedLayout>
                    <Component {...pageProps} key={router.route} />
                </AnimateSharedLayout>
            </div>
        </>
    )
}

export default MyApp
