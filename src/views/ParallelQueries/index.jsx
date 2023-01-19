import React from "react";
import Navbar from "./../../components/Navbar";
import { usePostsData } from "./../../hooks/usePostsData";
import { useUsersData } from "./../../hooks/useUsersData";

const Index = () => {
  const { data: posts } = usePostsData();
  const { data: users } = useUsersData();
  return (
    <>
      <Navbar />
      <h1>Parallel Queries</h1>
      {
        <>
          <h3>Posts</h3>
          <ul>
            {posts?.data?.posts.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
          <h3>Users</h3>
          <ul>
            {users?.data?.users.map((user) => (
              <li key={user.id}>{user.firstName}</li>
            ))}
          </ul>
        </>
      }
    </>
  );
};

export default Index;
