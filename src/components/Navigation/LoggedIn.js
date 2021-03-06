import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/user/slice";
import Button from "react-bootstrap/Button";
import { selectUser } from "../../store/user/selectors";
import Nav from "react-bootstrap/Nav";

export default function LoggedIn() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <>
      <Nav.Item
        style={{
          padding: ".5rem 1rem",
          color: "#f0aa00 ",
          fontWeight: "bold",
        }}
      >
        {user?.name}
      </Nav.Item>
      <Button
        style={{ borderRadius: 0, backgroundColor: "#ff3076" }}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </>
  );
}
