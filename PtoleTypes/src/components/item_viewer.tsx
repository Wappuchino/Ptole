import * as React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import { ItemType, ItemUnits } from "../lib/inventory";

export default class MainNavbar extends React.Component <{}> {
	generateUnitView(units: ItemUnits, weight: number) {
		if(units === ItemUnits.Weight) {
			return (
				<span>1 lb</span>
			);
		} else if(units === ItemUnits.Length) {
			return (
				<span>{weight} lb (1 ft)</span>
			);
		} else if(units === ItemUnits.Volume) {
			return (
				<span>{weight} lb (1 gal)</span>
			);
		} else {
			return (
				<span>{weight} lb</span>
			);
		}
	}
	
	generateItemTypeView(itemType: ItemType) {
		return (
			<Accordion.Item key={itemType.id} eventKey={itemType.id.toString()}>
				<Accordion.Header>
					<Container fluid> 
						<Row>
							<Col>
								<span className="h1">?</span>
								<span className="h2">{itemType.name}</span>
								<small className="text-muted">#{itemType.id}</small>
							</Col>
							<Col>
								{this.generateUnitView(itemType.units, itemType.weight)}
							</Col>
						</Row>
					</Container>
				</Accordion.Header>
				<Accordion.Body>
					<p>{itemType.description}</p>
				</Accordion.Body>
			</Accordion.Item>
		);
	}

	render() {
		const itemTypes: ItemType[] = [
			{
				id: 0,
				name: "Iron",
				units: ItemUnits.Weight,
				weight: 1.0,
				description: "Bulk processed iron metal"
			},
			{
				id: 1,
				name: "Flame Tongue Short Sword",
				units: ItemUnits.Piece,
				weight: 5.0,
				description: "You can use a bonus action to speak this magic sword's command word, causing flames to erupt from the blade. These flames shed bright light in a 40-foot radius and dim light for an additional 40 feet. While the sword is ablaze, it deals an extra 2d6 fire damage to any target it hits. The flames last until you use a bonus action to speak the command word again or until you drop or sheathe the sword."
			},
			{
				id: 2,
				name: "Rope",
				units: ItemUnits.Length,
				weight: 2.0,
				description: "Sturdy hemp rope for general use"
			}
		];
	
		return (
			<Accordion>
				{
					itemTypes.map(
						(itemType) => this.generateItemTypeView(itemType)
					)
				}
			</Accordion>
		);
	}
}