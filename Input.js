import React, { Component } from 'react';
import './App.css'
import Itemlist from './Itemlist'

class Input extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: '',
            items: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.addItem = this.addItem.bind(this)
       
    }
    handleChange(evt) {
        var value =  evt.target.value
        this.setState({
       input: value
        })
    }
    addItem() {
        this.setState({
            items: [...this.state.items,this.state.input],
            input: ''
        })
    }
   
    
    render() {
        return <div>
            <input onChange={this.handleChange} value={this.state.input}></input>
            <br /><button onClick={this.addItem}>add item</button>
            <ul>
            {this.state.items.map(item => { return <Itemlist  text={item} />})}
            </ul>
        </div>

    }
}

export default Input;