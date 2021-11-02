import React from "react";

const Nav = () => {
  return (
    <div>
      <nav class="pb-10 shadow-lg">
        <div class="max-w-6xl mx-auto">
          <div class="flex justify-between">
            <div class="flex w-full border-b pb-5">
              <div>
                <a href="#" class="flex items-center py-4 px-2">
                  <span class="font-semibold text-gray-200 text-lg">
                    Recommended
                  </span>
                </a>
              </div>
              <div class="hidden md:flex items-center space-x-1">
                <a
                  href=""
                  class="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold "
                >
                  Action
                </a>
                <a
                  href=""
                  class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                >
                  Comedy
                </a>
                <a
                  href=""
                  class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                >
                  Horror
                </a>
                <a
                  href=""
                  class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                >
                  Romance{" "}
                </a>
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
              <a
                href="index.html"
                class="block text-sm px-2 py-4 text-white bg-green-500 font-semibold"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#about"
                class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
              >
                Contact Us
              </a>
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
