import React from "react";
import Rating from "./Rating";

const Banner = ({ banner, setShowModal, setTitle, title, mode }) => {
  const handleClick = () => {
    setTitle(banner.title);
    console.log("banner +", title);
    setShowModal(true);
  };
  return (
    !!banner && (
      <div class="pb-12">
        <div id="card">
          <div class=" lg:w-3/5 mx-auto shadow-def">
            <div class="flex flex-col md:flex-row bg-gray-800 bg-opacity-70 rounded-lg w-full">
              <div class="h-96 w-auto md:w-1/2 ">
                <img
                  class="inset-0 h-full w-full object-cover -mt-10 md:ml-5 shadow-light rounded-md"
                  src={
                    "https://image.tmdb.org/t/p/w1280/" + banner.backdrop_path
                  }
                  alt=""
                />
              </div>
              <div class="w-full py-4 px-20 text-gray-800 flex flex-col ">
                <h2 class="font-semibold text-lg leading-tight truncate text-gray-200">
                  {banner.title || banner.name}
                </h2>
                <div className="flex py-6">
                  <Rating value={banner.vote_average} />
                  <span className="text-gray-200 ml-5 -mt-1">
                    {banner.vote_count} votes
                  </span>
                </div>
                <p class="mt-2 text-gray-200">{banner.overview}</p>{" "}
                <p class="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                  {banner.info}
                </p>
                <button
                  className={
                    mode === "movies"
                      ? "bg-red-500 rounded-lg w-40 mt-20 text-white p2-4 flex justify-center h-10"
                      : "bg-green-500 rounded-lg w-40 mt-20 text-white p2-4 flex justify-center h-10"
                  }
                  onClick={handleClick}
                >
                  <i className="far fa-play-circle fa-lg text-white pt-5 px-1"></i>
                  {mode === "movies" ? (
                    <p className="pt-2"> Watch Trailer</p>
                  ) : (
                    <p className="pt-2">Preview</p>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Banner;
