import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { blogs } from '../data';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
  const { id: blogId } = useParams();
  console.log(blogId);
  const [currentBlog, setCurrentBlog] = useState({});

  useEffect(() => {
    const blog = blogs?.find((item) => parseInt(item.id) === parseInt(blogId));
    // console.log(blog);
    setCurrentBlog(blog);
  }, [blogId]);

  return (
    currentBlog && (
      <>
        <Helmet>
          <title>{currentBlog?.title}</title>
          <meta name="description" content={currentBlog?.description} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="www.blogs.io" />
          <meta property="og:title" content={currentBlog?.title} />
          <meta property="og:description" content={currentBlog?.description} />
          <meta property="og:image" content={currentBlog?.image} />
        </Helmet>
        <div className="flex flex-col max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center my-11">
            {currentBlog?.title}
          </h2>
          <img src={currentBlog?.image} alt="blog" className="aspect-video" />
          <p className="text-sm text-gray-400 mt-5">
            {currentBlog?.description}
          </p>
        </div>
      </>
    )
  );
};

export default Blog;
