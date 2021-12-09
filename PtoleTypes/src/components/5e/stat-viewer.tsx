import * as React from "react";
import {Col, Form, Row} from "react-bootstrap";

export interface Prop {
    value: string;
    update?: (newValue: string) => void;
}

export interface StatViewerProps {
    str: Prop;
    dex: Prop;
    con: Prop;
    int: Prop;
    wis: Prop;
    cha: Prop;
    editable: boolean;
}

interface StatProps {
    name: string;
    prop: Prop;
    editable: boolean;
}

class Stat extends React.Component<StatProps> {
    constructor(props: StatProps) {
        super(props);
    }

    render() {
        return (
            <Col sm={2}>
                <Form.Label>{this.props.name}</Form.Label>
                <Form.Control
                    plaintext={!this.props.editable}
                    type="text"
                    placeholder={this.props.name}
                    value={this.props.prop.value}
                    onChange={(e) => this.props.prop.update?.(e.target.value)}
                />
            </Col>
        )
    }
}

export class StatViewer extends React.Component<StatViewerProps> {
    constructor(props: StatViewerProps) {
        super(props);
    }

    render() {
        return (
            <Row>
                <Stat name="STR" prop={this.props.str} editable={this.props.editable} />
                <Stat name="DEX" prop={this.props.dex} editable={this.props.editable} />
                <Stat name="CON" prop={this.props.con} editable={this.props.editable} />
                <Stat name="INT" prop={this.props.int} editable={this.props.editable} />
                <Stat name="WIS" prop={this.props.wis} editable={this.props.editable} />
                <Stat name="CHA" prop={this.props.cha} editable={this.props.editable} />
            </Row>
        );
    }
}