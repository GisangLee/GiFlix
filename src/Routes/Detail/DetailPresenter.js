import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import { Loader } from "../../Components/Loader";
import { Link } from "react-router-dom";
import Message from "../../Components/Message";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  padding: 30px;
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
  height: 100%;
  position: relative;
  z-index: 1;
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

const Cover = styled.div`
  width: 30%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
  @media all and (min-width: 1024px) and (max-width: 1366px) {
    width: 100%;
    height: 100%;
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 5px;
  }
  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 100%;
    height: 100%;
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 5px;
  }
  @media all and (min-width: 480px) and (max-width: 767px) {
    width: 100%;
    height: 100%;
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 5px;
  }
  @media all and (max-width: 479px) {
    width: 100%;
    height: 100%;
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 5px;
  }
`;

const Data = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 30px;
  @media all and (min-width: 1024px) and (max-width: 1366px) {
    margin-top: 15px;
    margin-left: 0;
  }
  @media all and (min-width: 768px) and (max-width: 1023px) {
    margin-top: 15px;
    margin-left: 0;
  }
  @media all and (min-width: 480px) and (max-width: 767px) {
    margin-top: 15px;
    margin-left: 0;
  }
  @media all and (max-width: 479px) {
    margin-top: 15px;
    margin-left: 0;
  }
`;

const Title = styled.h2`
  color: white;
  font-size: 28px;
  font-weight: 400;
  margin-bottom: 10px;
  @media all and (min-width: 1024px) and (max-width: 1366px) {
    font-size: 28px;
  }
  @media all and (min-width: 768px) and (max-width: 1023px) {
    font-size: 24px;
  }
  @media all and (min-width: 480px) and (max-width: 767px) {
    font-size: 20px;
  }
  @media all and (max-width: 479px) {
    font-size: 14px;
  }
`;

const ItemContainer = styled.div`
  margin: 20px 0;
`;

const Item = styled.span`
  @media all and (min-width: 1024px) and (max-width: 1366px) {
    font-size: 20px;
  }
  @media all and (min-width: 768px) and (max-width: 1023px) {
    font-size: 14px;
  }
  @media all and (min-width: 480px) and (max-width: 767px) {
    font-size: 11px;
  }
  @media all and (max-width: 479px) {
    font-size: 12px;
  }
`;

const Divider = styled.span`
  margin: 0px 10px;
`;

const OverView = styled.p`
  font-size: 12px;
  opacity: 0.8;
  line-height: 1.7;
  width: 50%;
  margin-bottom: 10px;
  @media all and (min-width: 1024px) and (max-width: 1366px) {
    font-size: 18px;
    width: 100%;
  }
  @media all and (min-width: 768px) and (max-width: 1023px) {
    font-size: 14px;
    width: 100%;
  }
  @media all and (min-width: 480px) and (max-width: 767px) {
    font-size: 10px;
    width: 100%;
  }
  @media all and (max-width: 479px) {
    font-size: 10px;
    width: 100%;
  }
