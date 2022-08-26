import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query'
import "./App.css";
import RQSuperHeroes from "./components/RQSuperHeroes";
import SuperHeroes from "./components/SuperHeroes";
import Home from "./components/Home";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/super-heroes" element={<SuperHeroes />} />
          <Route path="/rq-super-heroes" element={<RQSuperHeroes />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
