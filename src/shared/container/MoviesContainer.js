import React from "react";
import axios from "axios";
import styled from "styled-components";
import MovieItem from "../components/MovieItem";

const MoviesContainer = styled.div`
  disply: flex;
  flex-wrap: wrap;
`;

export default class extends React.Component {
  constructor(props) {
    super(props);

    let data;
    if (__isBrowser__) {
      data = window.__INITIAL_DATA__;
      delete window.__INITIAL_DATA__;
    } else {
      data = props.staticContext.data;
    }

    this.state = {
      movies: data && !data.error ? data : null,
      loading: (data && data.error) || data ? false : true,
      error: data && data.error
    };

    this.fetchMovies = this.fetchMovies.bind(this);
  }

  componentDidMount() {
    if (!this.state.movies) {
      this.fetchMovies();
    }
  }

  componentWillReceiveProps(nextProps) {
    const { match } = this.props;

    if (nextProps.match.params.id !== match.params.id) {
      this.fetchMovies();
    }
  }

  fetchMovies() {
    this.setState(() => ({
      loading: true
    }));
    axios
      .get("/api/get_movies")
      .then(res =>
        this.setState(() => ({
          movies: res.data,
          loading: false
        }))
      )
      .catch(error =>
        this.setState(() => ({
          loading: false,
          error: error.response.data.error
        }))
      );
  }

  render() {
    console.log(this.state);
    if (this.state.loading) return <p>loading...</p>;
    if (this.state.error) return <p>{this.state.error}</p>;
    return (
      <MoviesContainer>
        {this.state.movies.map(({ ID, Title, Year, Type, Poster }) => (
          <MovieItem
            key={ID}
            id={ID}
            title={Title}
            year={Year}
            type={Type}
            poster={Poster}
          />
        ))}
      </MoviesContainer>
    );
  }
}
