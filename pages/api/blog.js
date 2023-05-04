const fs = require('fs');

export default async function handler(req, res) {
  try {
    const allBlog = [];
    const blogData = await fs.promises.readdir('blogData');

    await Promise.all(blogData.map(async (item) => {
      const fileContent = await fs.promises.readFile(('blogData/' + item), 'utf-8');
      allBlog.push(JSON.parse(fileContent));
    }));

    res.status(200).send(allBlog);
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
};

