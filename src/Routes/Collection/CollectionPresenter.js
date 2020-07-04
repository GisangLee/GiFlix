import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "../../Components/Section";
import { Loader } from "../../Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
  @media all and (min-width: 1024px) and (max-width: 1366px) {
    position: absolute;
    display: block;
    bottom: 0;
    right: 0;
    max-width: 100%;
    max-height: 100%;
    background-image: url(${(props) => props.bgImage});
    background-size: contain;
  }
  @media all and (min-width: 768px) and (max-width: 1023px) {
    position: absolute;
    display: block;
    bottom: 0;
    right: 0;
    max-width: 100%;
    max-height: 100%;
    background-image: url(${(props) => props.bgImage});
    background-size: contain;
  }
  @media all and (min-width: 480px) and (max-width: 768px) {
    position: absolute;
    display: block;
    bottom: 0;
    right: 0;
    max-width: 100%;
    max-height: 100%;
    background-image: url(${(props) => props.bgImage});
    background-size: contain;
  }
  @media all and (max-width: 479px) {
    position: absolute;
    display: block;
    bottom: 0;
    right: 0;
    max-width: 100%;
    max-height: 100%;
    background-image: url(${(props) => props.bgImage});
    background-size: contain;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
  @media all and (min-width: 1024px) and (max-width: 1366px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media all and (min-width: 768px) and (max-width: 1023px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media all and (min-width: 480px) and (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media all and (max-width: 479px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Data = styled.div`
  width: 30%;
  height: 80%;
  margin-left: 30px;
  text-align: center;
  transition: all 0.3s ease-in-out;
  &:hover {
    opacity: 0.7;
  }
  @media all and (min-width: 1024px) and (max-width: 1366px) {
    margin-top: 15px;
    width: 50%;
    height: 50%;
  }
  @media all and (min-width: 768px) and (max-width: 1023px) {
    margin-top: 15px;
    width: 50%;
    height: 50%;
  }
  @media all and (min-width: 480px) and (max-width: 767px) {
    margin-top: 15px;
    width: 70%;
    height: 40%;
  }
  @media all and (max-width: 479px) {
    margin-top: 15px;
    width: 70%;
    height: 40%;
  }
`;

const Cover = styled.div`
  width: 100%;
  height: 100%;
  margin: 2rem auto;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  border-radius: 10px;
`;

const Title = styled.span`
  color: white;
  font-size: 28px;
  @media all and (min-width: 1024px) and (max-width: 1366px) {
    font-size: 30px;
  }
  @media all and (min-width: 768px) and (max-width: 1023px) {
    font-size: 24px;
  }
  @media all and (min-width: 480px) and (max-width: 767px) {
    font-size: 17px;
  }
  @media all and (max-width: 479px) {
    font-size: 14px;
  }
`;

const CollectionPresenter = ({ result, error, loading, usResult }) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading | GiFlix</title>
      </Helmet>
      <Loader />
    </>
  ) : error ? (
    <Message color="#fdcb6e" text="시리즈 정보를 찾을 수 없습니다.💦" />
  ) : (
    <Container>
      <Helmet>
        <title>
          {result.title ? result.title : result.name} 시리즈 | GiFlix
        </title>
      </Helmet>
      <Backdrop
        bgImage={
          usResult.belongs_to_collection.backdrop_path
            ? `https://image.tmdb.org/t/p/original/${usResult.belongs_to_collection.backdrop_path}`
            : require("../../assets/noMovie.jpg")
        }
      />
      <Content>
        <Data>
          <Title>{result.belongs_to_collection.name}</Title>

          <Cover
            bgImage={
              result.belongs_to_collection.poster_path
                ? `https://image.tmdb.org/t/p/original/${result.belongs_to_collection.poster_path}`
                : require("../../assets/noMovie.jpg")
            }
          />
        </Data>
      </Content>
    </Container>
  );
CollectionPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default CollectionPresenter;
