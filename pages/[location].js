import Head from 'next/head'
import Layout from 'components/layout'
import utilStyles from 'styles/utils.module.sass'
import Link from 'next/link'
import {airtableLocations} from 'lib/utils'
import _ from 'lodash'
import OptIn from 'components/opt-in'

function Location({contacts, locationId}) {
  
  return (
    <Layout home>
      <Head>
        <title>Location</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
        {_.map(contacts,(contact)=>(<div>{_.get(contact,'name')}</div>))}
        </p>
      </section>
      <Link href="/">
        <a>← Home</a>
      </Link>
      <OptIn locationId={locationId}/>
    </Layout>
  )
}

// TODO: Performance improvement could be gained by writing airtable location name and id to browser cache as described here:
// https://github.com/vercel/next.js/issues/10933#issuecomment-598297975

export async function getStaticPaths(){
  
  const records = await airtableLocations.select({
    fields:['Name']
  }).all()
  
  const paths = records.map((record)=>({
    params:{ location: record.get('Name') }
  }))
  
  return { paths, fallback:false }
}
// In the meantime, 2 trips to the server must be made to fetch id separately from name
// Alternatively the url could be /[id] instead of /[location]
export async function getStaticProps({params}){

  const {location} = params

  const records = await airtableLocations.select({
    filterByFormula: `name="${location}"`
  }).all()
  
  const locationId = _.get(records[0],'id')
  
  return {
    props:{
      locationId
    }
  }

}

export default Location