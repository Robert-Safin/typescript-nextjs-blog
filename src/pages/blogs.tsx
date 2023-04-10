import { NextPage } from "next";
import BlogCard from "@/components/BlogCard";
import { useEffect, useState } from "react";

interface Props {}

const Blogs: NextPage<Props> = () => {
  const [posts, setPosts] = useState<
    { title: string; slug: string; meta: string }[]
  >([]);

  const fetchPosts = async () => {
    const data = await fetch("/api/posts");
    const res = await data.json();
    setPosts(res.postInfo);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-5 space-y-5">
      {posts.map((post) => (
        <BlogCard title={post.title} description={post.meta} key={post.meta}/>
      ))}
    </div>
  );
};

export default Blogs;
