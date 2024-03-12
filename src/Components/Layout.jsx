import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <header style={{ backgroundColor: "purple", height: "100px" }}>
        Header
      </header>
      <main>{children}</main>
      <footer style={{ backgroundColor: "green", height: "200px" }}>
        Footer
      </footer>
    </>
  );
};

export default Layout;
