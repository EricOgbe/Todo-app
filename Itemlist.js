import React, { Component } from 'react'


class Itemlist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            striped: false
        }
        this.crossed = this.crossed.bind(this)  
    }
    crossed() {
        this.setState({
            striped: !this.state.striped
        })
    }
    render() {
        return <div className='list'  onClick={this.crossed}>
            <li style={{textDecoration: this.state.striped? "line-through": null}}><h2  >{this.props.text}</h2></li>
        </div>

    }
}

export default Itemlist;