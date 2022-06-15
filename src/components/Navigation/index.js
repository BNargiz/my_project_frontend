import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import NavbarItem from "./NavbarItem";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";

export default function Navigation() {
  const token = useSelector(selectToken);

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <Navbar
      expand="lg"
      style={{
        borderBottom: "4px solid #ff3076 ",
        padding: "20px 40px",

        textTransform: "uppercase",
      }}
    >
      <Navbar.Brand
        as={NavLink}
        to="/"
        style={{
          color: "#ff3076",
          fontSize: 25,
          fontWeight: "bold",
        }}
      >
        Fun for kids in NL
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav style={{ width: "100%" }} fill>
          <NavbarItem path="/" linkText="Home" />
          <NavbarItem path="/activities" linkText="Activities for kids" />
          {token ? <NavbarItem path="/user" linkText="My Account" /> : ""}
          {loginLogoutControls}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
