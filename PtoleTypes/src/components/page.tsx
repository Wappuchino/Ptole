import * as React from "react";

import { Container, ListGroup } from "react-bootstrap";
import MainNavbar from "./main_navbar";
import ItemViewer from "./item_viewer";

export default class Page extends React.Component <{}> {
	render() {
		return (
			<Container fluid>
				<MainNavbar />
				<ItemViewer />
			</Container>
		);
	}
}