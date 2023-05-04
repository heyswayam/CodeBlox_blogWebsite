const fs = require('fs');

export default function handler(req, res) {
  fs.readFile('blogData/how-to-learn-flask.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error reading file');
      return;
    }
    if(req.query){
        console.log(req.query)
    }
    // data=JSON.parse(
    res.status(200).json(JSON.parse(data));
  });
}
