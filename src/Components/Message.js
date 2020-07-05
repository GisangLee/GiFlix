import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  @media all and (max-width: 479px) {
    width: 100%;
  }
`;

const Text = styled.span`
  margin: 20% auto;
  color: ${(props) => props.color};
  font-size: 24px;
  @media all and (min-width: 1024px) and (max-width: 1366px) {
    font-size: 28px;
  }
  @media all and (max-width: 479px) {
    font-size: 16px;
  }
`;

const Message = ({ text, color }) => (
  <Container>
    <Text color={color}>{text}</Text>
  </Container>
);

Message.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Message;
