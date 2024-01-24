import PostCard from "./PostCard";

export default function BlogList({ posts }) {
  return (
    <div>
      <ul className=" border-t border-gray-300 dark:border-slate-700 ">
        {posts?.map((post) => (
          <li className="px-16 py-2 first:mt-3 last:mb-10">
            <PostCard data={post} />
          </li>
        ))}
      </ul>
    </div>
  );
}
