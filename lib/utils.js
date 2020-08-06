import Airtable from 'airtable'

//Placeholder file for utils like client-side form validation etc.
export const airtable = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY
})
export const airtableLocations = airtable.base('appIoiEwd611Odtso')('Locations')

export const airtableContacts = airtable.base('appIoiEwd611Odtso')('Contacts')