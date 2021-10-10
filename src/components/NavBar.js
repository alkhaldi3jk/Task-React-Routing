import { Link } from "react-router-dom";
import React from "react";

function NavBar() {
  return (
    <div>
      <Link to="/">
        <img
          src="https://previews.123rf.com/images/magicleaf/magicleaf2005/magicleaf200501304/147176464-cookies-with-crumbs-vector-icon-cartoon-vector-logo-isolated-on-white-background-cookies-with-crumbs.jpg"
          alt="logo"
          width={100}
        />
      </Link>

      <Link to="/">Home</Link>
      <Link to="/products">Product List</Link>
    </div>
  );
}

export default NavBar;
