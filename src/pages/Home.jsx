import React, { useState, useEffect, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../features/users/usersSlice";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";

// Lazy load UserCard component for code splitting
const UserCard = lazy(() => import("../components/UserCard"));

const Home = () => {
  const dispatch = useDispatch();
  const filteredUsers = useSelector((state) => state.users.filteredUsers);
  const status = useSelector((state) => state.users.status);
  const [visibleUsers, setVisibleUsers] = useState(20);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  const showMoreUsers = () => {
    setVisibleUsers((prevVisibleUsers) => prevVisibleUsers + 20);
  };

  return (
    <div className="container mx-auto p-4">
      <SearchBar />
      <Filter />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <Suspense fallback={<div>Loading...</div>}>
          {filteredUsers.slice(0, visibleUsers).map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </Suspense>
      </div>
      {visibleUsers < filteredUsers.length && (
        <button
          onClick={showMoreUsers}
          className="mt-4 p-2 bg-blue-500 text-white rounded-lg"
        >
          Show More
        </button>
      )}
    </div>
  );
};

export default Home;
