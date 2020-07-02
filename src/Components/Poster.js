import React from "react";
import PropTpyes from "prop-types";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Container = styled.div`
  font-size: 12px;
`;

const Image = styled.div`
  background-image: urL(${(props) => props.bgUrl});
  height: 180px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
  transition: opacity 0.2s ease-in-out;
`;

const Rating = styled.span`
  bottom: 10px;
  right: 8px;
  position: absolute;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
`;
const Title = styled.span`
  display: block;
  margin-bottom: 5px;
`;

const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;

const Year = styled.span`
  color: rgba(255, 255, 255, 0.6);
`;

const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => (
  <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
    {" "}
    <Container>
      <ImageContainer>
        <Image
          bgUrl={
            imageUrl
              ? `https://image.tmdb.org/t/p/w500/${imageUrl}`
              : require("../assets/noMovie.jpg")
          }
        />
        <Rating>
          <span role="img" aria-label="rating">
            🏆
          </span>{" "}
          {rating}/10
        </Rating>
      </ImageContainer>
      <Title>
        {title.length > 10 ? `${title.substring(0, 10)}...` : title}
      </Title>
      <Year>{year}</Year>
    </Container>
  </Link>
);

Poster.propTypes = {
  id: PropTpyes.number.isRequired,
  imageUrl: PropTpyes.string,
  title: PropTpyes.string.isRequired,
  rating: PropTpyes.number,
  year: PropTpyes.string,
  isMovie: PropTpyes.bool,
};

export default Poster;
