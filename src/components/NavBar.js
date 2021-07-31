import logoImg from "../logoThing.png";
import { ThemeButton, NavProduct, Logo, NavStyled } from "../styles.js";
import SignupButton from "./buttons/SignupButton";
import LoginButton from "./buttons/LoginButton";
//State and store
import authStore from "../stores/authStore";
import { observer } from "mobx-react-lite";

const NavBar = (props) => {
  return (
    <NavStyled className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Logo className="navbar-brand" to="/">
            <img src={logoImg} alt="logo" width="150px" />
          </Logo>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <ThemeButton onClick={props.toggleTheme}>
                {props.currentTheme === "light" ? "Dark" : "Light"} Mode
              </ThemeButton>
            </li>
            <NavProduct className="nav-link" to="/products">
              Products
            </NavProduct>
            <NavProduct className="nav-link" to="/producers">
              Producers
            </NavProduct>
            {authStore.user ? (
              <h3>Hello {authStore.user.username}</h3>
            ) : (
              <>
                <SignupButton />
                <LoginButton />
              </>
            )}
          </ul>
        </div>
      </div>
    </NavStyled>
  );
};
export default observer(NavBar);
