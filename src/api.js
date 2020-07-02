import axios from "axios";

const API_KEY = "058304e64877b12849e3924d90da607b";
const LANGUAGE = "ko-KR";
const BASE_URL = "https://api.themoviedb.org/3/";

const api = axios.create({
  baseURL: BASE_URL,
});

export const moviesApi = {
  nowPlaying: () =>
    api.get("movie/now_playing", {
      params: {
        api_key: API_KEY,
        language: LANGUAGE,
      },
    }),
  upComing: () =>
    api.get("movie/upcoming", {
      params: {
        api_key: API_KEY,
        language: LANGUAGE,
      },
    }),
  popular: () =>
    api.get("movie/popular", {
      params: {
        api_key: API_KEY,
        language: LANGUAGE,
      },
    }),
  movieDetail: (id) =>
    api.get(`movie/${id}`, {
      params: {
        api_key: API_KEY,
        language: LANGUAGE,
        append_to_response: "videos",
      },
    }),
  search: (term) =>
    api.get("search/movie", {
      params: {
        api_key: API_KEY,
        language: LANGUAGE,
        query: encodeURIComponent(term),
      },
    }),
};

export const tvApi = {
  topRated: () =>
    api.get("tv/top_rated", {
      params: {
        api_key: API_KEY,
        language: LANGUAGE,
      },
    }),
  popular: () =>
    api.get("tv/popular", {
      params: {
        api_key: API_KEY,
        language: LANGUAGE,
      },
    }),
  airingToday: () =>
    api.get("airing_today", {
      params: {
        api_key: API_KEY,
        language: LANGUAGE,
      },
    }),
  showDetail: (id) =>
    api.get(`tv/${id}`, {
      params: {
        api_key: API_KEY,
        language: LANGUAGE,
        append_to_response: "videos",
      },
    }),
  search: (term) =>
    api.get("search/tv", {
      params: {
        api_key: API_KEY,
        language: LANGUAGE,
        query: encodeURIComponent(term),
      },
    }),
};
