/**WARNING: Do not edit this file or it can break */
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'GET') {
    const pathName = path.join(process.cwd(), 'public', 'pages');
    try {
      const files = fs.readdirSync(pathName);
      const filesName = files.filter(file => path.extname(file) === '.html');
      res.status(200).json(filesName);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
