import Head from 'next/head'
import Link from 'next/link'

import Footer from '@components/Footer'

export default function Success() {
  return (
    <div className="container">
      <Head>
        <title>Messaggio Ricevuto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Messaggio Ricevuto!</h1>
        <br /> 
        <p>
          Grazie per aver contattati! Vi risponderemo al più presto!
          <br /> 
          Torna alla <Link href="/"><a>home page</a></Link>.
        </p>
      </main>

      <Footer />
    </div>
  )
}
