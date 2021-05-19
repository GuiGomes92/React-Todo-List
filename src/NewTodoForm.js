import React, { Component } from 'react'
import './NewTodoForm.css'
import { FaPlus, FaSave } from "react-icons/fa";

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: '',
            isEmpty: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    handleSubmit(evt) {
        evt.preventDefault();
        if (this.state.todo !== '') {
            this.props.addTodo(this.state);
            this.setState({ todo: '', isEmpty: false })
        } else {
            this.setState({ isEmpty: true })
        }

    }
    handleEdit(evt) {
        evt.preventDefault();
        this.props.editTodo(this.props.todo.id, this.state.todo);
    }
    render() {
        return (
            <form className="NewTodoForm-form" onSubmit={this.props.editingTask ? this.handleEdit : this.handleSubmit}>
                <div className="NewTodoForm-input">
                    <input
                        type="text"
                        id="todo"
                        name="todo"
                        value={this.state.todo}
                        placeholder={this.props.editingTask ? this.props.todo.todo : 'Add New Task'}
                        onChange={this.handleChange}
                    />
                    <button>{this.props.editingTask ? <FaSave color="#D3CCE3" /> : <FaPlus color="#D3CCE3" />}</button>
                </div>
                {this.state.isEmpty ? <p>Forgot something, matte?</p> : ''}
            </form>
        )
    }
}

export default NewTodoForm;