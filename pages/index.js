import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.sass'
import OptIn from './opt-in.js'

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
      <section className={utilStyles.headingMd}>…</section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Form</h2>
       <OptIn/>
      </section>
    </Layout>
  )
}