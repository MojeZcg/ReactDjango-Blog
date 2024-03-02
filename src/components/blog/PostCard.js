import { Link } from "react-router-dom";
import moment from "moment";
import { useTranslation } from "react-i18next";

export default function PostCard({ data }) {
  const { t } = useTranslation("blog");

  return (
    <div className="border border-black/60 dark:border-white/70 hover:border-black hover:dark:border-white rounded-2xl w-full ">
      <Link
        to={`/post/${data.slug}`}
        className=" w-full h-64  flex items-center justify-between dark:text-white font-Main  "
      >
        <div className="flex flex-col justify-between w-8/12 2xl:w-9/12 px-7">
          <h3 className=" mb-2 text-4xl font-semibold truncate max-w-full ">
            {data.title}
          </h3>
          <div className=" pb-6 gap-10 flex justify-between text-center  ">
            <h5 className="text-slate-800 dark:text-slate-300 text-lg font-extrabold items-start">
              {data.category.name}
            </h5>
            <div className="flex justify-end gap-7">
              <h5 className="text-base text-slate-600 dark:text-slate-300">
                {data.time_read + " " + t("time_read")}
              </h5>
              <h5 className="text-base text-slate-800 dark:text-slate-200">
                {moment(data.published).format("ll")}
              </h5>
            </div>
          </div>
          <div className=" overflow-hidden">
            <p className="text-gray-600 dark:text-slate-400 text-base line-clamp-3 max-w-full">
              {data.description}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center dark:bg-neutral-950 rounded-r-xl overflow-hidden h-full dark:-z-0 -z-10  w-2/6 2xl:w-3/12">
          <img
            src={`${process.env.REACT_APP_API_URL}${data.thumbnail}`}
            className=" p-0 object-cover h-full aspect-[16/9] "
            alt={data.title}
          />
        </div>
      </Link>
    </div>
  );
}
