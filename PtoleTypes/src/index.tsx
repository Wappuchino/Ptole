import * as _ from 'lodash';
import * as React from "react";
import * as ReactDOM from "react-dom";

import Ajv from "ajv-draft-04";
const itemTypeSchema = require('./assets/inventory-schema.json');

import "./main.sass";

import Page from "./components/page";

const validator = new Ajv();
const inventoryValidator = validator.compile(itemTypeSchema);
const data = {
    version: 1,
    itemTypes: [
        {
            id: 0,
            name: "Water",
            description: "Water",
            subtypes: [
                {
                    id: 0,
                    name: "Hot Water",
                    description: "Hot Water"
                }
            ]
        }
    ]
}
;
inventoryValidator(data);

const root = document.createElement('div');
root.setAttribute("id", "root");

document.body.appendChild(root);

ReactDOM.render(<Page/>, root);