import Head from 'next/head'
import Layout from 'components/layout'
import utilStyles from 'styles/utils.module.sass'

import {airtableLocations} from 'lib/utils'
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
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Form</h2>
      </section>
    </Layout>
  )
}

export async function getStaticProps(){
  
  const records = await airtableLocations.select({
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