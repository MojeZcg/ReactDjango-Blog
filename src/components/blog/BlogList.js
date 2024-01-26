import SmaillSetPagination from "components/pagination/SmallSetPagination";
import PostCard from "./PostCard";

export default function BlogList({ posts, get_blog_list_page, count }) {
  return (
    <div className="mb-5">
      <ul className=" border-t border-gray-300 dark:border-slate-700 ">
        {posts?.map((post) => (
          <li key={post.id} className="px-16 py-2 first:mt-3 last:mb-10">
            <PostCard data={post} />
          </li>
        ))}
      </ul>
      <SmaillSetPagination
        list_page={get_blog_list_page}
        list={posts}
        count={count}
      />
    </div>
  );
}
