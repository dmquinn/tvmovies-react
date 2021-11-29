import React, { Dispatch, SetStateAction } from "react";
interface Props {
setMode: Dispatch<SetStateAction<string>>,
mode: string,
}
const Mode:React.FC<Props> = ({ setMode, mode }) => {

  const handleChange = () => {
    mode === "movies" ? setMode("tv") : setMode("movies");
  };

  return (
    <div className="absolute right-5 top-5 flex">
      <p className="px-3 pt-1 text-gray-200">Movies</p>
      <label htmlFor="toggleB" className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            id="toggleB"
            className="sr-only"
            onChange={handleChange}
          />
          <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
          <div className="dot absolute left-1 top-1 bg-red-400 w-6 h-6 rounded-full transition"></div>
        </div>
        <p className="px-3 text-gray-200">TV</p>
      </label>
    </div>
  );
};

export default Mode;
