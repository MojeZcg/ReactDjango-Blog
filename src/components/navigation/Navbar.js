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

  const handleChangeLanguage = (code) => {
    i18next.changeLanguage(code);
    handleButtonLng();
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
      className="w-full shadow-sm  shadow-black/40 dark:shadow-white/40 bg-white dark:bg-dark transition duration-300 ease-in-out fixed z-50"
    >
      <div className=" flex items-center px-0 mx-0 py-4 sm:px-5 xl:py-2 2xl:py-4 ">
        <div className="relative inline-block text-left">
          <button
            type="button"
            onClick={handleButtonLng}
            className={` hidden md:inline-flex  items-center justify-center w-16 h-10 2xl:w-20 2xl:h-12 text-base 2xl:text-xl bg-transparent border-2 hover:border-2 focus:border-2 border-black dark:border-white text-black dark:text-white rounded-md`}
          >
            <span
              className={`fi fi-${
                currentLanguage === "en" ? "us" : "es"
              } h-7 w-7 mr-1`}
            ></span>
            {currentLanguage === "en" ? "En" : "Es"}
          </button>
          <div
            className={`absolute left-0 w-28 2xl: mt-2  bg-white/80 dark:bg-dark/80  ${
              buttonLng
                ? "border-none"
                : "border border-black dark:border-white"
            } rounded-lg shadow-lg text-md`}
          >
            <ul className={buttonLng ? "hidden" : "block"}>
              {languages.map(({ code, name, contry_code }) => (
                <li
                  key={contry_code}
                  className="flex items-center justify-center"
                >
                  <button
                    onClick={() => handleChangeLanguage(code)}
                    className="h-full w-22 py-1 text-black dark:text-white "
                  >
                    <span
                      className={`fi fi-${contry_code} mr-1 rounded-sm py-2 px-3`}
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
            className="left-0 mx-3 w-72 lg:w-40 mt-0 flex justify-center items-center"
          >
            <img
              src={Logo}
              className="w-12 2xl:h-16 block dark:hidden "
              alt="Logo"
            />
            <img
              src={DarkLogo}
              className="w-12 2xl:h-16 hidden dark:block"
              alt="Logo"
            />
            <span className=" pl-1 dark:text-white text-3xl">React</span>
          </Link>
          <div className="flex justify-end">
            <div className=" left-0 mt-0 flex flex-shrink-0 justify-center items-center md:z-auto z-[-1]">
              <div className="hidden lg:flex">
                {links.map((link) => (
                  <NavLink
                    key={link.key}
                    to={link.link}
                    className="  cursor-pointer select-none text-lg inline-flex font-medium border-b-2 border-transparent leading-6 text-gray-900 dark:text-white  hover: border-oro mx-1 lg:mx-7 md:mx-0 md:ml-8 md:my-0 lg:text-base xl:ml-5 xl:text-base 2xl:text-xl"
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
              <div
                onClick={handleDarkmode}
                className="hidden lg:flex text-center justify-center items-center p-2 ml-2 h-10 w-30 rounded-md border border-transparent dark:border-white cursor-pointer dark:shadow-md dark:shadow-gray-400 "
              >
                {!darkmode ? (
                  <FaSun className="text-oro/90 mr-1 h-6 w-6" />
                ) : (
                  <FaMoon className="text-slate-300/80 mr-1 h-6 w-6" />
                )}
                <span className=" select-none text-black dark:text-white mr-2 text-base 2xl:text-xl">
                  {darkmode ? "Dark" : "Light"}
                </span>
              </div>
              <button
                type="button"
                className="flex items-center justify-center text-base ml-0 lg:ml-4 my-0 rounded-md text-center border-transparent bg-oro 
                lg:text-lg
                px-3 py-3 
                border-2 border-black 
                text-black shadow-sm 
                hover:bg-white 
                hover:text-black 
                hover:border-black
                hover:border-2 
                focus:text-oro 
                focus:border-2 
                focus:border-oro
                focus:bg-transparent
                transition duration-300 ease-in-out 
                xl:text-base 
                xl:py-2
                xl:px-5
                2xl:py-2 2xl:px-6 2xl:text-xl
                dark:hover:bg-dark dark:hover:text-white dark:hover:border-white"
              >
                {t("navbutton")}
                {/** */}
                <LuPencilLine className="ml-1 inline-flex w-6 h-6 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5" />
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
                ? "fixed right-0 top-0 mt-[5.5rem] w-[60%] h-auto border-r-gray-900 bg-gray-100/70 dark:bg-dark/80"
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
