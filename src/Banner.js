import React, { useEffect } from "react";

const Banner = ({ banner, search }) => {
  return (
    !!banner && (
      <div class="pt-6 pb-12">
        <div id="card">
          <div class=" lg:w-3/5 mx-auto opacity-70 shadow-def">
            <div class="flex flex-col md:flex-row bg-gray-700 rounded-lg w-full">
              <div class="h-96 w-auto md:w-1/2 ">
                <img
                  class="inset-0 h-full w-full object-cover -mt-10 ml-5 shadow-light rounded-md"
                  src={
                    "https://image.tmdb.org/t/p/w1280/" + banner.backdrop_path
                  }
                  alt=""
                />
              </div>
              <div class="w-full py-4 px-20 text-gray-800 flex flex-col ">
                <h2 class="font-semibold text-lg leading-tight truncate text-gray-200">
                  {banner.title}
                </h2>
                <div className="flex py-6">
                  <i class="fas fa-star px-1"></i>
                  <i class="fas fa-star px-1"></i>
                  <i class="fas fa-star px-1"></i>
                  <i class="fas fa-star px-1"></i>
                  <i class="fas fa-star px-1"></i>
                  <span className="text-gray-200 ml-5 -mt-1">
                    {banner.vote_count} votes
                  </span>
                </div>
                <p class="mt-2 text-gray-200">{banner.overview}</p>{" "}
                <p class="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                  {banner.info}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Banner;
