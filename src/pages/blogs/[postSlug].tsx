import { GetStaticPaths, InferGetStaticPropsType, NextPage } from "next";
import { GetStaticProps } from "next";
import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'
import { ParsedUrlQuery } from 'querystring'


type Post = InferGetStaticPropsType<typeof getStaticPaths>

const SinglePage: NextPage<Post> = (props) => {


  return(
    <>
    <h1>{props.post.title}</h1>
    <p>{props.post.content}</p>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = () => {

  const dirPathToRead = path.join(process.cwd(), '/src/posts')

  const dirs = fs.readdirSync(dirPathToRead)
  dirs.shift()


  const paths = dirs.map((filename) => {
    const filePathToRead = path.join(process.cwd(), '/src/posts/' + filename)
    const fileContent = fs.readFileSync(filePathToRead, {encoding: 'utf-8'})
    return {params: {postSlug: matter(fileContent).data.slug}}
  })

  return {
    paths: paths,
    fallback: false
  }

}


interface IStaticProps extends ParsedUrlQuery {
  postSlug: string
}

type PostType = {
  post: {
    title: string
    content: string
  }
}


export const getStaticProps: GetStaticProps<PostType> = async (context) => {
  const {params} = context
  const {postSlug} = params as IStaticProps




  const filePathToRead = path.join(process.cwd(), '/src/posts/' + postSlug + '.md')
  const fileContent = fs.readFileSync(filePathToRead, {encoding: 'utf-8'})
  const {content, data} = matter(fileContent)


  return {
    props: {
      post: {content: content, title: data.title}
    },
  };
};



export default SinglePage
