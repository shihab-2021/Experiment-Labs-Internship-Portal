import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routers/Routers";
import AuthProvider from "./Contexts/AuthProvider";
import DynamicFavicon from "./DynamicFavicon";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <DynamicFavicon />
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