`;

const VideoContainer = styled.div`
  margin: 10px 0;

  @media all and (min-width: 1024px) and (max-width: 1366px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  @media all and (min-width: 768px) and (max-width: 1023px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  @media all and (min-width: 480px) and (max-width: 767px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  @media all and (max-width: 479px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

const VideoBtn = styled.button`
  background-color: transparent;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 4px;
  transition: font-size 0.2s ease-in-out;
  &:hover {
    color: #fff200;
    font-size: 20px;
    font-weight: 600;
  }
  transition: font-size 0.2s ease-in-out;
  @media all and (min-width: 1024px) and (max-width: 1366px) {
    font-size: 18px;
  }
  @media all and (min-width: 768px) and (max-width: 1023px) {
    font-size: 14px;
  }
  @media all and (min-width: 480px) and (max-width: 767px) {
    font-size: 11px;
  }
  @media all and (max-width: 479px) {
    font-size: 10px;
  }
`;

const VideoLink = styled.a`
  text-align: left;
  color: white;
  height: 50%;
  background-color: transparent;
`;

const HomePageBtn = styled.button`
  background-color: transparent;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 4px;
  transition: font-size 0.2s ease-in-out;
  &:hover {
    color: #fff200;
    font-size: 20px;
    font-weight: 600;
  }
  transition: font-size 0.2s ease-in-out;
  @media all and (min-width: 1024px) and (max-width: 1366px) {
    font-size: 18px;
  }
  @media all and (min-width: 768px) and (max-width: 1023px) {
    font-size: 14px;
  }
  @media all and (min-width: 480px) and (max-width: 767px) {
    font-size: 11px;
  }
  @media all and (max-width: 479px) {
    font-size: 10px;
  }
`;

const HomePageLink = styled.a`
  margin-left: 10px;
  text-align: left;
  color: white;
  height: 50%;
  background-color: transparent;
`;

const ProductionCompanyContainer = styled.div`
  width: 100%;
  margin-top: 30px;
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

const ProductCompany = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-gap: 30px;
  @media all and (min-width: 1024px) and (max-width: 1366px) {
    margin-top: 20px;
  }
  @media all and (min-width: 768px) and (max-width: 1023px) {
    margin-bottom: 10px;
  }
  @media all and (min-width: 480px) and (max-width: 767px) {
    margin-bottom: 10px;
  }
  @media all and (max-width: 479px) {
    grid-template-columns: repeat(3, 25%);
  }
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
  @media all and (min-width: 1024px) and (max-width: 1366px) {
    font-size: 20px;
  }
  @media all and (min-width: 768px) and (max-width: 1023px) {
    font-size: 14px;
  }
  @media all and (min-width: 480px) and (max-width: 767px) {
    font-size: 11px;
  }
  @media all and (max-width: 479px) {
    font-size: 10px;
  }
`;

const ProductCompnayImg = styled.img`
  display: block;
  margin: 30px auto;
  width: 150px;
  align-items: center;
  @media all and (min-width: 1024px) and (max-width: 1366px) {
    width: 80%;
    margin: 10px auto;
  }
  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 40%;
    margin: 10px auto;
  }
  @media all and (min-width: 480px) and (max-width: 767px) {
    width: 30%;
    margin: 10px auto;
  }
  @media all and (max-width: 479px) {
    width: 30%;
    margin: 10px auto;
  }
`;

const ProductCompanyTitle = styled.h1`
  color: white;
  font-size: 28px;
  margin-bottom: 50px;
  @media all and (min-width: 1024px) and (max-width: 1366px) {
    font-size: 24px;
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
    font-size: 14px;
    margin-bottom: 20px;
  }
`;

const GotoSeasonContainer = styled.div`
  width: 30%;
  height: 10%;
  @media all and (min-width: 1024px) and (max-width: 1366px) {
    font-size: 22px;
    width: 30%;
  }
  @media all and (min-width: 768px) and (max-width: 1023px) {
    font-size: 15px;
    width: 30%;
  }
  @media all and (min-width: 480px) and (max-width: 767px) {
    font-size: 12px;
    width: 30%;
  }
  @media all and (max-width: 479px) {
    font-size: 10px;
    width: 40%;
  }
`;

const GotoSeasonBtn = styled.button`
  background-color: transparent;
  width: 100%;
  height: 20%;
  margin-top: 20px;
  border: none;
  outline: none;
  border-radius: 4px;
`;

const GotoSeason = styled.div`
  text-align: left;
  color: white;
  background-color: transparent;
  display:flex;
  justify-content: flex-start;
  &:hover {
    color: #fff200;
    font-size: 20px;
    font-weight: 600;
  }
  transition: font-size 0.2s ease-in-out;
  @media all and (min-width: 1024px) and (max-width: 1366px) {
    font-size: 22px;
  }
  @media all and (min-width: 768px) and (max-width: 1023px) {
    font-size: 15px;
  }
  @media all and (min-width: 480px) and (max-width: 767px) {
    font-size: 12px;
  }
  @media all and (max-width: 479px) {
    font-size: 10px;
    height
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
    <Container key={result.id}>
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
            <Item key={result.id}>
              {result.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1
                    ? genre.name
                    : `${genre.name} / `
                )}
            </Item>
            <Divider>•</Divider>
            <Item>
              {result.vote_average &&
              (result.vote_average / 2).toFixed(1) >= 5.0
                ? "❤❤❤❤❤"
                : (result.vote_average / 2).toFixed(1) >= 4.0
                ? "❤❤❤❤🤍"
                : (result.vote_average / 2).toFixed(1) >= 3.0
                ? "❤❤❤🤍🤍"
                : (result.vote_average / 2).toFixed(1) >= 2.0
                ? "❤❤🤍🤍🤍"
                : (result.vote_average / 2).toFixed(1) >= 1.0
                ? "❤🤍🤍🤍🤍"
                : (result.vote_average / 2).toFixed(1) >= 0.0
                ? "🤍🤍🤍🤍🤍"
                : null}
            </Item>
          </ItemContainer>
          <OverView>{result.overview ? result.overview : ""}</OverView>
          <ContentDiver>—</ContentDiver>
          <VideoContainer>
            <VideoLink
              key={result.id}
              href={`https://www.youtube.com/watch?v=${usResult.videos.results.map(
                (result) => result.key
              )}`}
            >
              <VideoBtn>
                <span role="img" aria-label="teaser">
                  ⏭
                </span>{" "}
                티저 영상 보러가기
              </VideoBtn>
            </VideoLink>
            <HomePageLink
              href={
                result.homepage ? `${result.homepage}` : `https://www.giflix.ga`
              }
            >
              <HomePageBtn>
                <span role="img" aria-label="site">
                  ✅
                </span>{" "}
                사이트 바로가기
              </HomePageBtn>
            </HomePageLink>
          </VideoContainer>

          <ContentDiver>—</ContentDiver>

          <ProductionCompanyContainer>
            <ProductCompanyTitle>제작사</ProductCompanyTitle>
            <ProductCompany key={result.id}>
              {usResult.production_companies &&
                usResult.production_companies.map((company, index) => (
                  <>
                    <ProductCompanyName key={result.id}>
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
            <GotoSeasonContainer>
              <Link to={`/season/${result.id}`}>
                <GotoSeasonBtn>
                  <GotoSeason>
                    <span role="img" aria-label="season">
                      ⏭
                    </span>{" "}
                    시즌 보러가기
                  </GotoSeason>
                </GotoSeasonBtn>
              </Link>
            </GotoSeasonContainer>
          ) : usResult.belongs_to_collection || result.belongs_to_collection ? (
            <GotoSeason>
              <Link to={`/collection/${usResult.id}`}>
                <GotoSeasonBtn>
                  <span role="img" aria-label="series">
                    ⏭
                  </span>{" "}
                  시리즈 보러가기
                </GotoSeasonBtn>
              </Link>
            </GotoSeason>
          ) : (
            <GotoSeason>시리즈가 없습니다.</GotoSeason>
          )}
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
