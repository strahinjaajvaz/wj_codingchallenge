import React from "react";
import axios from "axios";
import MovieDetails from "../components/MovieDetails";

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
    console.log(data);
    this.state = {
      movie: data && !data.error ? data : null,
      loading: (data && data.error) || data ? false : true,
      error: data && data.error
    };

    this.fetchMovie = this.fetchMovie.bind(this);
  }

  componentDidMount() {
    if (!this.state.movie) {
      this.fetchMovie(this.props.match.params.id);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { match } = this.props;

    if (nextProps.match.params.id !== match.params.id) {
      this.fetchMovie(nextProps.match.params.id);
    }
  }

  fetchMovie(id) {
    this.setState(() => ({
      loading: true
    }));
    axios
      .get(`/api/get_movie/${id}`)
      .then(res =>
        this.setState(() => ({
          movie: res.data,
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
    if (this.state.loading) return <p>loading...</p>;
    if (this.state.error) return <p>error</p>;
    return <MovieDetails {...this.state.movie} />;
  }
}
