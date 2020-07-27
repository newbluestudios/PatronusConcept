Here's a proposed project structure for React, Airtable, and Twilio
🚀 To run the project: clone, yarn install, yarn build, & yarn start

I've chosen to use NextJS because it comes with static site generation and server side rendering out of the box.  It also makes pre-rendering for different location simple and straight-forward.

An example of how Routing is configured can be seen at /pages/business.  This page pulls default data from Airtable's Small Business Marketing Base as described in the technical spec.  If runnin on local host, simply navigate to http://localhost:3000/business 

Nextjs also saves a significant amount of time since Routing and Dynamic Routing are already setup, as well as serverless endpoints.  If an express server is eventually required, it is easy to expose the underlying exress configuration.

An example serverless API structure can be seen in /pages/api/opt-in.js and the corresponding POST request can be seen in /pages/opt-in.js.  This endpoint takes a user's name and phone number, and adds them to the Airtable Base.

I've also chosen to use Sass, Bootstrap 4's semantic CSS (to come), and extend the air-bnb eslint config.

![alt text](https://github.com/newbluestudios/PatronusConcept/blob/master/public/images/CrazyFingers.jpg?raw=true)

