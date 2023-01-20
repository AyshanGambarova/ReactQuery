import React from "react";
import Navbar from "../../components/Navbar";
import { useQuotesData } from "./../../hooks/useQuotesData";

const Index = () => {
  const {
    data,
    isLoading,
    isError,
    error,
    hasNextPage,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
  } = useQuotesData();
  if (isLoading) return "Loading...";
  if (isError) return <h3>An error has occurred:{error.message}</h3>;
  return (
    <>
      <Navbar />
      <h1>RQ Infinite Scroll</h1>
      <h3>Quotes</h3>
      
      {data.pages.map((group, i) => {
        return (
          <ul key={i}>
            {group.data.quotes.map((quote) => (
              <li key={quote.id}>
                {quote.id} {quote.quote}
              </li>
            ))}
          </ul>
        );
      })}

      <div>
        <button style={{'margin':'20px'}} onClick={fetchNextPage} disabled={!hasNextPage}>
          Load more
        </button>
      </div>
      <div>{isFetching & !isFetchingNextPage ? "Fetching..." : null}</div>
    </>
  );
};

export default Index;
