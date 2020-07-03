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
  widht: 50%;
`;

const VideoContainer = styled.div`
  margin-top: 35px;
`;

const VideoBtn = styled.button`
  background-color: #82ccdd;
  width: 30%;
  padding: 20px;
  border: none;
  outline: none;
  border-radius: 4px;
  transition: font-size 0.2s ease-in-out;
`;

const VideoLink = styled.a`
  color: white;
  background-color: transparent;
  &:hover {
    color: #b33939;
    font-size: 20px;
    font-weight: 600;
  }
  transition: font-size 0.2s ease-in-out;
`;

const ProductionCompanyContainer = styled.div`
  height: 100%;
  width: 100%;
  margin-top: 50px;
`;

const ProductCompany = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-gap: 30px;
`;

const ProductCompanyName = styled.span`
  display: block;
  text-align: center;
  height: 100%;
`;

const ProductCompnayImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  width: 150px;
  align: center;
`;

const ProductCompanyTitle = styled.h1`
  color: white;
  font-size: 28px;
  margin-bottom: 20px;
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
            <VideoBtn>
              <VideoLink
                href={`https://www.youtube.com/watch?v=${usResult.videos.results.map(
                  (result) => result.key
                )}`}
              >
                티저 영상 보러가기
              </VideoLink>
            </VideoBtn>
          </VideoContainer>

          <ProductionCompanyContainer>
            <ProductCompanyTitle>제작사</ProductCompanyTitle>
            <ProductCompany>
              {result.production_companies &&
                result.production_companies.map((company) =>
                  company.logo_path ? (
                    <>
                      <ProductCompanyName>
                        {company.name}
                        <ProductCompnayImg
                          src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
                        ></ProductCompnayImg>
                      </ProductCompanyName>
                    </>
                  ) : null
                )}
            </ProductCompany>
          </ProductionCompanyContainer>
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
