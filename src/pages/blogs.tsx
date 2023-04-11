import { NextPage, InferGetStaticPropsType } from "next";
import BlogCard from "@/components/BlogCard";
import { GetStaticProps } from "next";






type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Blogs: NextPage<Props> = ({ postInfo }) => {
  return (
    <div className="max-w-3xl mx-auto p-5 space-y-5">
      {postInfo.map((post) => (
        <BlogCard title={post.title} description={post.meta} key={post.slug} slug={post.slug}/>
      ))}
    </div>
  );
};







interface PostApiResponse {
  postInfo: {
    title: string;
    slug: string;
    meta: string;
  }[];
}

export const getStaticProps = async () => {
  const data = await fetch("http://localhost:3000/api/posts");
  const { postInfo }: PostApiResponse = await data.json();

  return {
    props: { postInfo: postInfo },
  };
};

export default Blogs;
