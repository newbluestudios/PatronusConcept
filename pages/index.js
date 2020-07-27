import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.sass'
import OptIn from './opt-in.js'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Project Structure Proposal</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Here's a simple form that corresponds to a serverless API endpoint at /api/opt-in
        </p>
      </section>
      <Link href="/business">
        <a>← Check out some Airtable users</a>
      </Link>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Form</h2>
       <OptIn/>
      </section>
    </Layout>
  )
}