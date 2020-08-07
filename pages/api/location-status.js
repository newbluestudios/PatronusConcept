import _ from 'lodash'
import {airtableLocations} from 'lib/utils'

//TODO: server-side validation & push to Airtable
export default async (req, res) => {
  console.log('🦶',_.get(req, 'body'))
  const record = await airtableLocations.find(locationId,(err,record)=>{
    if (err) { console.error(err); return; }
    console.log('Retrieved', record.id);
  })

  console.log(record, '🗽')
  
  res.status(200).json({
    status: _.get(record,'STATUS')
  });

};
