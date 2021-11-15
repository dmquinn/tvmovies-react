import React, { useState } from "react";

const Nav = ({ setGenre }) => {
  const [currentTab, setCurrentTab, search] = useState(null);

  return (
    <div>
      <nav className="pb-10 shadow-lg mt-5">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between cursor-pointer">
            <div className="flex w-full pb-5">
              <div>
                <span className="font-semibold text-gray-200 text-lg px-2">
                  Categories
                </span>
              </div>
              <div className="hidden md:flex items-center space-x-5 ml-10">
                <p
                  className={
                    !search && currentTab === ""
                      ? "px-2 text-red-500 font-semibold border-red-500 pb-6 border-4"
                      : "px-2 text-gray-500 font-semibold transition duration-300"
                  }
                  onClick={(e) => {
                    setGenre("");
                    setCurrentTab("");
                  }}
                >
                  All
                </p>
                <p
                  className={
                    !search && currentTab === "action"
                      ? "px-2 text-red-500 font-semibold border-red-500 pb-6 border-4"
                      : "px-2 text-gray-500 font-semibold transition duration-300"
                  }
                  onClick={(e) => {
                    setGenre("28");
                    setCurrentTab("action");
                  }}
                >
                  Action
                </p>
                <p
                  className={
                    !search && currentTab === "comedy"
                      ? "px-2 text-red-500 font-semibold border-red-500 pb-6 border-4"
                      : "px-2 text-gray-500 font-semibold transition duration-300"
                  }
                  onClick={(e) => {
                    setGenre("35");
                    setCurrentTab("comedy");
                  }}
                >
                  Comedy
                </p>
                <p
                  className={
                    !search && currentTab === "horror"
                      ? "px-2 text-red-500 font-semibold border-red-500 pb-6 border-4"
                      : "px-2 text-gray-500 font-semibold transition duration-300"
                  }
                  onClick={(e) => {
                    setGenre("27");
                    setCurrentTab("horror");
                  }}
                >
                  Horror
                </p>
                <p
                  className={
                    !search && currentTab === "romance"
                      ? "px-2 text-red-500 font-semibold border-red-500 pb-6 border-4"
                      : "px-2 text-gray-500 font-semibold transition duration-300"
                  }
                  onClick={(e) => {
                    setGenre("10749");
                    setCurrentTab("romance");
                  }}
                >
                  Romance{" "}
                </p>
                <p
                  className={
                    !search && currentTab === "scifi"
                      ? "px-2 text-red-500 font-semibold border-red-500 pb-6 border-4"
                      : "px-2 text-gray-500 font-semibold transition duration-300"
                  }
                  onClick={(e) => {
                    setGenre("878");
                    setCurrentTab("scifi");
                  }}
                >
                  Sci-fi{" "}
                </p>
                <p
                  className={
                    !search && currentTab === "documentary"
                      ? "px-2 text-red-500 font-semibold border-red-500 pb-6 border-4"
                      : "px-2 text-gray-500 font-semibold transition duration-300"
                  }
                  onClick={(e) => {
                    setGenre("99");
                    setCurrentTab("documentary");
                  }}
                >
                  Documentary{" "}
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-3 "></div>
            <div className="md:hidden flex items-center">
              <button className="outline-none mobile-menu-button">
                <svg
                  className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                  x-show="!showMenu"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="hidden mobile-menu">
          <ul className="">
            <li className="active">
              <p
                href="index.html"
                className="block text-sm px-2  text-white bg-green-500 font-semibold"
              >
                Home
              </p>
            </li>
            <li>
              <p className="block text-sm px-2  hover:bg-green-500 transition duration-300">
                Services
              </p>
            </li>
            <li>
              <p className="block text-sm px-2  hover:bg-green-500 transition duration-300">
                About
              </p>
            </li>
            <li>
              <p
                href="#contact"
                className="block text-sm px-2  hover:bg-green-500 transition duration-300"
              >
                Contact Us
              </p>
            </li>
          </ul>
        </div>
        {/* <script>
				const btn = document.querySelector("button.mobile-menu-button");
				const menu = document.querySelector(".mobile-menu");

				btn.addEventListener("click", () => {
					menu.classList.toggle("hidden");
				});
			</script> */}
      </nav>
    </div>
  );
};

export default Nav;
