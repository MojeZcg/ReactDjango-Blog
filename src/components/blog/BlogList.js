import SmallSetPagination from "components/pagination/SmallSetPagination";
import PostCard from "./PostCard";
import { useLocation } from "react-router-dom";
import SmallSetPaginationSearch from "components/pagination/SmallSetPaginationSearch";
import { useTranslation } from "react-i18next";

export default function BlogList({ posts, term, list_page, count }) {
  const { t } = useTranslation("blog");
  const location = useLocation();
  return (
    <div className="mb-5 dark:bg-neutral-950">
      <ul className=" border-t border-gray-300 dark:border-slate-700 px-16 ">
        {posts?.map((post) => (
          <li key={post.id} className=" py-2 first:mt-3 last:mb-10 2xl:px-12">
            <PostCard data={post} />
          </li>
        ))}
      </ul>
      <div className=" flex items-center justify-between  pr-10">
        <div className="ml-16 dark:text-white border dark:border-neutral-600 border-neutral-500 py-1 px-3  rounded-lg text-md">
          {count + " " + t("results")}
        </div>
        {/^\/search\//.test(location.pathname) ? (
          <SmallSetPaginationSearch
            list_page={list_page}
            term={term}
            list={posts}
            count={count}
          />
        ) : (
          <SmallSetPagination
            list_page={list_page}
            list={posts}
            count={count}
          />
        )}
      </div>
    </div>
  );
}
