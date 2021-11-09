import React from "react";

const Search = (search, setSearch) => {
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="my-5 ml-20">
      <input
        className="rounded-lg bg-transparent border p-1 px-5 text-white"
        placeholder="search . . ."
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
