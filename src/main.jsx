import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routers/Router";
import Authentication from "./Context/Authentication";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authentication>
      <div className="container mx-auto">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </Authentication>
  </React.StrictMode>
);
