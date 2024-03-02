import { useTranslation } from "react-i18next";

export default function AboutUs() {
  const { t } = useTranslation("about");
  return (
    <section className="bg-gray-100 dark:bg-neutral-950 ">
      <div className="container mx-auto pt-14 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="max-w-lg transition-all duration-500 ease-in-out">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-5xl">
              {t("about")}
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg">
              {t("description")}
            </p>
            <div className="mt-8 hover:text-oro font-bold">
              <a
                href="/about"
                className="text-neutral-800 hover:text-oro font-bold dark:text-blue-100 hover:mr-4 text-lg transition-all duration-500 ease-in-out"
              >
                {t("link") /* */}
              </a>
              <span className="dark:text-white ml-3 transition-all duration-300 ease-in-out ">
                &#8594;
              </span>
            </div>
          </div>
          <div className="mt-12 md:mt-0">
            <img
              src="https://www.keeneys.com/wp-content/uploads/2019/09/AIS-Oxygen-2-LB.jpg"
              alt="About Us"
              className=" rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
