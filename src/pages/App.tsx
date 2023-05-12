import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TestPage from "./TestPage/TestPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TestPage />,
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
