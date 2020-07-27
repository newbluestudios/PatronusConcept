import _ from 'lodash'

//TODO: Eventually all API endpoints should simply import a single instance of airtable
const airtable = require('airtable')

//TODO: server-side validation
export default (req, res) => {
  if (req.method === 'POST') {
    const {name, phone} = _.get(req, 'body')
    res.status(200).json({name, phone});
  } else {
    res.status(200).json({empty: 'field'});
  }
  
  
};
