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

const Info = styled.p`
  font-size: 1.6rem;
`;

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
    <Info>{title}</Info>
    <Info>Rated: {rated}</Info>
    <Info>Runtime: {runtime}</Info>
    <Info>Released: {released}</Info>
    <Info>Director: {director}</Info>
    <Info>Cast: {actors}</Info>
    <Info>Writer: {writer}</Info>
    <Info>Genre: {genre}</Info>
    <Info>Awards: {awards}</Info>
    <Info>Metascore: {metascore}</Info>
    <Info>Rating: {rating}</Info>
    <Info>Votes: {votes}</Info>
    <Info>Price: {price}</Info>
    <Info>{plot}</Info>
  </div>
);
