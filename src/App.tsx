import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Layout";

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      }
    ],
  },
]);

const App = () => {
  return (
    <div>
        <Suspense  fallback={<h1 style={{fontSize:'30px',display:'flex',justifyContent:'center',marginTop:'300px'}}>Loading Page...</h1>}>
    
      <RouterProvider router={router} />
    </Suspense>
    </div>
  );
};

export default App;