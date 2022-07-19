import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Sidebar from "./Sidebar/Sidebar";

export default function Layout({ children }) {
  return (
    <>
      <div class="page-container" style={{ marginTop: 100 }}>
        <Header />
        <Sidebar />
        {children}
      </div>
    </>
  );
}
