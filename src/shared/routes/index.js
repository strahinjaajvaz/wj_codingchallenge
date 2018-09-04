import Movies from "../container/MoviesContainer";
import Movie from "../container/MovieContainer";

import { getMovies, getMovie } from "../api";

const routes = [
  {
    path: "/",
    exact: true,
    component: Movies,
    fetchInitialData: () => getMovies()
  },
  {
    path: "/movie/:id",
    component: Movie,
    fetchInitialData: (path = "") => getMovie(path.split("/").pop())
  }
];

export default routes;
