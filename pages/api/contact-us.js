
// 'use client';
const fs = require('fs');

export default async function handler(req, res) {
    if (req.method === 'POST') {
        let fileLength=  await fs.promises.readdir('contactData');

        fs.writeFile(`contactData/${(fileLength.length)+1}.json`,JSON.stringify(req.body),()=>{
            // console.log(req.body)
            
            res.status(200).send("hello");
        })
    //   console.log("if")
    } else {
      // console.log("else")
    res.status(500).send('not pt');


    }
  }