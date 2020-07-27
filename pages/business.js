import Airtable from 'airtable'


export default ({contacts}) =>(

  <div>
    {contacts.map((contact)=>(
      <div>
        <div>
          {contact.name}
        </div>
        <div>
          {contact.phone}
        </div>
      </div>
    ))}
  </div>

)

export async function getStaticProps(){

  const airtable = new Airtable({
    apiKey: process.env.AIRTABLE_API_KEY
  })

  const records = await airtable.base('applHFO4UZvaLxWfC')('Contacts').select({
    fields:['Name','Phone']
  }).all()

  const contacts = records.map((contact)=>{
    return {
      name: contact.get('Name'),
      phone: contact.get('Phone'),
    }
  })

  return {
    props: {
      contacts
    }
  }

}