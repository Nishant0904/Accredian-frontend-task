import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Modal from "./components/Modal";
import { useState } from "react";
import Buttons from "./components/Buttons";
import { Outlet } from "react-router-dom";
import Refer from "./components/Refer";
function App() {
  return (
    <>
      <Header />
      <Buttons />
      <Outlet />
    </>
  );
}
export default App;
