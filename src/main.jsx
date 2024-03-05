import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cherry from "./pages/Cherry.jsx";
import Banana from "./pages/Banana.jsx";
import Apple from "./pages/Apple.jsx";
import RootLayout from "./RootLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/apple",
        element: <Apple />,
      },
      {
        path: "/banana",
        element: <Banana />,
      },
      {
        path: "/cherry",
        element: <Cherry />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
