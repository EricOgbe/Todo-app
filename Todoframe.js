import React, { Component } from 'react';
import './App.css'
import Input from './Input';

class Todoframe extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <div className='frame'>
            <h1>Todo App</h1>
         <Input />
        </div>

    }
}

export default Todoframe;