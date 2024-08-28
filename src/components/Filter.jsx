import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setFilters } from "../features/users/usersSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const [filters, setFilterState] = useState({
    domain: [],
    gender: [],
    availability: [],
  });

  const handleFilterChange = (filterType, value) => {
    setFilterState((prevState) => {
      const newFilters = { ...prevState };
      if (!newFilters[filterType].includes(value)) {
        newFilters[filterType] = [...newFilters[filterType], value];
      } else {
        newFilters[filterType] = newFilters[filterType].filter(
          (item) => item !== value
        );
      }
      dispatch(setFilters(newFilters));
      return newFilters;
    });
  };

  return (
    <div className="mb-4">
      <div className="mb-2">
        <h3 className="font-bold">Filter by Domain</h3>
        <label className="mr-2">
          <input
            type="checkbox"
            value="Engineering"
            onChange={() => handleFilterChange("domain", "Engineering")}
          />{" "}
          Engineering
        </label>
        <label className="mr-2">
          <input
            type="checkbox"
            value="Marketing"
            onChange={() => handleFilterChange("domain", "Marketing")}
          />{" "}
          Marketing
        </label>
        {/* Add more domains as needed */}
      </div>
      <div className="mb-2">
        <h3 className="font-bold">Filter by Gender</h3>
        <label className="mr-2">
          <input
            type="checkbox"
            value="Male"
            onChange={() => handleFilterChange("gender", "Male")}
          />{" "}
          Male
        </label>
        <label className="mr-2">
          <input
            type="checkbox"
            value="Female"
            onChange={() => handleFilterChange("gender", "Female")}
          />{" "}
          Female
        </label>
      </div>
      <div>
        <h3 className="font-bold">Filter by Availability</h3>
        <label className="mr-2">
          <input
            type="checkbox"
            value="true"
            onChange={() => handleFilterChange("availability", true)}
          />{" "}
          Available
        </label>
        <label className="mr-2">
          <input
            type="checkbox"
            value="false"
            onChange={() => handleFilterChange("availability", false)}
          />{" "}
          Unavailable
        </label>
      </div>
    </div>
  );
};

export default Filter;
