import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Typewriter } from "react-simple-typewriter";

function Header() {
  const { t, i18n } = useTranslation("home");

  const [words, setWords] = useState([]);

  useEffect(() => {
    const updateWords = () => {
      const newWords = [
        t("home.header.words.first"),
        t("home.header.words.second"),
        t("home.header.words.third"),
      ];
      setWords(newWords);
    };
    updateWords();

    window.addEventListener("languageChanged", updateWords);

    return () => {
      window.removeEventListener("languageChanged", updateWords);
    };
  }, [i18n, t]);

  return (
    <main>
      <div>
        <div className="text-center pt-60 pb-40 md:py-84 xl:pt-36 xl:pb-44 2xl:pt-80 2xl:pb-96">
          <h1 className="  px-4 mb-10 xl:leading-tight text-5xl font-black tracking-tight text-black bg-opacity-70 md:text-6xl lg:text-4xl lg:px-24 xl:text-5xl xl:px-24 xl:mb-16 2xl:text-7xl 2xl:px-22 dark:text-white">
            {t("home.header.title")}{" "}
            <span className=" text-oro">
              <Typewriter
                words={words}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={160}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <p className="mb-16 text-base px-6 sm:px-40 font-bold text-gray-800 lg:text-lg lg:px-0 xl:text-lg xl:px-52 xl:mb-16 2xl:text-2xl dark:text-gray-200">
            {t("home.header.subtitle")}
          </p>
          <div>
            <a
              href="/about"
              className=" items-center justify-center px-8 py-3 text-sm xl:text-base rounded-xl text-center border-transparent
              border-2 bg-oro text-gray-900 shadow-sm hover:bg-white hover:text-black 
              hover:border-black focus:text-oro-inespecifico focus:border-2 focus:border-oro-inespecifico focus:bg-white transition duration-300 ease-in-out md:text-base 2xl:py-3 2xl:px-10 2xl:text-xl dark:hover:bg-dark dark:hover:text-white dark:hover:border-white "
            >
              {t("home.header.botton")}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Header;
