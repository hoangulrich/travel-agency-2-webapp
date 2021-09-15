import React from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtn, Logo } from "./NavbarElements";
import { menuData } from "../../Data/MenuData";
import { Button } from "../Global/Button";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Logo to="/">TRIPPY</Logo>
        <Bars />
        <NavMenu>
          {menuData.map((item, index) => (
            <NavLink to={item.link} key={index}>
              {item.title}
            </NavLink>
          ))}
        </NavMenu>
        <NavBtn>
          <Button primary round to="/trips">
            Book a Flight
          </Button>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
