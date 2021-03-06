import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import { Loader } from "../../Components/Loader";
import Message from "../../Components/Message";

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

const SeasonContainer = styled.div`
  width: 100%;
  height: 100%;
  @media all and (min-width: 1024px) and (max-width: 1366px) {
    margin-top: 20px;
  }
  @media all and (min-width: 768px) and (max-width: 1023px) {
    margin-top: 20px;
  }
  @media all and (min-width: 480px) and (max-width: 767px) {
    margin-top: 20px;
  }
  @media all and (max-width: 479px) {
    margin-top: 10px;
  }
`;

const SeasonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 150px);
  grid-gap: 30px;
  @media all and (min-width: 1024px) and (max-width: 1366px) {
    grid-template-columns: repeat(auto-fill, 150px);
    grid-gap: 35px;
    margin-top: 20px;
  }
  @media all and (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: repeat(auto-fill, 150px);
    grid-gap: 22px;
    margin-top: 20px;
  }
  @media all and (min-width: 480px) and (max-width: 767px) {
    grid-template-columns: repeat(auto-fill, 120px);
    grid-gap: 5px;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  @media all and (max-width: 479px) {
    grid-template-columns: repeat(auto-fill, 80px);
    grid-gap: 17px;
    margin-top: 20px;
  }
`;

const SeasonTitle = styled.h1`
  color: white;
  font-size: 28px;
  margin-bottom: 50px;
  @media all and (min-width: 1024px) and (max-width: 1366px) {
    font-size: 30px;
    margin-bottom: 30px;
  }
  @media all and (min-width: 768px) and (max-width: 1023px) {
    font-size: 20px;
    margin-bottom: 30px;
  }
  @media all and (min-width: 480px) and (max-width: 767px) {
    font-size: 17px;
    margin-bottom: 30px;
  }
  @media all and (max-width: 479px) {
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

const SeasonItemContainer = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: opacity 0.4s linear;
  &:hover {
    opacity: 0.7;
  }
  @media all and (min-width: 768px) and (max-width: 1023px) {
    margin-bottom: 10px;
  }
  @media all and (max-width: 479px) {
    font-size: 12px;
    margin-bottom: 10px;
  }
`;

const SeasonImage = styled.img`
  display: block;
  width: 100%;
  @media all and (min-width: 1024px) and (max-width: 1366px) {
    margin: 8px 0;
    height: 70%;
  }
  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 70%;
    height: 60%;
  }
  @media all and (min-width: 480px) and (max-width: 767px) {
    margin-top: 15px;
    width: 60%;
    height: 50%;
  }
  @media all and (max-width: 479px) {
    margin-top: 5px;
    margin-bottom: 10px;
    width: 100%;
    height: 55%;
  }
`;

const SeasonName = styled.span`
  margin-bottom: 10px;
  @media all and (min-width: 1024px) and (max-width: 1366px) {
    margin-bottom: 2px;
  }
  @media all and (min-width: 768px) and (max-width: 1023px) {
    margin-bottom: 5px;
  }
  @media all and (max-width: 479px) {
    margin-bottom: 1px;
  }
`;

const SeasonItem = styled.span`
  display: block;
  margin-top: 5px;
  @media all and (min-width: 1024px) and (max-width: 1366px) {
    font-size: 20px;
    margin-top: 3px;
  }
  @media all and (min-width: 768px) and (max-width: 1023px) {
    font-size: 15px;
    margin-top: 3px;
  }
  @media all and (min-width: 480px) and (max-width: 767px) {
    font-size: 12px;
  }
  @media all and (max-width: 479px) {
    font-size: 10px;
    margin-top: 2px;
  }
`;

const SeaonPresenter = ({ result, error, loading, usResult }) =>
  loading ? (
    <>
      <Helmet>
        <title>시즌 | Gilix</title>
      </Helmet>{" "}
      <Loader />
    </>
  ) : error ? (
    <Message color="#fdcb6e" text="시즌 정보를 찾을 수 없습니다." />
  ) : (
    <Container>
      <Backdrop
        bgImage={
          result.backdrop_path
            ? `https://image.tmdb.org/t/p/original/${result.backdrop_path}`
            : require("../../assets/noMovie.jpg")
        }
      />
      <Content>
        <SeasonContainer>
          <SeasonTitle>{result.name} 시리즈</SeasonTitle>
          <SeasonGrid>
            {result.seasons &&
              result.seasons.map((season, index) => (
                <>
                  <SeasonItemContainer>
                    <SeasonName>{season.name}</SeasonName>
                    <SeasonImage
                      key={result.id}
                      src={
                        season.poster_path
                          ? `https://image.tmdb.org/t/p/w200${season.poster_path}`
                          : require("../../assets/noMovie.jpg")
                      }
                    />
                    <SeasonItem>
                      {season.air_date && season.air_date.substring(0, 7)}
                    </SeasonItem>
                    <SeasonItem>
                      {season.overview ? season.over_view : null}
                    </SeasonItem>
                    <SeasonItem>
                      {season.episode_count
                        ? `총 ${season.episode_count}편`
                        : null}
                    </SeasonItem>
                  </SeasonItemContainer>
                </>
              ))}
          </SeasonGrid>
        </SeasonContainer>
      </Content>
    </Container>
  );

SeaonPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default SeaonPresenter;
