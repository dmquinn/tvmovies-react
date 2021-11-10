import React from "react";

const Nav = ({ setGenre }) => {
  return (
    <div>
      <nav class="pb-10 shadow-lg mt-5">
        <div class="max-w-6xl mx-auto">
          <div class="flex justify-between">
            <div class="flex w-full border-b pb-5">
              <div>
                <span class="font-semibold text-gray-200 text-lg px-2">
                  Categories
                </span>
              </div>
              <div class="hidden md:flex items-center space-x-5 ml-10">
                <p
                  class=" px-2 text-gray-500 focus:text-red-200 font-semibold  hover:transition duration-300"
                  onClick={() => setGenre("28")}
                >
                  {" "}
                  Action
                </p>
                <p
                  class=" px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                  onClick={() => setGenre("35")}
                >
                  Comedy
                </p>
                <p
                  class=" px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                  onClick={() => setGenre("27")}
                >
                  Horror
                </p>
                <p
                  class=" px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                  onClick={() => setGenre("10749")}
                >
                  Romance{" "}
                </p>
                <p
                  class=" px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                  onClick={() => setGenre("878")}
                >
                  Sci-fi{" "}
                </p>
                <p
                  class=" px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                  onClick={() => setGenre("99")}
                >
                  Documentary{" "}
                </p>
              </div>
            </div>
            <div class="hidden md:flex items-center space-x-3 "></div>
            <div class="md:hidden flex items-center">
              <button class="outline-none mobile-menu-button">
                <svg
                  class=" w-6 h-6 text-gray-500 hover:text-green-500 "
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
        <div class="hidden mobile-menu">
          <ul class="">
            <li class="active">
              <p
                href="index.html"
                class="block text-sm px-2  text-white bg-green-500 font-semibold"
              >
                Home
              </p>
            </li>
            <li>
              <p class="block text-sm px-2  hover:bg-green-500 transition duration-300">
                Services
              </p>
            </li>
            <li>
              <p class="block text-sm px-2  hover:bg-green-500 transition duration-300">
                About
              </p>
            </li>
            <li>
              <p
                href="#contact"
                class="block text-sm px-2  hover:bg-green-500 transition duration-300"
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
