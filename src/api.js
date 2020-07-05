import axios from "axios";

const API_KEY = "058304e64877b12849e3924d90da607b";
const LANGUAGE = {
  korea: "ko-KR",
  english: "en-US",
};
const BASE_URL = "https://api.themoviedb.org/3/";

const api = axios.create({
  baseURL: BASE_URL,
});

export const moviesApi = {
  nowPlaying: () =>
    api.get("movie/now_playing", {
      params: {
        api_key: API_KEY,
        language: LANGUAGE.korea,
      },
    }),

  upComing: () =>
    api.get("movie/upcoming", {
      params: {
        api_key: API_KEY,
        language: LANGUAGE.korea,
      },
    }),

  popular: () =>
    api.get("movie/popular", {
      params: {
        api_key: API_KEY,
        language: LANGUAGE.korea,
      },
    }),

  movieDetail: (id) =>
    api.get(`movie/${id}`, {
      params: {
        api_key: API_KEY,
        language: LANGUAGE.korea,
        append_to_response: "videos",
      },
    }),
  movieDetailUs: (id) =>
    api.get(`movie/${id}`, {
      params: {
        api_key: API_KEY,
        language: LANGUAGE.english,
        append_to_response: "videos",
      },
    }),
  search: (term) =>
    api.get("search/movie", {
      params: {
        api_key: API_KEY,
        language: LANGUAGE.korea,
        page: 1,
        query: term,
        include_adult: false,
      },
    }),
};

export const tvApi = {
  topRated: () =>
    api.get("tv/top_rated", {
      params: {
        api_key: API_KEY,
        language: LANGUAGE.korea,
      },
    }),
  popular: () =>
    api.get("tv/popular", {
      params: {
        api_key: API_KEY,
        language: LANGUAGE.korea,
      },
    }),
  airingToday: () =>
    api.get("tv/airing_today", {
      params: {
        api_key: API_KEY,
        language: LANGUAGE.korea,
      },
    }),
  showDetail: (id) =>
    api.get(`tv/${id}`, {
      params: {
        api_key: API_KEY,
        language: LANGUAGE.korea,
        append_to_response: "videos",
      },
    }),
  showDetailUs: (id) =>
    api.get(`tv/${id}`, {
      params: {
        api_key: API_KEY,
        language: LANGUAGE.english,
        append_to_response: "videos",
      },
    }),
  search: (term) =>
    api.get("search/tv", {
      params: {
        api_key: API_KEY,
        language: LANGUAGE.korea,
        page: 1,
        query: term,
        include_adult: false,
      },
    }),
};
