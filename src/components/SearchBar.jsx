import React from "react";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../features/users/usersSlice";

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    dispatch(setSearchQuery(query));
  };

  return (
    <input
      type="text"
      placeholder="Search by name..."
      onChange={handleSearch}
      className="w-full p-2 border border-gray-300 rounded-lg mb-4"
    />
  );
};

export default SearchBar;
