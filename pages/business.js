import { airtable } from 'lib/utils'

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

  const records = await airtable.base('appIoiEwd611Odtso')('Contacts').select({
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