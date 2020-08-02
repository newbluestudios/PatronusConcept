import Head from 'next/head'
import Layout from 'components/layout'
import utilStyles from 'styles/utils.module.sass'
import {useRouter} from 'next/router'
import Link from 'next/link'
import {airtable} from 'lib/utils'
import _ from 'lodash'

function Location({contacts}) {
  const router = useRouter()
  return (
    <Layout home>
      <Head>
        <title>{JSON.toString(router.query)}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
        {_.map(contacts,(contact)=>(<div>{_.get(contact,'name')}</div>))}
        </p>
      </section>
      <Link href="/">
        <a>← Home</a>
      </Link>
    </Layout>
  )
}
export async function getStaticPaths(){
  
  const records = await airtable.base('applHFO4UZvaLxWfC')('Locations').select({
    fields:['Name']
  }).all()

  const paths = records.map((location)=>({
    params:{ location: location.get('Name') }
  }))

  return { paths, fallback:false }
}

export async function getStaticProps({ params }){


  return {
    props:{
      
    }
  }

}

export default Location