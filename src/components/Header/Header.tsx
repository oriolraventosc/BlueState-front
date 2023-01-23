import { CssBaseline, Button } from "@mui/material";
import TokenIcon from "@mui/icons-material/Token";
import HeaderStyled from "./HeaderStyled";
import { NavLink } from "react-router-dom";
import useUser from "../../hooks/useUser/useUser";

const Header = (): JSX.Element => {
  const { userLogout } = useUser();
  return (
    <HeaderStyled className="menu-wrapper">
      <CssBaseline />
      <header className="header">
        <div>
          <NavLink to={"/contacts"} aria-hidden="false" aria-label="blueState">
            <TokenIcon
              aria-label="blueState"
              className="logo-icon"
              aria-hidden="false"
            />
          </NavLink>
        </div>
        <div>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu">
            <li>
              <NavLink to={"/contacts"} aria-label="Contacts list">
                Contacts
              </NavLink>
            </li>
            <li>
              <NavLink to={"/add-new-contact"} aria-label="Add new contact">
                New contact
              </NavLink>
            </li>
            <li>
              <Button onClick={() => userLogout()}>Log out</Button>
            </li>
          </ul>
        </div>
      </header>
    </HeaderStyled>
  );
};

export default Header;
