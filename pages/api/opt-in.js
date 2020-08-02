import _ from 'lodash'

//TODO: server-side validation & push to Airtable
export default (req, res) => {
  if (req.method === 'POST') {
    const {name, phone} = _.get(req, 'body')
    res.status(200).json({name, phone});
  } else {
    res.status(200).json({empty: 'field'});
  }
};
