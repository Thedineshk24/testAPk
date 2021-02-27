import React, { useState } from "react";

// reactstrap
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from "reactstrap";

// css
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="header">
      <Navbar light expand="md">
        <NavbarBrand href="/">
          <img
            src="https://static.wixstatic.com/media/885c0e_33bd8c6486544c679a27ee20392a5932~mv2.png/v1/fill/w_165,h_60,al_c,q_85,usm_0.66_1.00_0.01/sova_FINAL-02.webp"
            alt="sova-health"
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem> 
              <NavLink className="headerItem" href="#"><span>HOME</span></NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="headerItem" href="#">HOW IT WORKS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="headerItem" href="#">PRICING</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="headerItem" href="#">BLOGS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="headerItem" href="#">FAQS</NavLink>
            </NavItem>
          </Nav>
          <Button className="text-uppercase btn btn-danger">get started</Button>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
