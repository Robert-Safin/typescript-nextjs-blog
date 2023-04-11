import { GetStaticProps } from "next";
import { FC } from "react";
import Link from 'next/link'
interface Props {
  title: string;
  description: string;
  slug: string
}

const BlogCard: FC<Props> = ({ title, description, slug }) => {
  return (
    <Link href={'/blogs/' + slug}>
    <div className="max-w-3xl mx-auto p-5 cursor-pointer">
      <div className="bg-red-300  p-2 rounded">
        <h1 className="text-gray-900 text-3xl font-mono">{title}</h1>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
    </Link>
  );
};







export default BlogCard;
