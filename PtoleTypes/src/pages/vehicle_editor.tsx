import * as React from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {StatViewer, StatViewerProps} from "../components/5e/stat-viewer";

interface VehicleEditorState {
    name: string;
    size: string;
    techLevel: string;
    weight: string;
    proficiencyRequirements: {
        air: boolean;
        land: boolean;
        mech: boolean;
        sea: boolean;
    };
    movement: {
        walk: string;
        burrow: string;
        climb: string;
        swim: string;
        fly: string;
    };
    stats: {
        hp: string;
        hitDice: string;
        ac: string;
    },
    abilityScores: StatViewerProps,
    slots: {
        mods: string;
        universal: {
            light: string;
            medium: string;
            heavy: string;
            superheavy: string;
        };
        melee: {
            light: string;
            medium: string;
            heavy: string;
            superheavy: string;
        };
        ordinance: {
            light: string;
            medium: string;
            heavy: string;
            superheavy: string;
        };
        ranged: {
            light: string;
            medium: string;
            heavy: string;
            superheavy: string;
        };
        gun: {
            light: string;
            medium: string;
            heavy: string;
            superheavy: string;
        };
    };
}

export class VehicleEditor extends React.Component<VehicleEditorState> {
    constructor(props: VehicleEditorState) {
        super(props);
    }

    render() {
        const onSubmit = (e: React.FormEvent) => {
            e.preventDefault();
        };

        return (
            <Form>
                <Form.Group controlId="formGeneralInfo" onSubmit={onSubmit}>
                    <Row>
                        <Col sm={3}>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" />
                        </Col>
                        <Col sm={3}>
                            <Form.Label>Size</Form.Label>
                            <Form.Select>
                                <option value="Light">Light</option>
                                <option value="Medium">Medium</option>
                                <option value="Heavy">Heavy</option>
                                <option value="Superheavy">Superheavy</option>
                            </Form.Select>
                        </Col>
                        <Col sm={3}>
                            <Form.Label>Tech Level</Form.Label>
                            <Form.Select>
                                <option value="Basic">Basic</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Advanced">Advanced</option>
                            </Form.Select>
                        </Col>
                        <Col sm={3}>
                            <Form.Label>Weight</Form.Label>
                            <Form.Control type="text" placeholder="Weight" />
                        </Col>
                    </Row>
                    <Row>
                        <Form.Label>Proficiency Types</Form.Label>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Check inline type="checkbox" name="proficencyType" value="Air" label="Air" />
                        </Col>
                        <Col>
                            <Form.Check inline type="checkbox" name="proficencyType" value="Land" label="Land" />
                        </Col>
                        <Col>
                            <Form.Check inline type="checkbox" name="proficencyType" value="Mech" label="Mech" />
                        </Col>
                        <Col>
                            <Form.Check inline type="checkbox" name="proficencyType" value="Sea" label="Sea" />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group controlId="formMoveInfo">
                    <Row>
                        <Col sm={2}>
                            <Form.Label>Walk</Form.Label>
                            <Form.Control type="text" placeholder="Walk" />
                        </Col>
                        <Col sm={2}>
                            <Form.Label>Burrow</Form.Label>
                            <Form.Control type="text" placeholder="Burrow" />
                        </Col>
                        <Col sm={2}>
                            <Form.Label>Climb</Form.Label>
                            <Form.Control type="text" placeholder="Climb" />
                        </Col>
                        <Col sm={2}>
                            <Form.Label>Swim</Form.Label>
                            <Form.Control type="text" placeholder="Swim" />
                        </Col>
                        <Col sm={2}>
                            <Form.Label>Fly</Form.Label>
                            <Form.Control type="text" placeholder="Fly" />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group controlId="formStatInfo">
                    <Row>
                        <Col sm={4}>
                            <Form.Label>HP</Form.Label>
                            <Form.Control type="text" placeholder="HP" />
                        </Col>
                        <Col sm={4}>
                            <Form.Label>Hit Dice</Form.Label>
                            <Form.Control type="text" placeholder="Hit Dice" />
                        </Col>
                        <Col sm={4}>
                            <Form.Label>AC</Form.Label>
                            <Form.Control type="text" placeholder="AC" />
                        </Col>
                    </Row>
                    <StatViewer
                        str={this.props.abilityScores.str}
                        dex={this.props.abilityScores.dex}
                        con={this.props.abilityScores.con}
                        int={this.props.abilityScores.int}
                        wis={this.props.abilityScores.wis}
                        cha={this.props.abilityScores.cha}
                        editable={true}
                    />
                </Form.Group>
                <Form.Group>
                    <Row>
                        <Form.Label>Mod Slots</Form.Label>
                        <Form.Control type="text" placeholder="0" />
                    </Row>
                    <Row>
                        <Col xs={3}>Equipment</Col>
                        <Col xs={2}>S</Col>
                        <Col xs={2}>M</Col>
                        <Col xs={2}>H</Col>
                        <Col xs={2}>SH</Col>
                    </Row>
                    <Row>
                        <Col xs={3}>
                        </Col>
                        <Col xs={2}>
                            <Form.Control type="text" placeholder="0" />
                        </Col>
                        <Col xs={2}>
                            <Form.Control type="text" placeholder="0" />
                        </Col>
                        <Col xs={2}>
                            <Form.Control type="text" placeholder="0" />
                        </Col>
                        <Col xs={2}>
                            <Form.Control type="text" placeholder="0" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={3}>
                            Melee
                        </Col>
                        <Col xs={2}>
                            <Form.Control type="text" placeholder="0" />
                        </Col>
                        <Col xs={2}>
                            <Form.Control type="text" placeholder="0" />
                        </Col>
                        <Col xs={2}>
                            <Form.Control type="text" placeholder="0" />
                        </Col>
                        <Col xs={2}>
                            <Form.Control type="text" placeholder="0" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={3}>
                            Ranged
                        </Col>
                        <Col xs={2}>
                            <Form.Control type="text" placeholder="0" />
                        </Col>
                        <Col xs={2}>
                            <Form.Control type="text" placeholder="0" />
                        </Col>
                        <Col xs={2}>
                            <Form.Control type="text" placeholder="0" />
                        </Col>
                        <Col xs={2}>
                            <Form.Control type="text" placeholder="0" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={3}>
                            Ordinance
                        </Col>
                        <Col xs={2}>
                            <Form.Control type="text" placeholder="0" />
                        </Col>
                        <Col xs={2}>
                            <Form.Control type="text" placeholder="0" />
                        </Col>
                        <Col xs={2}>
                            <Form.Control type="text" placeholder="0" />
                        </Col>
                        <Col xs={2}>
                            <Form.Control type="text" placeholder="0" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={3}>
                            Device
                        </Col>
                        <Col xs={2}>
                            <Form.Control type="text" placeholder="0" />
                        </Col>
                        <Col xs={2}>
                            <Form.Control type="text" placeholder="0" />
                        </Col>
                        <Col xs={2}>
                            <Form.Control type="text" placeholder="0" />
                        </Col>
                        <Col xs={2}>
                            <Form.Control type="text" placeholder="0" />
                        </Col>
                    </Row>
                </Form.Group>
                <Button type="submit">Save</Button>
            </Form>
        );
    }
}