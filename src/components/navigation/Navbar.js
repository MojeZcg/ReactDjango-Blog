import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";
import { LuPencilLine } from "react-icons/lu";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa6";
import Logo from "assets/svg/logo.svg";
import DarkLogo from "assets/svg/darkLogo.svg";

function Navbar() {
  let links = [
    { name: "Inicio", link: "/" },
    { name: "Blog", link: "/blog" },
    { name: "Nosotros", link: "/about" },
    { name: "Contacto", link: "/contact" },
  ];

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

  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  const [darkmode, setDarkmode] = useState(false);

  useEffect(() => {
    if (darkmode) {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
    return;
  }, [darkmode]);

  const handleDarkmode = () => {
    setDarkmode(!darkmode);
  };

  return (
    <nav
      id="navbar"
      className="w-full shadow-sm dark:shadow-slate-800/60 transition duration-300 ease-in-out fixed z-50"
    >
      <div className=" px-0 mx-0 py-4 sm:px-6 xl:py-2 2xl:py-4 ">
        <div className=" flex h-full justify-between flex-nowrap md:px-0">
          <Link
            to="/"
            className="left-0 h-30 w-64 ml-10 mt-0 flex justify-center items-center"
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
            <span className=" pl-1 dark:text-white text-4xl">React</span>
          </Link>
          <div className="flex justify-end">
            <div className=" left-0 mt-0 flex flex-shrink-0 justify-center items-center md:z-auto z-[-1]  ">
              <div className="hidden lg:flex">
                {links.map((link) => (
                  <NavLink
                    key={link.id}
                    to={link.link}
                    className="  cursor-pointer select-none text-base inline-flex font-medium border-b-2 border-transparent leading-6 text-gray-900 dark:text-white hover:border-b-2 hover: border-oro mx-1 lg:mx-7 md:mx-0 md:ml-8 md:my-0 lg:text-base xl:ml-5 xl:text-lg 2xl:text-2xl"
                  >
                    {link.name}
                  </NavLink>
                ))}
                <div onClick={handleDarkmode} className="w-10 ">
                  {!darkmode ? (
                    <FaSun size={28} className="text-oro/90" />
                  ) : (
                    <FaMoon size={28} className="text-slate-300" />
                  )}
                </div>
              </div>
              <button
                type="button"
                className="ml-4 my-0 rounded-md text-center border-transparent bg-oro 
                lg:text-lg
                px-6 py-[0.35rem] 
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
                2xl:py-3 2xl:px-10 2xl:text-2xl
                dark:hover:bg-dark dark:hover:text-white dark:hover:border-white"
              >
                Write{/** */}
                <LuPencilLine className="ml-1 inline-flex w-4 h-4 2xl:w-5 2xl:h-5" />
              </button>
            </div>
          </div>
          <div
            onClick={handleNav}
            className="select-none flex items-center px-2 justify-center lg:hidden"
          >
            {!nav ? <IoClose size={35} /> : <IoMenu size={35} />}
          </div>
          <div
            className={
              !nav
                ? "fixed right-0 top-0 mt-[5rem] w-[60%] h-auto border-r-gray-900 bg-gray-100"
                : "fixed left-[-100%]"
            }
          >
            <div className="w-full text-3xl  ">
              <ul className="first:border-t-2 border-oro">
                {links.map((link) => (
                  <li key={link.id}>
                    <NavLink
                      to={link.link}
                      className="py-5 px-3 m-0 w-full cursor-pointer items-center select-none text-base inline-flex font-medium border-b-2 border-oro leading-6 text-black "
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
