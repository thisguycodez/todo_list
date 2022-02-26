import react from 'react'
import '../util/css/todo.css'
import List from './List'
import Form from './forms/'

class Todo extends react.Component{
constructor(props){
	super(props)
	this.state={}
	

	}



	render(){

		return (

<div className="container mt-5 p-3 rounded">
    <div className="row no-gutters">
    <List/>
    <Form/>   
    </div>
</div>

	)


	}
}













export default Todo




