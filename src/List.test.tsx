import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import {shallow} from 'enzyme';

const expectedProps = {
    todos: [
        'firstItem',
        'secondItem'
    ]
};
const wrapper = shallow(<List todos={expectedProps.todos}/>);

it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List todos={expectedProps.todos}/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('should render a ul for the to do list', () => {
    expect(wrapper.find('ul')).toHaveLength(1);
});

it('should have a ToDoItem for each todo in props', () => {
    expect(wrapper.find('ToDoItem')).toHaveLength(expectedProps.todos.length);
});