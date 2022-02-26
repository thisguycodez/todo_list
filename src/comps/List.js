import react from 'react'
import {connect} from 'react-redux'
import {del_or_edit_choice,del_or_edit_action} from '../redux/actions'

class List extends react.Component{
constructor(props){
	super(props)
	this.state={}
	}



	render(){

		return (

(

  <div className="col-md-8">
            <div className="list-flow mr-2">
                <div className="d-flex flex-row align-items-center"><i className="fa fa-long-arrow-left"></i><span className="ml-2">Todo List</span></div>
                <hr/>
                <h6 className="mb-0">List</h6>
                <div className="d-flex justify-content-between"><span>{this.props.todo_msg}</span>

                </div>
              
                  {this.props.todo_list.map((todo,i)=>{
              		return(
						<div key={i} className="d-flex justify-content-between align-items-center mt-3 p-2 items rounded" onClick={()=>{return this.props.del_or_edit_choice(todo)}}>
						<div className="d-flex flex-row"><img className="rounded" src={this.props.todo_img} width="40"/><small className="font-weight-bold d-block spec">{todo.subject}</small>
						<div className="ml-2"><span className="font-weight-bold d-block">{todo.todo}</span><code className="spec"><small>Date Posted:{todo.posted_date}</small></code></div>
						</div>
						<div className="d-flex flex-row align-items-center">
						<span className="d-block ml-5 font-weight-bold" onClick={()=>{return this.props.del_or_edit_action(todo,false)}}>
						<i className="fas fa-trash-alt"></i>
						</span>
						</div>
						</div>
						  )

              })}
            </div>
        </div>

	)



	)


	}
}









const mapStateToProps = state =>{
	return {
		todo_img:state.todo_img,
		todo_msg:state.todo_msg,
		todo_list:state.todo_list
	}
}



export default connect(
	mapStateToProps,
	{del_or_edit_choice,del_or_edit_action}

	)(List)