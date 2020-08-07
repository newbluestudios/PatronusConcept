import _ from 'lodash'
import {airtableLocations} from 'lib/utils'
import {useRouter} from 'next/router'


export default async (req, res) => {
  const router = useRouter()
  console.log(router.pathname, '🗽')
  
  const record = await airtableLocations.find(locationId,(err,record)=>{
    if (err) { console.error(err); return; }
    console.log('Retrieved', record.id);
  })

  console.log(record, '🗽')
  
  res.status(200).json({
    status: _.get(record,'STATUS')
  });

};
