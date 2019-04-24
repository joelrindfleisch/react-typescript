import {Component} from 'react';
import * as React from "react";
import List from "./List";

interface State {
    newToDo: string,
    toDos: Array<string>
}

class ToDoApp extends Component<any, State> {
    readonly addToDoRef: React.RefObject<HTMLFormElement>;

    constructor(props: any) {
        super(props);

        this.state = {
            newToDo: '',
            toDos: ['Try out Jest']
        };
        this.addToDoRef = React.createRef();
    }

    addToDo = (newToDo: string) => {
        const updatedToDoList = this.state.toDos;
        updatedToDoList.push(newToDo);
        this.setState({
            newToDo: '',
            toDos: updatedToDoList
        });
    };

    submitForm = (e: any) => {
        e.preventDefault();
        // @ts-ignore
        if (this.addToDoRef.current.checkValidity()) {
            this.addToDo(this.state.newToDo);
        } else {
            // @ts-ignore
            this.addToDoRef.current.reportValidity();
        }

    };

    updateNewItem = (e: any) => {
        this.setState({
            newToDo: e.target.value
        });
    };

    render() {
        return (
            <div>
                <h1>To Do App</h1>
                <form ref={this.addToDoRef}>
                    <input type='text' required={true} value={this.state.newToDo} onChange={this.updateNewItem}/>
                    <button type='submit' onClick={this.submitForm}>Add</button>
                </form>
                <List todos={this.state.toDos}/>
            </div>
        );
    }
}

export default ToDoApp;
