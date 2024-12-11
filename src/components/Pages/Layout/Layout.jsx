import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className=" mt-[44px]" />
      <div className=" min-h-screen">{children}</div>
      <Footer />
    </div>
  );
}
