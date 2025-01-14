import React from "react";
import ImageGrid from "./components/ImageGrid";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styled from "styled-components";
import "./App.css";

const StyledApp = styled.div`
  text-align: center;
  background-color: black;
`;
function App() {
  return (
    <StyledApp>
      <Nav />
      <Header />n
      <ImageGrid />
      <Footer />
    </StyledApp>
  );
}

export default App;
