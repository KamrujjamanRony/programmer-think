import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { HiOutlineChatAlt2, HiOutlineUser } from "react-icons/hi";
import PrimaryBtn from "../layout/Main/PrimaryBtn";

const BlogCard = ({ blog }) => {
  const { title, image, description } = blog;
  return (
    <div className="card border w-full rounded-none">
      <img
        src={image}
        alt="blog"
        className="h-fit lg:h-72"
      />
      <div className="card-body">
        <div className="flex justify-between">
          <div className="flex items-center">
            <HiOutlineUser className="text-primary mr-2" />
            <p className="text-slate-400 text-sm">Rony</p>
          </div>
          <div className="flex items-center">
            <HiOutlineChatAlt2 className="text-primary mr-2" />
            <p className="text-slate-400 text-sm">(0)</p>
          </div>
          <div className="flex items-center">
            <AiOutlineCalendar className="text-primary mr-2" />
            <p className="text-slate-400 text-sm">Nov 25, 2022</p>
          </div>
        </div>
        <h2 className="text-2xl font-bold my-4">
          {title}
        </h2>
        <p className="mb-6">
          {description}
        </p>
        <div>
          <PrimaryBtn>READ MORE</PrimaryBtn>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
