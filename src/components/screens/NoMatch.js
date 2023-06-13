import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
function NoMatch() {
  return (
    <>
      <Helmet>
        <title>Error</title>
      </Helmet>
      <Container>
      <Images src={require("../assets/images/error.png")} />

      </Container>
    </>
  );
}

export default NoMatch;
const Container = styled.div`
  text-align: center;
 background-color: orange;
  padding: 90px 0;
  width: 100%;
  height: 50vh;
`;
const Images = styled.img`
width: 20%;
margin: 0 auto;
`;
