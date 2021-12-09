import * as React from "react";

import {Container, Form, ListGroup} from "react-bootstrap";
import MainNavbar from "./main_navbar";
import {StatViewer, StatViewerProps} from "./5e/stat-viewer";
import produce from "immer";

export default class Page extends React.Component <{}, StatViewerProps> {
	updateStr(newValue: string) {
		this.setState(prev => produce(prev, draft => {
			draft.str.value = newValue;
		}))
	}

	updateDex(newValue: string) {
		this.setState(prev => produce(prev, draft => {
			draft.dex.value = newValue;
		}))
	}

	updateCon(newValue: string) {
		this.setState(prev => produce(prev, draft => {
			draft.con.value = newValue;
		}))
	}

	updateInt(newValue: string) {
		this.setState(prev => produce(prev, draft => {
			draft.int.value = newValue;
		}))
	}

	updateWis(newValue: string) {
		this.setState(prev => produce(prev, draft => {
			draft.wis.value = newValue;
		}))
	}

	updateCha(newValue: string) {
		this.setState(prev => produce(prev, draft => {
			draft.cha.value = newValue;
		}))
	}

	constructor(props: {}) {
		super(props);

		this.updateStr = this.updateStr.bind(this);
		this.updateDex = this.updateDex.bind(this);
		this.updateCon = this.updateCon.bind(this);
		this.updateInt = this.updateInt.bind(this);
		this.updateWis = this.updateWis.bind(this);
		this.updateCha = this.updateCha.bind(this);

		this.state = {
			str: {
				value: "10",
				update: this.updateStr
			},
			dex: {
				value: "10",
				update: this.updateDex
			},
			con: {
				value: "10",
				update: this.updateCon
			},
			int: {
				value: "10",
				update: this.updateInt
			},
			wis: {
				value: "10",
				update: this.updateWis
			},
			cha: {
				value: "10",
				update: this.updateCha
			},
			editable: true
		};
	}

	render() {
		return (
			<Container fluid>
				<MainNavbar />
				<Form>
					<StatViewer
						str={this.state.str}
						dex={this.state.dex}
						con={this.state.con}
						int={this.state.int}
						wis={this.state.wis}
						cha={this.state.cha}
						editable={this.state.editable}
					/>
				</Form>
			</Container>
		);
	}
}