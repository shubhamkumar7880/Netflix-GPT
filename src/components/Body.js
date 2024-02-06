import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Movie from "./Movie";
import TvShow from "./TvShow";
import Watch from "./Watch";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/browse/movies",
      element: <Movie />,
    },
    {
      path: "/browse/tv-shows",
      element: <TvShow />,
    },
    {
      path: "watch/:id",
      element: <Watch />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
