import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from './PageHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'


const URL = 'http://localhost:3003/api/todos'


export default class Todo extends Component{
	constructor(props){
		super(props)
		this.state = { description: '', list:[] }
		this.handleAdd = this.handleAdd.bind(this)
		this.handleChange = this.handleChange.bind(this)
			this.handleRemove = this.handleRemove.bind(this)
			this.handleCheckAsDone = this.handleCheckAsDone.bind(this)
			this.handleCheckAsPending = this.handleCheckAsPending.bind(this)
			this.handleSearch = this.handleSearch.bind(this)
			this.handleClear = this.handleClear.bind(this)
		this.refresh()
	}

	refresh(description=''){
			const search = description ? `&description__regex=/${description}/` : ''
		axios.get(`${URL}?sort=-createdAt${search}`)
					.then(resp=>this.setState({...this.state, description,  list: resp.data}))
	}
handleSearch(){
	this.refresh(this.state.description)
}
handleClear(){
		this.refresh()
}

	handleAdd(){
			const description = this.state.description
			axios.post(URL, { description })
					.then(resp => this.refresh())
	}

	handleChange(e){
		this.setState({ ...this.state, description: e.target.value })
	}

	handleRemove(todo){
			axios.delete(`${URL}/${todo._id}`)
					.then(resp=>this.refresh(this.state.description))
	}

		handleCheckAsDone(todo){
				axios.put(`${URL}/${todo._id}`, {...todo, done:true})
						.then(resp=>this.refresh(this.state.description))
		}
		handleCheckAsPending(todo){
				axios.put(`${URL}/${todo._id}`, {...todo, done:false})
						.then(resp=>this.refresh(this.state.description))
		}

	render(){
		return (
			<div>
					<PageHeader name='Tarefas' small='Cadastro'/>

					<TodoForm 	description={this.state.description} 
								handleChange={this.handleChange}
								handleAdd={this.handleAdd}
								handleSearch={this.handleSearch}
								handleClear={this.handleClear}>
							
					</TodoForm>
					
					<TodoList list={this.state.list}
					handleRemove={this.handleRemove} 
					handleCheckAsDone={this.handleCheckAsDone}
					handleCheckAsPending={this.handleCheckAsPending}></TodoList>
			</div>
		)
	}
}