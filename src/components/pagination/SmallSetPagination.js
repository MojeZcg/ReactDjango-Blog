import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function SmaillSetPagination({ list_page, list, count }) {
  const [active, setActive] = useState(1);
  const [listingPerPage, setListingPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  const visitPage = (page) => {
    setCurrentPage(page);
    setActive(page);
    list_page(page);
  };

  const previous_number = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      setActive(currentPage - 1);
      list_page(currentPage - 1);
    }
  };

  const next_number = () => {
    if (currentPage !== Math.ceil(list.lenght / 3)) {
      setCurrentPage(currentPage + 1);
      setActive(currentPage + 1);
      list_page(currentPage + 1);
    }
  };

  let numbers = [];

  const get_numbers = () => {
    let itemsPerPage = listingPerPage;
    let pageNumber = 1;

    for (let i = 0; i < count; i += itemsPerPage) {
      const page = pageNumber;

      let content = null;

      if (active === page) {
        content = (
          <div key={i} className={`hidden md:-mt-px md:flex`}>
            <div className="border-gray-300 dark:border-slate-800 border-t px-2 py-1 inline-flex items-center text-xl font-semibold">
              {pageNumber}
            </div>
          </div>
        );
      } else {
        content = (
          <div
            key={i}
            onClick={() => visitPage(page)}
            className={`hidden md:-mt-px md:flex`}
          >
            <div className="cursor-pointer border-transparent border-t px-2 inline-flex items-center text-xl font-semibold">
              {pageNumber}
            </div>
          </div>
        );
      }

      numbers.push(content);
      pageNumber++;
    }
    return numbers;
  };
  return (
    <div className="flex items-center justify-center">
      {currentPage !== 1 ? (
        <div onClick={() => previous_number()}>
          <FaArrowLeft className="h-5 w-5" />
        </div>
      ) : (
        ""
      )}
      {get_numbers()}

      {numbers.length === 0 || currentPage === numbers.length ? (
        ""
      ) : (
        <div onClick={() => next_number()}>
          <FaArrowRight className="h-5 w-5" />
        </div>
      )}
    </div>
  );
}
