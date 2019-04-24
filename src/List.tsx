import {FC} from "react";
import * as React from "react";
import ToDoItem from "./ToDoItem";

const List: FC<{todos: Array<string>}> = (props) => <ul>
    {props.todos.map((todo, index) => <ToDoItem key={todo + index} name={todo}/>)}
</ul>;

export default List;