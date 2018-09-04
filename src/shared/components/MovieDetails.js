import React from "react";
import styled from "styled-components";

const ImgContainer = styled.img`
  float: left;
  width: 300px;
  height: 450px;
  margin-right: 20px;
  display: inline-block;
`;

const Title = styled.h2`
  font-size: 2rem;
`;

const Rated = styled.p`
  font-size: 1.6rem;
`;

const Runtime = Rated.extend``;

const Released = Runtime.extend``;

const Plot = Released.extend``;

const Genre = Plot.extend``;

const Director = Genre.extend``;

const Actors = Director.extend``;

const Writer = Actors.extend``;

export default ({
  Title: title,
  Rated: rated,
  Released: released,
  Runtime: runtime,
  Genre: genre,
  Director: director,
  Writer: writer,
  Actors: actors,
  Plot: plot,
  Awards: awards,
  Poster: poster,
  Metascore: metascore,
  Rating: rating,
  Votes: votes,
  Price: price
}) => (
  <div>
    <ImgContainer src={poster} alt={`${title} poster`} />
    <Title>{title}</Title>
    <Rated>Rated: {rated}</Rated>
    <Runtime>Runtime: {runtime}</Runtime>
    <Released>Released: {released}</Released>
    <Director>Director: {director}</Director>
    <Actors>Cast: {actors}</Actors>
    <Writer>Writer: {writer}</Writer>
    <Genre>Genre: {genre}</Genre>
    <Plot>{plot}</Plot>
  </div>
);
