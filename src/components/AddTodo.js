import { Component } from "react";
import TodoList from "./TodoList";
import classes from './AddTodo.module.css'

class AddTodo extends Component {
    constructor() {
        super()
        this.state = {
            userInput: '',
            list: []
        }
    }
    changeUserInput = (event) => {
        this.setState({
            userInput: event.target.value
        })
    }
    addToList = () => {
        let listArray = this.state.list
        listArray.push(this.state.userInput)

        this.setState({
            list: listArray,
            userInput: ''
        })
    }

    render() {
        return (
            <div className={classes.container}>
                <input
                    onChange={this.changeUserInput}
                    value={this.state.userInput}
                    type='text'
                    placeholder="Write something..." />
                <button onClick={this.addToList}>Add</button>
                <ul>
                    {this.state.list.map((value) => <TodoList key={Math.random().toString()} val={value} />)}
                </ul>
            </div>
        )
    }
}

export default AddTodo