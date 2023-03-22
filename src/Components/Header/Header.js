import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import navIcon from "../../data/image/icon/favicon.png";
import "./Header.css";

const Header = (props) => {
    return (
        <div className="menuBar">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Link className="link" to = "football-mania">
                        <img src= {navIcon} width="40" height="40" className="d-inline-block align-top"alt="React Bootstrap logo"/>
                        
                    </Link>
                    <Nav className="me-auto">
                        <Link className="link" to = "football-mania">Home</Link>
                        <Link className="link" to = "about">About</Link>
                        <Link className="link" to = "contact">Contact</Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
