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

const Cover = styled.div`
  width: 30%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`;

const Title = styled.h2`
  color: white;
  font-size: 28px;
  font-weight: 400;
  margin-bottom: 10px;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
`;

const Item = styled.span``;

const Divider = styled.span`
  margin: 0px 10px;
`;

const OverView = styled.p`
  font-size: 12px;
  opacity: 0.8;
  line-height: 1.7;
  widht: 50%;
`;

const VideoContainer = styled.div`
  margin-top: 35px;
`;

const VideoLink = styled.a`
  color: white;
  background-color: transparent;
  transition: font-size 0.2s ease-in-out;
  &:hover {
    color: #ffdd59;
    font-size: 20px;
  }
`;

const DetailPresenter = ({ result, error, loading, usResult }) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading | GiFlix</title>
      </Helmet>
      <Loader />
    </>
  ) : error ? (
    <Message color="#fdcb6e" text="상세 정보를 찾을 수 업습니다.💦" />
  ) : (
    <Container>
      <Helmet>
        <title>{result.title ? result.title : result.name} | GiFlix</title>
      </Helmet>
      <Backdrop
        bgImage={
          result.backdrop_path
            ? `https://image.tmdb.org/t/p/original/${result.backdrop_path}`
            : require("../../assets/noMovie.jpg")
        }
      />
      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original/${result.poster_path}`
              : require("../../assets/noMovie.jpg")
          }
        />
        <Data>
          <Title>{result.title ? result.title : result.name}</Title>
          <ItemContainer>
            <Item>
              {result.release_date
                ? result.release_date.substring(0, 4)
                : result.first_air_date.substring(0, 4)}
            </Item>
            <Divider>•</Divider>
            <Item>
              {result.runtime ? result.runtime : result.episode_run_time}분
            </Item>
            <Divider>•</Divider>
            <Item>
              {result.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1
                    ? genre.name
                    : `${genre.name} 🤍 `
                )}
            </Item>
          </ItemContainer>
          <OverView>{result.overview ? result.overview : ""}</OverView>
          <VideoContainer>
            <VideoLink
              href={`https://www.youtube.com/watch?v=${usResult.videos.results.map(
                (result) => result.key
              )}`}
            >
              티저 영상 보러가기
            </VideoLink>
          </VideoContainer>
        </Data>
      </Content>
    </Container>
  );

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;
