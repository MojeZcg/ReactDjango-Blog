import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";

import { IoMenu, IoClose } from "react-icons/io5";
import { LuPencilLine } from "react-icons/lu";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa6";

import Logo from "assets/svg/logo.svg";
import DarkLogo from "assets/svg/darkLogo.svg";

import "/node_modules/flag-icons/css/flag-icons.min.css";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

function Navbar() {
  const languages = [
    {
      code: "en",
      name: "English",
      contry_code: "us",
    },
    {
      code: "es",
      name: "Español",
      contry_code: "es",
    },
  ];

  const { t, i18n } = useTranslation("global");

  const [nav, setNav] = useState(true);
  const [darkmode, setDarkmode] = useState(true);
  const [links, setLinks] = useState([]);
  const [buttonLng, setButtonLng] = useState(true);

  const currentLanguage = i18n.language;

  const handleButtonLng = () => {
    setButtonLng(!buttonLng);
  };

  useEffect(() => {
    const updateLinks = () => {
      const newLinks = [
        { name: t("navbar.home"), link: "/" },
        { name: "Blog", link: "/blog" },
        { name: t("navbar.about"), link: "/about" },
        { name: t("navbar.contact"), link: "/contact" },
      ];
      setLinks(newLinks);
    };
    updateLinks();

    i18n.on("languageChanged", updateLinks);

    return () => {
      i18n.off("languageChanged", updateLinks);
    };
  }, [i18n, t]);

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.getElementById("navbar") > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.getElementById("navbar").classList.add("shadow-md");
      document.getElementById("navbar").classList.remove("bg-white");
      document.getElementById("navbar").classList.add("bg-white/70");
      document.getElementById("navbar").classList.remove("dark:bg-dark");
      document.getElementById("navbar").classList.add("dark:bg-dark/70");
    } else {
      document.getElementById("navbar").classList.remove("shadow-md");
      document.getElementById("navbar").classList.add("bg-white");
      document.getElementById("navbar").classList.remove("bg-white/70");
      document.getElementById("navbar").classList.add("dark:bg-dark");
      document.getElementById("navbar").classList.remove("dark:bg-dark/70");
    }
  }

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    if (darkmode) {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [darkmode]);

  const handleDarkmode = () => {
    setDarkmode(!darkmode);
  };

  return (
    <nav
      id="navbar"
      className="w-full shadow-sm dark:shadow-slate-800/60 bg-white dark:bg-dark transition duration-300 ease-in-out fixed z-50"
    >
      <div className=" flex items-center px-0 mx-0 py-4 sm:px-5 xl:py-2 2xl:py-4 ">
        <div className="relative inline-block text-left">
          <button
            type="button"
            onClick={handleButtonLng}
            className={` hidden md:inline-flex  items-center justify-center w-28 px-3 py-1 text-lg bg-transparent border-2 hover:border-2 focus:border-2 border-black dark:border-white text-black dark:text-white rounded-md`}
          >
            <span
              className={`fi fi-${
                currentLanguage === "en" ? "us" : "es"
              } mr-1 h-4 w-4`}
            ></span>
            {currentLanguage === "en" ? "English" : "Spanish"}
          </button>
          <div
            className={`absolute right-0 w-28 mt-2  origin-top-right bg-white/80 dark:bg-dark/80  ${
              buttonLng
                ? "border-none"
                : "border border-black dark:border-white"
            } rounded-lg shadow-lg`}
          >
            <ul className={buttonLng ? "hidden" : "block"}>
              {languages.map(({ code, name, contry_code }) => (
                <li
                  key={contry_code}
                  className="flex items-center justify-center"
                >
                  <button
                    onClick={() => i18next.changeLanguage(code)}
                    className="h-full w-22 text-black dark:text-white "
                  >
                    <span
                      className={`fi fi-${contry_code}   mr-2 rounded-sm py-3 px-3`}
                    ></span>
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className=" flex h-full w-full items-center justify-between flex-nowrap md:px-0">
          <Link
            to="/"
            className="left-0 mr-3 w-64 lg:w-40 mt-0 flex justify-center items-center"
          >
            <img
              src={Logo}
              className="w-12 2xl:h-16 block dark:hidden "
              alt="Logo"
            />
            <img
              src={DarkLogo}
              className="w-16 2xl:h-16 hidden dark:block"
              alt="Logo"
            />
            <span className=" pl-1 dark:text-white text-4xl">React</span>
          </Link>
          <div className="flex justify-end">
            <div className=" left-0 mt-0 flex flex-shrink-0 justify-center items-center md:z-auto z-[-1]  ">
              <div className="hidden lg:flex">
                {links.map((link) => (
                  <NavLink
                    to={link.link}
                    className="  cursor-pointer select-none text-base inline-flex font-medium border-b-2 border-transparent leading-6 text-gray-900 dark:text-white hover:border-b-2 hover: border-oro mx-1 lg:mx-7 md:mx-0 md:ml-8 md:my-0 lg:text-base xl:ml-5 xl:text-lg 2xl:text-2xl"
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
              <div
                onClick={handleDarkmode}
                className="hidden lg:flex item-center justify-center py-3 px-auto w-14 lg:w-24 rounded-md border border-transparent dark:border-white text-white text-xl cursor-pointer shadow-md shadow-gray-400 "
              >
                {!darkmode ? (
                  <FaSun size={28} className="text-oro/90 mr-2" />
                ) : (
                  <FaMoon size={28} className="text-slate-300/80 mr-1" />
                )}
                <span className=" text-black dark:text-white">
                  {darkmode ? "Night" : "Light"}
                </span>
              </div>
              <button
                type="button"
                className="flex items-center justify-center text-2xl ml-0 lg:ml-6 my-0 rounded-md text-center border-transparent bg-oro 
                lg:text-lg
                px-3 py-2 
                border-2  border-black
                font-medium 
                text-black shadow-sm 
                hover:bg-white 
                hover:text-black 
                hover:border-black
                hover:border-2 
                focus:text-oro 
                focus:border-2 
                focus:border-oro 
                focus:bg-white
                transition duration-300 ease-in-out 
                xl:text-xl 
                xl:py-[0.35rem]
                2xl:py-3 2xl:px-10 2xl:text-2xl
                dark:hover:bg-dark dark:hover:text-white dark:hover:border-white"
              >
                {t("navbutton")}
                {/** */}
                <LuPencilLine className="ml-1 inline-flex w-7 h-7 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5" />
              </button>
            </div>
          </div>
          <div
            onClick={handleNav}
            className="flex items-center px-4 justify-center lg:hidden"
          >
            {!nav ? (
              <IoClose size={45} />
            ) : (
              <IoMenu className="text-black dark:text-white" size={45} />
            )}
          </div>
          <div
            className={
              !nav
                ? "fixed right-0 top-0 mt-24 w-[60%] h-auto border-r-gray-900 bg-gray-100/70 dark:bg-dark/80"
                : "fixed left-[-100%]"
            }
          >
            <div className="w-full text-3xl  ">
              <ul className="last:border-b-2 border-oro">
                {links.map((link) => (
                  <li key={link.id}>
                    <NavLink
                      to={link.link}
                      className="py-5 px-4 m-0 w-full cursor-pointer items-center select-none  inline-flex font-medium border-l-2 border-oro leading-8 text-2xl text-black dark:text-white "
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

const mapStateToProp = (state) => ({});

export default connect(mapStateToProp, {})(Navbar);
