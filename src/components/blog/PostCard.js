import { Link } from "react-router-dom";
import moment from "moment";

export default function PostCard({ data }) {
  return (
    <Link className="bg-transparent border-2  border-black/60 dark:border-white/40 hover:border-black hover:dark:border-white w-full h-64 rounded-2xl flex items-center justify-between dark:text-white font-Main ">
      <div className="flex flex-col justify-between w-[62%] px-7">
        <h3 className=" mb-2 text-4xl font-semibold truncate max-w-full ">
          {data.title}
        </h3>
        <div className=" pb-6 gap-10 flex justify-between   ">
          <h5 className="text-slate-800 text-lg font-extrabold items-start">
            {data.category.name}
          </h5>
          <div className="flex justify-end gap-7">
            <h5 className="text-base text-slate-600">
              {data.time_read} min to read
            </h5>
            <h5 className="text-base text-slate-800">
              {moment(data.published).format("ll")}
            </h5>
          </div>
        </div>
        <div className=" overflow-hidden">
          <p className="text-gray-600 text-base line-clamp-3 max-w-full">
            {data.description}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center bg-gray-100 rounded-r-2xl overflow-hidden h-64 -z-10 max-w-sm ">
        <img
          src={`http://127.0.0.1:8000${data.thumbnail}`}
          className=" p-0 object-cover max-w-full   "
          alt="Post"
        />
      </div>
    </Link>
  );
}
