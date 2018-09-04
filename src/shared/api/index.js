import axios from "axios";
import {WEBJET_TOKEN} from '../../../config'

const URL = `http://webjetapitest.azurewebsites.net`;
const HEADERS = {
  headers: {
    "x-access-token": WEBJET_TOKEN
  }
};

export const getMovies = () => {
  return axios
    .all([
      axios
        .get(`${URL}/api/cinemaworld/movies`, HEADERS)
        .then(res => res.data.Movies),
      axios
        .get(`${URL}/api/filmworld/movies`, HEADERS)
        .then(res => res.data.Movies)
    ])
    .then(data =>
      data
        .reduce((acc, cur) => [...acc, ...cur], [])
        .filter(
          (movie, index, self) =>
            index ===
            self.findIndex(
              m =>
                m.ID.substr(2, m.ID.length) === movie.ID.substr(2, m.ID.length)
            )
        )
    )
    .catch(err => ({ error: err }));
};

export const getMovie = id => {
  return axios
    .all([
      axios
        .get(`${URL}/api/cinemaworld/movie/cw${id}`, HEADERS)
        .then(res => res.data),
      axios
        .get(`${URL}/api/filmworld/movie/fw${id}`, HEADERS)
        .then(res => res.data)
    ])
    .then(data => {
      return data.filter(
        (movie, index, self) =>
          index ===
          self.findIndex(
            m => m.ID.substr(2, m.ID.length) === movie.ID.substr(2, m.ID.length)
          )
      )[0];
    });
};
