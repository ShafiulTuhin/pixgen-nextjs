import Footer from "@/component/shared/Footer";
import Navbar from "@/component/shared/Navbar";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  );
};

export default MainLayout;
