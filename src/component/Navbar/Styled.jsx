import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/esm/Col";

export const NavbarStyled = styled(Navbar)`
  background-color: #161616;
`;

export const ColNav = styled(Col)`
  font-size: 23px;
  justify-content: flex-end;
  display: flex;
  @media (max-width: 893px) {
    justify-content: space-evenly;
  }
`;

export const Collapse = styled(Navbar.Collapse)`
  display: flex;
`;

export const Toggle = styled(Navbar.Toggle)`
  color: transparent;
  @media (max-width: 893px) {
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-right: 0;
    background-color: #fff;
  }
`;

export const Link = styled.a`
  color: #fff;
  margin-right: 3rem;
  margin-top: 0.18rem;
  padding: 0.9rem;
  text-decoration: none;
  &:hover {
    color: #ffa600;
  }
`;

export const SignOutButtom = styled.button`
  border-color: transparent;
  background-color: transparent;
  color: #fff;
  &:hover {
    color: #ffa600;
  }
`;
