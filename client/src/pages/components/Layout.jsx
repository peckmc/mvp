import React from "react";
import {Outlet} from "react-router-dom";

const Layout = () => {
  return (
    <>
      <h1>Random Cocktail Recipe Generator</h1>
      <hr/>
      <Outlet />
    </>
  );
};

export default Layout;