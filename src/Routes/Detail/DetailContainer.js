import React from "react";
import DetailPresenter from "./DetailPresenter";
import { moviesApi, tvApi } from "../../api";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname },
    } = props;
    this.state = {
      result: null,
      usResult: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/"),
    };
    console.log(">>>props: ", props);
  }

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;

    const { isMovie } = this.state;
    console.log(isMovie);
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push("/");
    }
    let result = null;
    let usResult = null;
    try {
      if (isMovie) {
        ({ data: result } = await moviesApi.movieDetail(parsedId));
        ({ data: usResult } = await moviesApi.movieDetailUs(parsedId));
      } else {
        ({ data: result } = await tvApi.showDetail(parsedId));
        ({ data: usResult } = await tvApi.showDetailUs(parsedId));
      }
      console.log(">>>results: ", result);
    } catch {
      this.setState({ error: "결과를 찾을 수 없습니다." });
    } finally {
      this.setState({ loading: false, result, usResult });
    }
  }

  render() {
    const { result, error, loading, usResult } = this.state;
    console.log(">>>상세 데이터: ", this.state);
    return (
      <DetailPresenter
        result={result}
        error={error}
        loading={loading}
        usResult={usResult}
      />
    );
  }
}
