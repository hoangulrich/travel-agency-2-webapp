import React from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtn } from "./NavbarElements";
import { menuData } from "../../Data/MenuData";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">Trippy</NavLink>
        <Bars />
        <NavMenu>
          {menuData.map((item, index) => (
            <NavLink to={item.link} key={index}>
              {item.title}
            </NavLink>
          ))}
        </NavMenu>
        <NavBtn>Explore</NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
