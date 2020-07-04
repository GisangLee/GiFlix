import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import { Loader } from "../../Components/Loader";
import { Link } from "react-router-dom";
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
  margin-left: 30px;
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
  width: 50%;
  margin-bottom: 10px;
`;

const VideoContainer = styled.div`
  margin: 10px 0;
`;

const VideoBtn = styled.button`
  background-color: transparent;
  width: 30%;
  border: none;
  outline: none;
  border-radius: 4px;
  transition: font-size 0.2s ease-in-out;
`;

const VideoLink = styled.a`
  display: block;
  padding: 20px;
  text-align: left;
  color: white;
  width: 100%;
  background-color: transparent;
  &:hover {
    color: #fff200;
    font-size: 20px;
    font-weight: 600;
  }
  transition: font-size 0.2s ease-in-out;
`;

const ProductionCompanyContainer = styled.div`
  width: 100%;
  margin-top: 30px;
`;

const ProductCompany = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-gap: 30px;
  margin-bottom: 30px;
`;

const ContentDiver = styled.div`
  display: flex;
  align-items: center;
`;

const ProductCompanyName = styled.span`
  display: block;
  text-align: center;
  height: 100%;
  transition: all 0.5s linear;
  &:hover {
    opacity: 0.5;
  }
`;

const ProductCompnayImg = styled.img`
  display: block;
  margin: 30px auto;
  width: 150px;
  align-items: center;
`;

const ProductCompanyTitle = styled.h1`
  color: white;
  font-size: 28px;
  margin-bottom: 50px;
`;

const GotoSeasonContainer = styled.div`
  margin-top: 25px;
`;

const GotoSeasonBtn = styled.button`
  background-color: transparent;
  width: 30%;
  border: none;
  outline: none;
  border-radius: 4px;
`;

const GotoSeason = styled.a`
  color: white;
  display: block;
  text-align: left;
  padding: 20px;
  background-color: transparent;
  &:hover {
    color: #fff200;
    font-size: 20px;
    font-weight: 600;
  }
  transition: font-size 0.2s ease-in-out;
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
          <ContentDiver>—</ContentDiver>
          <VideoContainer>
            <VideoBtn>
              <VideoLink
                key={result.id}
                href={`https://www.youtube.com/watch?v=${usResult.videos.results.map(
                  (result) => result.key
                )}`}
              >
                ⏭ 티저 영상 보러가기
              </VideoLink>
            </VideoBtn>
          </VideoContainer>
          <ContentDiver>—</ContentDiver>

          <ProductionCompanyContainer>
            <ProductCompanyTitle>제작사</ProductCompanyTitle>
            <ProductCompany>
              {usResult.production_companies &&
                usResult.production_companies.map((company, index) => (
                  <>
                    <ProductCompanyName>
                      {company.name}
                      <ProductCompnayImg
                        key={result.id}
                        src={
                          company.logo_path
                            ? `https://image.tmdb.org/t/p/w200${company.logo_path}`
                            : require("../../assets/noMovie.jpg")
                        }
                      ></ProductCompnayImg>
                    </ProductCompanyName>
                  </>
                ))}
            </ProductCompany>
            <ContentDiver>—</ContentDiver>
          </ProductionCompanyContainer>
          {result.seasons ? (
            <Link to={`/season/${result.id}`}>
              <GotoSeasonContainer>
                <GotoSeasonBtn>
                  <GotoSeason>⏭ 시즌 보러가기</GotoSeason>
                </GotoSeasonBtn>
              </GotoSeasonContainer>
            </Link>
          ) : null}
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
