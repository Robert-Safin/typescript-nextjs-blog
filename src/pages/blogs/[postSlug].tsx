import { GetStaticPaths, InferGetStaticPropsType, NextPage } from "next";
import { GetStaticProps, GetStaticPathsContext } from "next";
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import { ParsedUrlQuery } from 'querystring';

interface Post {
  title: string;
  content: string;
}

interface SinglePageProps {
  post: Post;
}

interface Params extends ParsedUrlQuery {
  postSlug: string;
}

const SinglePage: NextPage<SinglePageProps> = ({ post }) => {
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </>
  );
};






export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const dirPathToRead = path.join(process.cwd(), '/src/posts');

  const dirs = fs.readdirSync(dirPathToRead);
  dirs.shift();

  const paths = dirs.map((filename) => {
    const filePathToRead = path.join(process.cwd(), '/src/posts/' + filename);
    const fileContent = fs.readFileSync(filePathToRead, { encoding: 'utf-8' });
    return { params: { postSlug: matter(fileContent).data.slug } };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<SinglePageProps, Params> = async (context) => {
  const { params } = context;

  if (!params) {
    return {
      notFound: true,
    };
  }

  const { postSlug } = params;
  const filePathToRead = path.join(process.cwd(), '/src/posts/' + postSlug + '.md');
  const fileContent = fs.readFileSync(filePathToRead, { encoding: 'utf-8' });
  const { content, data } = matter(fileContent);

  return {
    props: {
      post: { content: content, title: data.title },
    },
  };
};

export default SinglePage;
