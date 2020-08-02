import Head from 'next/head'
import Layout from 'components/layout'
import utilStyles from 'styles/utils.module.sass'
import OptIn from './opt-in.js'
import Link from 'next/link'
import {airtable} from 'lib/utils'
import _ from 'lodash'

export default function Home({locations}) {
  
  return (
    <Layout home>
      <Head>
        <title>Project Structure Proposal</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Here's a simple form that corresponds to a serverless API endpoint at /api/opt-in
        </p>
        <p>
          And a list of locations that we moniter:
          {_.map(locations,(location)=>(<div>{_.get(location,'name')}</div>))}
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

export async function getStaticProps(){
  
  const records = await airtable.base('applHFO4UZvaLxWfC')('Locations').select({
    fields:['Name']
  }).all()  

  const locations = records.map((location)=>({
    name: location.get('Name') 
  }))
  
  return {
    props:{
      locations
    }
  }

}