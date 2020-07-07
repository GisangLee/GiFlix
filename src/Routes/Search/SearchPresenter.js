import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Loader } from "../../Components/Loader";
import Section from "../../Components/Section";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";

const Container = styled.div`
  padding: 0px 20px;
`;

const Form = styled.form`
  margin-top: 20px;
  margin-bottom: 40px;
  width: 100%;
`;

const Input = styled.input`
  outline: none;
  font-size: 20px;
  text-indent: 20px;
  color: white;
  background-color: #2c3e50;
  border: none;
  ::placeholder {
    color: rgb(223, 230, 233, 0.8);
    font-size: 15px;
  }
  border-radius: 30px;
  padding: 10px 0;
  width: 30%;
  @media all and (min-width: 1024px) and (max-width: 1366px) {
    text-indent: 15px;
  }
  @media all and (min-width: 768px) and (max-width: 1023px) {
    text-indent: 12px;
    width: 40%;
  }
  @media all and (min-width: 480px) and (max-width: 767px) {
    text-indent: 10px;
    width: 50%;
    font-size: 15px;
    ::placeholder {
      font-size: 12px;
    }
  }
  @media all and (max-width: 479px) {
    width: 60%;
    text-indent: 10px;
    font-size: 10px;
    ::placeholder {
      font-size: 10px;
    }
  }
`;

const Searchdiv = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IconContainer = styled.div`
  position: absolute;
  left: 28%;
  @media all and (min-width: 768px) and (max-width: 1023px) {
    left: 35%;
  }
  @media all and (min-width: 1024px) and (max-width: 1366px) {
    left: 27%;
  }
  @media all and (min-width: 480px) and (max-width: 767px) {
    left: 44%;
    font-size: 13px;
  }
  @media all and (max-width: 479px) {
    left: 53%;
    font-size: 12px;
  }
`;

const SearchPresenter = ({
  movieResults,
  tvResults,
  searchTerm,
  error,
  loading,
  handleSubmit,
  updateTerm,
}) => (
  <Container>
    <Helmet>
      <title>Search | GiFlix</title>
    </Helmet>
    <Form onSubmit={handleSubmit}>
      <Searchdiv>
        <Input
          placeholder="영화/TV 프로그램을 검색하세요"
          value={searchTerm}
          onChange={updateTerm}
        />
        <IconContainer>
          <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
        </IconContainer>
      </Searchdiv>
    </Form>
    {loading ? (
      <Loader />
    ) : (
      <>
        {movieResults && movieResults.length > 0 && (
          <Section title="영화 검색 결과">
            {movieResults.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                imageUrl={movie.poster_path}
                title={movie.title}
                rating={movie.vote_average}
                isMovie={true}
                year={movie.release_date && movie.release_date.substring(0, 4)}
              />
            ))}
          </Section>
        )}
        {tvResults && tvResults.length > 0 && (
          <Section title="TV 프로그램 검색 결과">
            {tvResults.map((show) => (
              <Poster
                key={show.id}
                id={show.id}
                imageUrl={show.poster_path}
                title={show.name}
                rating={show.vote_average}
                isMovie={false}
                year={
                  show.first_air_date && show.first_air_date.substring(0, 4)
                }
              />
            ))}
          </Section>
        )}
        {error && <Message color="#c0392b" text={error} />}
        {tvResults &&
        movieResults &&
        tvResults.length === 0 &&
        movieResults.length === 0 ? (
          <Message color="#e84393" text={"원하시는 검색 결과가 없습니다.😥"} />
        ) : null}
      </>
    )}
  </Container>
);

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  searchTerm: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired,
};

export default SearchPresenter;
