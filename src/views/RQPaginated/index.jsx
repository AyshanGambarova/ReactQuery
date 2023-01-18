import { useState } from "react";
import Navbar from "../../components/Navbar";
import { useUsersData } from "./../../hooks/useUsersData";

const Index = () => {
  const { data: users } = useUsersData();
  return (
    <>
      <Navbar />
      <h1>RQ Paginated</h1>
      <h3>Users</h3>
      <ul>
        {users?.data?.users.map((user) => (
          <li>{user.firstName}</li>
        ))}
      </ul>
    </>
  );
};

export default Index;
