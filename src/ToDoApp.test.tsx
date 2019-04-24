import React from 'react';
import ReactDOM from 'react-dom';
import ToDoApp from './ToDoApp';
import List from './List';
import enzyme from 'enzyme';

const wrapper = enzyme.shallow<ToDoApp>(<ToDoApp/>);

it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ToDoApp/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('should have a heading', () => {
    expect(wrapper.find('h1').text()).toBe('To Do App');
});

it('should have a form with text input', () => {
    expect(wrapper.find('form > input').type()).toBe('input');
});

it('should have a form with a submit button', () => {
    expect(wrapper.find('form > button').text()).toBe('Add');
});

it('should have a list component', () => {
    expect(wrapper.find('List')).toHaveLength(1);
});

it('should clear input on add item', () => {
    //couldn't figure out how to test refs through shallow, must mount
});

it('should add item to list on add item', () => {
    //couldn't figure out how to test refs through shallow, must mount
});
