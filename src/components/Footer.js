import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  padding-bottom: 20px;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 75%;
  margin: 0 auto;
  a {
    text-decoration: none;
    color: white;
  }
`;
const StyledText = styled.div`
  color: red;
`;

function Footer() {
  return (
    <StyledFooter>
      <p>Astronomy Photo of the Day</p>
      <StyledText>Hello World!</StyledText>
      <a href="https://github.com/AjAlyounis" target="_blank">
        @GCJ2
      </a>
    </StyledFooter>
  );
}

export default Footer;