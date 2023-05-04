const fs = require('fs');

export default async function handler(req, res) {
  try {
    fs.promises.readdir('blogData').then((data)=>(data.forEach((item) => {
      fs.readFile(('blogData/' + item), "utf-8", (err, data) => {
        if (err) {
          console.log(err);
        }
        console.log(data);
        res.status(200).json(JSON.parse(data));
      });
    })))
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
};
