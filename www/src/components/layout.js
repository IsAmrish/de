/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import React from "react";
import Sidebar from "./sidebar.mdx";
const Layout = ({ props, children }) => {
  console.log(props, children);
  return (
    <>
      <div
        sx={{
          display: "flex",
          flexWrap: "wrap"
        }}
      >
        <aside
          sx={{
            flexGrow: 1,
            flexBasis: "sidebar",
            width: "256px",
            height: "100%"
          }}
        >
          <Sidebar />
        </aside>
        <main
          sx={{
            flexGrow: 99999,
            flexBasis: 0,
            minWidth: 320,
            px: 4
          }}
        >
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
