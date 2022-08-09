import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen w-full flex flex-col bg-primary-dark font-manrope">
        <h1 className="text-3xl text-primary-light">
          We build
        </h1>
      </main>
    </div>
  )
}

export default Home
