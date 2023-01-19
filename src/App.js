import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "./App.css";
import Products from "./views/Products/index";
import RQProducts from "./views/RQProducts/index";
import RQProductInfo from "./views/RQProducts/views/ProductInfo/index";
import RQParallelQueries from "./views/ParallelQueries/index";
import RQPaginated from "./views/RQPaginated/index";
import RQInfiniteScroll from "./views/RQInfiniteScroll/index";
import Home from "./views/Home/index";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/rq-products" element={<RQProducts />} />
          <Route path="/rq-products/:productId" element={<RQProductInfo />} />
          <Route path="/rq-parallel" element={<RQParallelQueries />} />
          <Route path="/rq-paginated" element={<RQPaginated />} />
          <Route path="/rq-infinite-scroll" element={<RQInfiniteScroll />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
