import { NextPage } from "next";
import BlogCard from "@/components/BlogCard";

interface Props {

}

const Blogs: NextPage<Props> = () => {
  return (
    <div className="max-w-3xl mx-auto p-5 space-y-5">
      <BlogCard
        title={"this is blog"}
        content={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora cumque minus neque ratione. Iusto ipsum tenetur, saepe velit accusamus voluptatibus."
        }
      />
      <BlogCard
        title={"this is blog"}
        content={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora cumque minus neque ratione. Iusto ipsum tenetur, saepe velit accusamus voluptatibus."
        }
      />
      <BlogCard
        title={"this is blog"}
        content={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora cumque minus neque ratione. Iusto ipsum tenetur, saepe velit accusamus voluptatibus."
        }
      />
    </div>
  );
};

export default Blogs;
