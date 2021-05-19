import React, { Component } from 'react'
import NewTodoForm from './NewTodoForm'
import './TodoList.css'
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                { todo: 'Finish this task', isEditing: false, id: uuidv4() }
            ]
        }
        this.addTodo = this.addTodo.bind(this)
        this.removeTodo = this.removeTodo.bind(this)
        this.editTask = this.editTask.bind(this)
        this.editTodo = this.editTodo.bind(this)
    }
    addTodo(todo) {
        let newTodo = { ...todo, isEditing: false, id: uuidv4() }
        this.setState(state => ({
            todos: [...state.todos, newTodo]
        }));
    }
    removeTodo(id) {
        let filteredTodos = this.state.todos.filter(todo => todo.id !== id)
        this.setState({
            todos: [...filteredTodos]
        })
    }
    editTask(id) {
        let editingTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.isEditing = true
            }
            return todo
        })
        this.setState({
            todos: [...editingTodos]
        })
    }
    editTodo(id, content) {
        let editedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.isEditing = false
                if (content !== "") {
                    todo.todo = content
                }
            }
            return todo
        })
        this.setState({
            todos: [...editedTodos]
        })

    }
    render() {
        const todoList = this.state.todos.map(todo => {
            if (todo.isEditing === true) {
                return <NewTodoForm key={todo.id} editingTask={true} editTodo={this.editTodo} todo={todo} />
            } else {
                return <Todo key={todo.id} todo={todo} removeTodo={this.removeTodo} editTask={this.editTask} />
            }
        });
        return (
            <div className="TodoList-container">
                <div className="TodoList-header">
                    <h1>Todo List</h1>
                    <p>A React Todo List App</p>
                </div>
                <div className="TodoList-list">
                    {todoList}
                </div>
                <NewTodoForm addTodo={this.addTodo} />
            </div>
        )
    }
}

export default TodoList