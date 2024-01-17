import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { get_blog_list_category } from "redux/actions/blog/blog";
import { get_categories } from "redux/actions/categories/categories";

export default function ByCategory({ categories }) {
  const location = useLocation();
  const params = useParams();
  const slug = params.slug;
  useEffect(() => {
    window.scrollTo(0, 0);
    get_categories();
    get_blog_list_category(slug);
  }, []);
  return (
    <div className=" w-full py-3 text-dark dark:text-white">
      <ul className="flex flex-row  gap-5 px-7">
        <li className="dark:bg-white/20 bg-dark/90  rounded-lg px-3 py-1">
          <button
            className={` ${
              location.pathname === "/blog"
                ? "text-oro"
                : "dark:text-white text-white"
            } text-base `}
          >
            All
          </button>
        </li>
        {categories?.map((category) => (
          <li
            key={category.key}
            className="dark:bg-white/20 bg-dark/90  rounded-lg px-3 py-1"
          >
            <button
              className={` ${
                location.pathname === `/${category.slug}`
                  ? "text-oro"
                  : "dark:text-white text-white"
              } text-base `}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
