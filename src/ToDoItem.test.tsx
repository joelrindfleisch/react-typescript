import React from 'react';
import ReactDOM from 'react-dom';
import ToDoItem from './ToDoItem';
import {shallow} from 'enzyme';

const EXPECTED_NAME = 'expectedName';
const expectedProps = {
    name: EXPECTED_NAME
};
const wrapper = shallow(<ToDoItem name={expectedProps.name}/>);

it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ToDoItem name={expectedProps.name}/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('should render a li for the to do list item', () => {
    expect(wrapper.find('li')).toHaveLength(1);
});

it('should have the to do item name in the li', () => {
    expect(wrapper.find('li').text()).toBe(EXPECTED_NAME);
});