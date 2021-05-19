import React, { Component } from 'react'
import './Todo.css'
import { FaPen, FaTrash } from "react-icons/fa";

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            crossed: false
        }
        this.handleRemove = this.handleRemove.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.toggleLine = this.toggleLine.bind(this)
    }
    handleEdit(id) {
        this.props.editTask(id)
    }
    handleRemove(id) {
        this.props.removeTodo(id)
    }
    toggleLine() {
        this.state.crossed ? this.setState({ crossed: false }) : this.setState({ crossed: true })
    }
    render() {
        return (
            <div className="Todo-item">
                <p className={this.state.crossed ? 'Todo-cross' : ''} onClick={this.toggleLine}>{this.props.todo.todo}</p>
                <div className="Todo-btns">
                    <button onClick={() => this.handleEdit(this.props.todo.id)}><FaPen color="#D3CCE3" /></button>
                    <button onClick={() => this.handleRemove(this.props.todo.id)}><FaTrash color="#D3CCE3" /></button>
                </div>
            </div>
        )
    }
}

export default Todo;