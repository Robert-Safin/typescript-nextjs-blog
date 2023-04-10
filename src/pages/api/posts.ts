import { NextApiHandler } from "next";
import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'

const handler: NextApiHandler = (req, res) => {
  const method = req.method;

  switch (method) {
    case "GET": {
        const data = readPostsInfo()
      return res.json({ postInfo: data });
    }
      default: res.status(404).send("not found")
  }
};



const readPostsInfo = () => {
  const dirPathToRead = path.join(process.cwd(), '/src/posts')

  const dirs = fs.readdirSync(dirPathToRead)
  dirs.shift()
  const data = dirs.map((filename) => {
    const filePathToRead = path.join(process.cwd(), '/src/posts/' + filename)
    const fileContent = fs.readFileSync(filePathToRead, {encoding: 'utf-8'})
    return matter(fileContent).data

  })
  return data
}




export default handler;
