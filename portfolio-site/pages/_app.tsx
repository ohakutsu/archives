import 'milligram'
import { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import { GoogleAnalytics } from '~/components/organisms/GoogleAnalytics'
import '~/styles/main.css'

const CustomApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <GoogleAnalytics />
        <title>ohakutsu.com</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="ohakutsuのポートフォリオサイトです。"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta property="og:title" content="ohakutsu.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.ohakutsu.com/ogp/ohakutsu-com.png"
        />
        <meta property="og:url" content="https://www.ohakutsu.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default CustomApp
