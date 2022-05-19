import { Component } from "react";
import classes from'./TodoList.module.css'

class TodoList extends Component{
    constructor(){
        super()
        this.state= {
            completed : false
        }
    }
    complete = ()=>{
        this.setState({completed : !this.state.completed})
    }

    render(){
        return(
            <>
            {this.props.val.length > 0 && <li onClick={this.complete}  className={`${classes.list} ${this.state.completed === false ? classes.notchecked : classes.checked}`}>{this.props.val}</li>}
            </>
        )
    }
}

export default TodoList