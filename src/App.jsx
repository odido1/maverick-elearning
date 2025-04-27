import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { BrowserRouter } from "react-router-dom";
import BaseRouter from "./routes";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <BrowserRouter>
      <BaseRouter />
      <ToastContainer/>
    </BrowserRouter>
  );
}

export default App;
