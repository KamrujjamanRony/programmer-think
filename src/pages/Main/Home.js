import React, { useEffect, useState } from "react";
import PrimaryBtn from "../../layout/Main/PrimaryBtn";
import BlogCard from "../../components/BlogCard";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(()=>{
    fetch("blog.json").then(res=>res.json()).then(data=>setBlogs(data))
  },[])
  console.log(blogs)
  return (
    <div>
      <div className="container mx-auto px-8">
        <div className="flex gap-20 py-20">
          <div className="w-auto lg:w-4/5">
            <h2 className="text-6xl font-bold mt-8">
              <strong>Hey, we’re Programmer Think.</strong> See our thoughts,
              stories and ideas.
            </h2>
          </div>
          <div className="w-auto lg:w-1/5 flex justify-end items-end">
            <PrimaryBtn>VIEW ALL BLOGS</PrimaryBtn>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
