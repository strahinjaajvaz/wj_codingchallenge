import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MovieContainer = styled(Link)`
  margin: 5px;
  height: 450px;
  width: 300px;
  position: relative;
  display: inline-block;
`;

const MovieCard = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: all 0.5s ease;

  &:hover {
    transform: rotateY(180deg);
  }
`;

const MovieContainerFront = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;

const MovieContainerBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  color: #333;
  transform: rotateY(180deg);

  p {
    font-size: 2.4rem;
    color: black;
    text-align: center;
  }
`;

export default ({ title, year, id, type, poster }) => (
  <MovieContainer to={`/movie/${id.substr(2, id.length)}`}>
    <MovieCard>
      <MovieContainerFront src={poster} alt={`${poster} poster`} />
      <MovieContainerBack>
        <p>{title}</p>
        <p>Year: {year}</p>
        <p>Type: {type}</p>
      </MovieContainerBack>
    </MovieCard>
  </MovieContainer>
);
