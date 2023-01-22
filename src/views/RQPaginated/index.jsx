import { useState } from "react";
import Navbar from "../../components/Navbar";
import { useUsersPaginatedData } from "./../../hooks/useUsersPaginatedData";

const Index = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [limit, setLimit] = useState(10);
  const {
    data: users,
    isFetching,
    isLoading,
    isPreviousData,
    isError,
    error,
  } = useUsersPaginatedData(pageNumber);
  if (isLoading) return "Loading...";
  if (isError) return <h3>An error has occurred:{error.message}</h3>;
  const firstPage = () => setPageNumber(0);
  const lastPage = () => setPageNumber(users.data.total /users.data.limit);
  const prevPage = () => {
    if (pageNumber > 0) {
      setPageNumber((prevState) => prevState - 1);
    }
    return;
  };
  const nextPage = () => {
    if (pageNumber !== users.data.total / users.data.limit) {
      setPageNumber((prevState) => prevState + 1);
    }
    return;
  };
  const pagesArray = Array(users.data.total)
    .fill()
    .map((_, index) => index + 1);
  return (
    <>
      <Navbar />
      <h1>RQ Paginated</h1>
      <h3>Users</h3>
      <ul>
        {users?.data?.users.map((user) => (
          <li key={user.id}>
            {user.id}-{user.firstName}
          </li>
        ))}
      </ul>
      <div>
        <button onClick={firstPage}>First page</button>
        <button
          onClick={prevPage}
          disabled={isPreviousData || pageNumber === 0}
        >
          Prev page
        </button>
        {/* {pagesArray.map((pg) => (
          <button
            key={pg}
            onClick={() => setPageNumber(pg)}
            disabled={isPreviousData}
          >
            {pg}
          </button>
        ))} */}
        <button
          onClick={nextPage}
          disabled={
            isPreviousData || pageNumber ===( users.data.total / limit)
          }
        >
          Next page
        </button>
        <button onClick={lastPage}>Last page</button>
      </div>
      {isFetching && "Loading..."}
    </>
  );
};

export default Index;
