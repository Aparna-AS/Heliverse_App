import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img
        src={user.avatar}
        alt={user.first_name}
        className="w-16 h-16 rounded-full mx-auto"
      />
      <h2 className="text-center mt-2 font-bold text-xl">
        {user.first_name} {user.last_name}
      </h2>
      <p className="text-center text-gray-600">{user.domain}</p>
      <p className="text-center text-gray-600">{user.email}</p>
      <p
        className={`text-center mt-2 ${
          user.available ? "text-green-500" : "text-red-500"
        }`}
      >
        {user.available ? "Available" : "Unavailable"}
      </p>
    </div>
  );
};

export default UserCard;
