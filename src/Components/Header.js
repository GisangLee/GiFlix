import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faTv, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link, withRouter } from "react-router-dom";

import styled from "styled-components";

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: #1e272e;
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display: flex;
  margin-left: 1rem;
  @media all and (max-width: 479px) {
    margin-left: 10px;
    width: 45%;
  }
`;

const Item = styled.li`
  width: 80px;
  height: 50px;
  align-items: center;
  text-decoration: none;
  border-bottom: 2px solid
    ${(props) => (props.current ? "#ecf0f1" : "transparent")};
  font-size: ${(props) => (props.current ? "15px" : "10px")};
  color: ${(props) => (props.current ? "rgb(255, 234, 167)" : "white")};
  transition: all 0.3s linear;
  @media all and (min-width: 480px) and (max-width: 767px) {
    font-size: ${(props) => (props.current ? "12px" : "8px")};
  }
  @media all and (max-width: 479px) {
    font-size: ${(props) => (props.current ? "10px" : "6px")};
  }
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconColumn = styled.span`
  margin-right: 10px;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Item current={pathname === "/"}>
        <SLink to="/">
          <IconColumn>
            <FontAwesomeIcon icon={faFilm} size="2x"></FontAwesomeIcon>
          </IconColumn>
          영화
        </SLink>
      </Item>
      <Item current={pathname === "/tv"}>
        <SLink to="/tv">
          <IconColumn>
            <FontAwesomeIcon icon={faTv} size="2x"></FontAwesomeIcon>
          </IconColumn>
          TV
        </SLink>
      </Item>
      <Item current={pathname === "/search"}>
        <SLink to="/search">
          <IconColumn>
            <FontAwesomeIcon icon={faSearch} size="2x"></FontAwesomeIcon>
          </IconColumn>
          검색
        </SLink>
      </Item>
    </List>
  </Header>
));
