import '../public/assets/css/main.css'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Meu site com Sidebar</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* FontAwesome CDN */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-papD5PT23O9P9UCUFKgH8E7qwO/2cbw2LBqF0Ry8pFIjIB60XOzC1R2liLljOo9M3wrzsbZ7SQNQeQZrChtPqQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>

      <Component {...pageProps} />
    </>
  )
}
import '../public/assets/css/main.css'
