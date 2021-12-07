import * as _ from 'lodash';
import * as React from "react";
import * as ReactDOM from "react-dom";

import "./main.sass";

import Page from "./components/page";

const root = document.createElement('div');
root.setAttribute("id", "root");

document.body.appendChild(root);

ReactDOM.render(<Page/>, root);