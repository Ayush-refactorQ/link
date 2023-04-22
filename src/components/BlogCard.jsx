import React from "react";
import { Helmet } from "react-helmet";
import { HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";

const BlogCard = ({ blogData }) => {
  return (
    <>
    <HelmetProvider>
      <Helmet>
        <title>
          Design+Code - Learn to design and code React and Swift apps
        </title>
        <meta
          name="description"
          content="Learn design and code by building real apps with React and Swift. Complete courses about UI design, web and iOS development using Figma, CSS, React Hooks and SwiftUI."
        />

        {/* Twitter meta tags below */}
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:image"
          content="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDDhvOcl3hUUOO_TNsJjfi5-Bbe3Hh3p211w&usqp=CAU"
        />
        <meta
          name="twitter:title"
          content="Design+Code - Learn to design and code React and Swift apps"
        />
        <meta name="twitter:creator" content="@diepsteph" />
        <meta name="twitter:site" content="@diepsteph" />
        <meta
          name="twitter:description"
          content="Learn design and code by building real apps with React and Swift. Complete courses about UI design, web and iOS development using Figma, CSS, React Hooks and SwiftUI."
        />

        {/* Facebook meta tags below */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="www.designcode.io" />
        <meta
          property="og:title"
          content="Design+Code - Learn to design and code React and Swift apps"
        />
        <meta
          property="og:description"
          content="Learn design and code by building real apps with React and Swift. Complete courses about UI design, web and iOS development using Figma, CSS, React Hooks and SwiftUI."
        />
        <meta
          property="og:image"
          content="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDDhvOcl3hUUOO_TNsJjfi5-Bbe3Hh3p211w&usqp=CAU"
        />
      </Helmet>
      </HelmetProvider>
      <Link to={`/${blogData?.id}`}>
        <div className="flex flex-col rounded bg-gray-200">
          <img
            src={blogData?.image}
            alt="blog"
            className="aspect-video rounded-t"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{blogData?.title}</h3>
            <p className="text-sm text-gray-500">{blogData?.description}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BlogCard;
