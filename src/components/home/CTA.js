import { useTranslation } from "react-i18next";

export default function CTA() {
  const { t } = useTranslation("global");

  return (
    <section className=" w-full flex items-center justify-center">
      <div className="max-w-screen px-6 py-8 sm:py-12 lg:py-12 xl:px-14 2xl:px-56">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 2xl:gap-52">
          <div className="relative h-64 overflow-hidden shadow-lg shadow-gray-400 rounded-xl sm:h-80 lg:order-last lg:h-full dark:shadow-sm dark:shadow-gray-800">
            <img
              alt="Party"
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="absolute inset-0 h-full w-full object-cover "
            />
          </div>

          <div className=" w-auto lg:py-28 text-center">
            <h2 className="text-2xl font-bold sm:text-4xl xl:text-5xl mb-4 dark:text-white">
              {t("cta.title")}
            </h2>

            <p className=" text-center text-gray-600 dark:text-gray-100  text-xs leading-5 xl:text-base 2xl:text-md">
              {t("cta.subtitle")}
            </p>

            <a
              href="/"
              className="mt-5 xl:mt-8 inline-flex shadow-xl shadow-gray-400 rounded-xl bg-oro border-2 border-oro px-12 py-2 text-sm font-bold 2xl:font-black text-gray-900 transition duration-200 ease-in-out hover:bg-white hover:border-black focus:border-oro-inespecifico xl:text-base 2xl:text-xl dark:hover:text-white dark:hover:bg-dark dark:hover:border-transparent dark:shadow-sm dark:shadow-gray-900 dark:hover:border-white "
            >
              {t("cta.button")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
