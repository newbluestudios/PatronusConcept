import _ from 'lodash'
import {airtableLocations, airtableContacts} from 'lib/utils'

//TODO: server-side validation & push to Airtable
export default async (req, res) => {
  if (req.method === 'POST') {
    const {firstName, lastName, email, phone, locationId} = _.get(req, 'body')

    airtableContacts.create([
      {
        "fields": {
          "Location": [
            locationId
          ],
          "Phone": phone,
          "First Name": firstName,
          "Last Name": lastName,
          "Email": email
        }
      },
    ], function(err, records) {
      if (err) {
        console.error(err);
        return;
      }
      records.forEach(function (record) {
        console.log(record.getId());
      });
    });

    // res.status(200).json({name, phone});

  } else { // Not a POST
    
    res.status(200).json({empty: 'field'});
  }
};
