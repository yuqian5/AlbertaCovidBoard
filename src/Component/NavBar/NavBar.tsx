import React from "react";

import 'bootstrap/dist/css/bootstrap.css';

import {NavDropdown, Nav, Navbar} from "react-bootstrap";

import { Link } from "react-router-dom";

export default class NavBar extends React.Component {
    render() {
        return (
            <div style={{marginBottom: "20px"}}>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand as={Link} to="/">Alberta Covid Board</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/">General</Nav.Link>

                            <NavDropdown title="Zones" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/Zones/EdmontonZone">Edmonton Zone</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/Zones/CalgaryZone">Calgary Zone</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/Zones/SouthZone">South Zone</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/Zones/NorthZone">North Zone</NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Link as={Link} to="/RValues">R Values</Nav.Link>

                            <Nav.Link as={Link} to="/Variants">Variants</Nav.Link>

                            <Nav.Link as={Link} to="/VaccinationProgress">Vaccination Progress</Nav.Link>

                            <Nav.Link as={Link} to="/RelaunchStatus">Relaunch Status</Nav.Link>

                            <Nav.Link as={Link} to="/Misc">Misc</Nav.Link>
                        </Nav>

                        <Nav.Link as={Link} to="/NeedHelp" className="pull-right">Need Help?</Nav.Link>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}