import React from "react";
import styled from "styled-components";

const Stylediv = styled.nav`
  color: white;
  ul {
    list-style: none;
    float: right;
  }
  ul li {
    float: left;
    margin: 10px 20px;
  }
`;
function Nav() {
  return (
    <Stylediv>
      <ul>
        <li>Home</li>
        <li>Contact</li>
        <li>About Us</li>
        <li>Ready</li>
      </ul>
    </Stylediv>
  );
}

export default Nav;
