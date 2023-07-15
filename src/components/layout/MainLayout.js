import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <hr />
      <div className="main">{children}</div>
      <Footer />
    </div>
  );
};
