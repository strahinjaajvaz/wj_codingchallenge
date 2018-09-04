import { getMovie, getMovies } from "../../shared/api";

export default app => {
  app.get(`/api/get_movies`, (req, res) => {
    getMovies()
      .then(data => res.send(data))
      .catch(err => res.status(422).send({ error: "Please refresh the page" }));
  });

  app.get(`/api/get_movie/:id`, (req, res) => {
    getMovie(req.params.id)
      .then(data => res.send(data))
      .catch(err => res.status(422).send({ error: "Plaese refresh the page" }));
  });
};
