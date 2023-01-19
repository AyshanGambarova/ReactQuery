import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Traditional Products</Link>
          </li>
          <li>
            <Link to="/rq-products">RQ Products</Link>
          </li>
          <li>
            <Link to="/rq-parallel">RQ Parallel Queries</Link>
          </li>
          <li>
            <Link to="/rq-paginated">RQ Paginated</Link>
          </li>
          <li>
            <Link to="/rq-infinite-scroll">RQ Infinite Scroll</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
