import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const UserDetails = () => {
  const { id } = useParams();
  const user = useSelector((state) =>
    state.users.users.find((u) => u.id === parseInt(id))
  );

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">
        {user.first_name} {user.last_name}
      </h1>
      <img
        src={user.avatar}
        alt={user.first_name}
        className="w-32 h-32 rounded-full"
      />
      <p className="mt-4">
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Domain:</strong> {user.domain}
      </p>
      <p>
        <strong>Gender:</strong> {user.gender}
      </p>
      <p>
        <strong>Status:</strong> {user.available ? "Available" : "Unavailable"}
      </p>
    </div>
  );
};

export default UserDetails;
