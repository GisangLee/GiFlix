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
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`;

const SeasonContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const SeasonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 150px);
  grid-gap: 30px;
`;

const SeasonTitle = styled.h1`
  color: white;
  font-size: 28px;
  margin-bottom: 50px;
`;

const SeasonImage = styled.img`
  display: block;
  margin: 30px auto;
  width: 100%;
  align: center;
`;

const SeasonName = styled.span`
  transition: opacity 0.4s linear;
  &:hover {
    opacity: 0.7;
  }
`;

const SeasonItem = styled.span`
  display: block;
  margin-top: 10px;
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
                  <SeasonName>
                    {season.name}
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
                  </SeasonName>
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
