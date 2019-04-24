import {FC} from "react";
import * as React from "react";

const ToDoItem: FC<{name: string}> = (props) => <li>{props.name}</li>;

export default ToDoItem;
