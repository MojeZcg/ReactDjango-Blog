import { useTranslation } from "react-i18next";
import { FaBloggerB } from "react-icons/fa";
import { SiPowerpages } from "react-icons/si";
import { IoMdDocument } from "react-icons/io";
import { FaPencil } from "react-icons/fa6";

export default function DescriptionCards() {
  const { t } = useTranslation("global");

  return (
    <section className="relative pt-6 ">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center py-10">
          <div className=" w-96 md:w-6/12 lg:w-4/12 2xl:w-4/12 px-12 md:px-4 2xl:p-0 ml-4 mr-auto 2xl:ml-24 -mt-78">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-gray-400 dark:shadow-none shadow-xl rounded-xl bg-white dark:bg-dark ">
              <img
                alt="..."
                src="https://images.unsplash.com/photo-1519337265831-281ec6cc8514?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-full align-middle rounded-t-lg "
              />
              <blockquote className="relative p-8 mb-4">
                <svg
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 583 95"
                  className="absolute left-0 w-full block h-95-px -top-94-px"
                ></svg>
                <h4 className="text-2xl font-bold text-black dark:text-white">
                  {t("cards.maincard.title")}
                </h4>
                <p className="text-md font-light mt-2 text-dark dark:text-gray-200">
                  {t("cards.maincard.description")}
                </p>
              </blockquote>
            </div>
          </div>

          <div className="w-full md:w-6/12 px-4">
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 px-10 xl:px-4  ">
                <div className="relative flex flex-col mt-4">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg shadow-gray-500 rounded-full bg-white dark:bg-slate-900 dark:shadow-gray-700 dark:shadow-md">
                      <FaBloggerB className="h-7 w-7 dark:text-gray-200" />
                    </div>
                    <h6 className="text-xl mb-1 font-semibold dark:text-white">
                      {t("cards.first.title")}
                    </h6>
                    <p className="mb-4 text-gray-800 dark:text-gray-100">
                      {t("cards.first.subtitle")}
                    </p>
                  </div>
                </div>
                <div className="relative flex flex-col min-w-0">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg shadow-gray-500  rounded-full bg-white dark:bg-slate-900 dark:shadow-gray-700 dark:shadow-md">
                      <FaPencil className="h-6 w-6 dark:text-white" />
                    </div>
                    <h6 className="text-xl mb-1 font-semibold dark:text-white">
                      {t("cards.second.title")}
                    </h6>
                    <p className="mb-4 text-gray-800 dark:text-gray-100">
                      {t("cards.second.subtitle")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-6/12 px-10 xl:px-4">
                <div className="relative flex flex-col min-w-0 mt-4">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg shadow-gray-500 rounded-full bg-white dark:bg-slate-900 dark:shadow-gray-700 dark:shadow-md">
                      <SiPowerpages className="h-7 w-7 dark:text-white" />
                    </div>
                    <h6 className="text-xl mb-1 font-semibold dark:text-white">
                      {t("cards.third.title")}
                    </h6>
                    <p className="mb-4 text-gray-800 dark:text-gray-100">
                      {t("cards.third.subtitle")}
                    </p>
                  </div>
                </div>
                <div className="relative flex flex-col min-w-0">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg shadow-gray-500 rounded-full bg-white dark:bg-slate-900 dark:shadow-gray-700 dark:shadow-md">
                      <IoMdDocument className="h-7 w-7 dark:text-white" />
                    </div>
                    <h6 className="text-xl mb-1 font-semibold dark:text-white">
                      {t("cards.fourth.title")}
                    </h6>
                    <p className="mb-10 text-gray-800 dark:text-gray-100">
                      {t("cards.fourth.subtitle")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
