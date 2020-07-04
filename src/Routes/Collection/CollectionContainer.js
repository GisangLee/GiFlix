import React from "react";
import CollectionPresenter from "./CollectionPresenter";
import { moviesApi, tvApi } from "../../api";

export default class extends React.Component {
  render() {
    return <CollectionPresenter />;
  }
}
