import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../../App";

function Nav() {
  const { userData, updateUserData } = useContext(UserContext);
  const handleLogout = () => {
    updateUserData({ type: "LOGOUT" });
  };
  return (
    <>
      <Container>
        <FlexContainer>
          {userData ? (
            <>
              {" "}
              <Logo>
                <Link to="/home">
                  <Image src={require("../assets/images/logo.png")} />
                </Link>
              </Logo>
              <Button onClick={() => handleLogout()}>
                <Link to="/auth/login">Logout</Link>
              </Button>
            </>
          ) : (
            <>
              <Logo>
                <Link to="/auth/login/">
                  <Image src={require("../assets/images/logo.png")} />
                </Link>
              </Logo>
              <Button>
                {" "}
                <Link to="/auth/login">Login</Link>
              </Button>
            </>
          )}
          
        </FlexContainer>
        <HeaderQuote>
        Explore the food supply
        </HeaderQuote>
      </Container>
    </>
  );
}
const Container = styled.header`
  padding: 20px 0px;
  font-size: 18px;
  font-weight: 700;
  font-style: italic;
  color: #ff6317;
`;
const FlexContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const HeaderQuote = styled.div`
  padding:0  20px 0px;
  

`;
const Logo = styled.div`
  width: 100px;
`;
const Image = styled.img`
  display: block;
  width: 100%;
`;
const Button = styled.button`
  padding: 15px 48px;
  font-size: 19px;
  font-weight: 600;
  display: inline-block;
  background: #ff6317;
  transition: background-color ease 0.5s;
  color: #fff;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: black;
  }
  a {
    color: #fff;
    text-decoration: none;
  }
`;
export default Nav;
