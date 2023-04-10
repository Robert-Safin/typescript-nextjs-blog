import { FC } from "react";

interface Props {
  title: string;
  content: string;
}

const BlogCard: FC<Props> = ({ title, content }) => {
  return (
    <div className="max-w-3xl mx-auto p-5">
      <div className="bg-red-300  p-2 rounded">
        <h1 className="text-gray-900 text-3xl font-mono">{title}</h1>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
};

export default BlogCard;
