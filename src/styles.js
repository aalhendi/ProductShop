import styled, { createGlobalStyle } from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { FaPlusCircle } from "react-icons/fa";

export const Description = styled.h4`
  text-align: center;
`;

export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;

  img {
    width: 40%;
    float: left;
  }

  p {
    text-align: center;
    vertical-align: middle;
  }

  button {
    display: block;
    margin: 0 auto;
    width: 200px;
  }
`;

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor}
  }
`;

export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const ProductWrapper = styled.div`
  margin: 20px;

  img {
    width: 200px;
    height: 200px;
  }

  p {
    text-align: center;

    &.product-price {
      color: ${(props) => props.theme.pink};
    }
  }
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;

export const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;

export const ThemeButton = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;

export const Title = styled.h1`
  text-align: center;
`;

export const DeleteButtonStyled = styled.button`
  button {
    display: block;
    margin: 0 auto;
    width: 200px;
  }
`;

export const NavProduct = styled(NavLink)`
  color: ${(props) => props.theme.mainColor};

  &.active {
    color: #39FF14;
`;

export const Logo = styled(Link)`
  padding: 0.75em img {
    width: 8rem;
  }
`;

export const NavStyled = styled.nav`
  background-color: ${(props) => props.theme.backgroundColor};
  }
`;

export const AddIcon = styled(FaPlusCircle)`
  color: ${(props) => props.theme.mainColor};
  margin-left: 80%;
`;

export const SubmitButton = styled.button`
  margin: 0 auto;
  display: block;
  color: ${(props) => props.theme.mainColor};
  background-color: ${(props) => props.theme.backgroundColor};
  border-radius: 20px;
  border: 1px solid;

  &:hover {
    background-color: lightgreen;
  }
`;

export const UpdateButtonStyled = styled.button`
  margin: 0 auto;
  display: block;
  color: ${(props) => props.theme.mainColor};
  background-color: ${(props) => props.theme.backgroundColor};
  border-radius: 20px;
  border: 1px solid;

  &:hover {
    background-color: lightgreen;
  }
`;
