import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  :not(:last-child) {
    margin-bottom: 80px;
  }
`;
const Title = styled.span`
  font-size: 16px;
  font-weight: 600;
  @media all and (min-width: 1024px) and (max-width: 1366px) {
    margin-left: 2rem;
  }
  @media all and (max-width: 479px) {
    font-size: 12px;
    font-weight: 500;
  }
`;
const Grid = styled.div`
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 125px);
  grid-gap: 25px;
  @media all and (min-width: 1024px) and (max-width: 1366px) {
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

const Section = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <Grid>{children}</Grid>
  </Container>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Section;
