import * as React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export default class MainNavbar extends React.Component <{}> {
	render() {
		return (
			<Navbar bg="light" sticky="top">
				<Container>
					<Navbar.Brand>Ptole</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav" role="navigation">
						<Nav className="me-auto">
							<Nav.Link href="#home">Home</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		);
	}
}