"use client";

import React from "react";
import Hero from "./components/Hero";
import Browse from "./components/Browse";
import Products from "./components/Products";
import Rooms from "./components/Rooms";
import Furniture from "./components/Furniture";

export default function Page() {
  return (
    <div>
      <Hero />
      <Browse />
      <Products />
      <Rooms />
      <Furniture />
    </div>
  );
}
