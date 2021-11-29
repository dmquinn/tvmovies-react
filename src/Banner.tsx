import React, { Dispatch, SetStateAction } from "react";
import Rating from "./Rating";
import {BannerType} from "./types"

interface Props {
setShowModal: Dispatch<SetStateAction<boolean>>,
setTitle: Dispatch<SetStateAction<string>>,
showModal?: boolean,
  title: string,
  mode: string,
  banner:  BannerType | null,
}
//@ts-ignore
const Banner: React.FC<Props> = ({ banner, setShowModal, setTitle, title, mode }) => {
  const handleClick = () => {
    //@ts-ignore
    setTitle(banner.title);
    console.log("banner +", title);
    setShowModal(true);
  };
  return (
    !!banner && (
      <div className="pb-12">
        <div id="card">
          <div className=" lg:w-3/5 mx-auto shadow-def">
            <div className="flex flex-col md:flex-row bg-gray-800 bg-opacity-70 rounded-lg w-full">
              <div className="h-96 w-auto md:w-1/2 ">
                <img
                  className="inset-0 h-full w-full object-cover -mt-10 md:ml-5 shadow-light rounded-md"
                  src={
                    "https://image.tmdb.org/t/p/w1280/" + banner.backdrop_path
                  }
                  alt=""
                />
              </div>
              <div className="w-full py-4 px-20 text-gray-800 flex flex-col ">
                <h2 className="font-semibold text-lg leading-tight truncate text-gray-200">
                  {banner.title || banner.name}
                </h2>
                <div className="flex py-6">
                  <Rating value={banner.vote_average} />
                  <span className="text-gray-200 ml-5 -mt-1">
                    {banner.vote_count} votes
                  </span>
                </div>
                <p className="mt-2 text-gray-200">{banner.overview}</p>{" "}
                <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
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
