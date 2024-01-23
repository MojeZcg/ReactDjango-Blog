import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";

export default function ByCategory({ categories }) {
  const location = useLocation();
  const navigate = useNavigate();
  const myInputRef = useRef(null);

  const [term, setTerm] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  const manejarEnfoque = () => {
    setIsFocus(true);
  };

  const handleClickOutside = (event) => {
    // Verificar si el clic fue fuera del componente
    if (myInputRef.current && !myInputRef.current.contains(event.target)) {
      setIsFocus(false);
    }
  };

  useEffect(() => {
    // Agregar un controlador de clic global al montar el componente
    document.addEventListener("click", handleClickOutside);

    // Limpiar el controlador de clic al desmontar el componente
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => navigate("/search/" + term), 0.2);
    setTerm("");
  };

  return (
    <div className=" w-full py-3 text-dark dark:text-white font-Main">
      <div className="flex flex-row justify-between items-center">
        <ul className="flex flex-row gap-5 px-8">
          <li className="dark:bg-slate-900 border dark:border-white border-slate-900 bg-gray-50 h-8 rounded-lg flex items-center justify-center ">
            <Link
              to="/blog"
              className={` ${
                location.pathname === "/blog"
                  ? "text-oro"
                  : "dark:text-white text-dark"
              } text-md px-4  `}
            >
              All
            </Link>
          </li>
          {categories?.map((category) => (
            <li
              key={category.slug}
              className="dark:bg-slate-900 bg-gray-50 border dark:border-white border-slate-900  h-8 rounded-lg flex items-center justify-center"
            >
              <Link
                to={`/blog/${category.slug}`}
                className={` ${
                  location.pathname === `/blog/${category.slug}`
                    ? "text-oro"
                    : "dark:text-white text-dark"
                } text-md px-4 `}
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
        <form
          onSubmit={(e) => onSubmit(e)}
          className="relative rounded-md mr-8 transition duration-500 ease-in-out "
        >
          <div
            className={`${
              isFocus ? "hidden" : "absolute"
            }  inset-y-0 left-0  flex items-center justify-center pl-2`}
          >
            <IoIosSearch className="text-xl text-black dark:text-white  " />
          </div>
          <input
            onFocus={manejarEnfoque}
            ref={myInputRef}
            id="search"
            name="search"
            value={term}
            onChange={(e) => handleChange(e)}
            type="search"
            className="focus:pl-3 pl-8 bg-gray-50 dark:bg-slate-900 focus:dark:bg-slate-800 focus:w-52 w-36 h-8 text-base rounded-full ring-transparent focus:ring-transparent focus:border-slate-900 focus:dark:border-white dark:text-white text-dark transition-all duration-500 ease-in-out"
          />
        </form>
      </div>
    </div>
  );
}
