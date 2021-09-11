import React from "react";
import { HeaderItem } from "models";
import { Navbar, NavItem, Nav } from "react-bootstrap";

const headers: HeaderItem[] = [
  {
    title: "Home",
    target: "/",
  },
  {
    title: "Accounts",
    target: "/accounts",
  },
  {
    title: "Transfers",
    target: "/transfers",
  },
  {
    title: "Investments",
    target: "/investments",
  },
  {
    title: "Contact Us",
    target: "/contact",
  },
  {
    title: "Log out",
    pullRight: true,
    target: "/logout",
  },
];

function Header() {
  return (
    <Navbar>
      <Nav>
        {headers.map((item) => (
          <NavItem key={item.target}>{item.title}</NavItem>
        ))}
      </Nav>
    </Navbar>
  );
}

export default Header;
