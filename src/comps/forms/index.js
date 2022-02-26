import react from 'react'
import {connect} from 'react-redux'
import Add from './add'
import Update from './update'
import Delete from './delete'
import BlankForm from './blank_form'
import {add_todo,del_or_edit_action} from '../../redux/actions'





class Form extends react.Component{
constructor(props){
	super(props)
	this.state={
        add:[0,true],
        update:[1,false],
        delete:[2,false],
        form_to_show:0
    }


    this.change_form=this.change_form.bind(this)
    this.form_launcher=this.form_launcher.bind(this)
	}


    change_form(e){
        this.setState({
        // set all to false
        add:[0,false],
        update:[1,false],
        delete:[2,false],
        // following a static change on whatever was actually clicked, to be true.
        [e.target.name]:[Number(e.target.value),true],


        // change the form_to_show state so the right form inputs render
        form_to_show:Number(e.target.value),
        form_obj:{},

        })
    }






form_launcher(e){
    e.preventDefault()
    e.target.reset()
    // if statements are based on the value of the radios to control 
    // what inputs are shown in the form and also like now below
    //  to determine how we apply our CRUD (create,read,update,delete)
    if(!this.state.form_to_show) return this.props.add_todo(this.props.form_obj)
    else if(this.state.form_to_show===1) return this.props.del_or_edit_action(this.props.form_obj,true)
    else if(this.state.form_to_show===2) return this.props.del_or_edit_action(this.props.del_or_edit_obj,false)
}



	render(){

		return (




<div className="col-md-4">
            <form className="form-change-alot" onSubmit={this.form_launcher}>
                <div className="d-flex justify-content-between align-items-center"><span>Todo Form</span><img className="rounded" src={this.props.me} width="40"/></div>
                <span className="type d-block mt-3 mb-1">form type(add a task)</span>
                <div className="form-group">
                <label title="add a task"  className="radio"> <input type="radio" name="add"  checked={this.state.add[1]} value={0}  onChange={this.change_form}/> <span><img width="30" src={this.props.add_img} /></span> </label>
                <label title="update a task"  className="radio"> <input type="radio" name="update" checked={this.state.update[1]} value={1} onChange={this.change_form}/> <span><img width="30" src={this.props.update_img} /></span> </label>
                <label title="delete a task"  className="radio"> <input type="radio" name="delete" checked={this.state.delete[1]} value={2} onChange={this.change_form}/> <span><img width="30" src={this.props.delete_img} /></span> </label>
                </div>
                
    {/*if statements are based on the value 
        of the radios to control
     what inputs are shown in the form, else a
      message to ask users to make a choice*/}
                        {/*PASSING IN del_or_edit_obj AS PROPS STRAIGHT
                        TO THE COMPONENT BECAUSE IT ALLOWS BETTER/ACCURATE
                        UPDATES TO THE READING OF THAT OBJECT ON THE DELETE 
                        COMPONENT AFTER THE TASK IS DELETED.*/}
                {!this.state.form_to_show?(<Add/>)
                    :this.state.form_to_show===1?(<Update/>)
                        :this.state.form_to_show===2?(<Delete del_or_edit_obj={this.props.del_or_edit_obj}/>)
                            :(<BlankForm/>)
                }
                <hr className="line"/>
                <div className="d-flex justify-content-between session_txt"><span>Session Count:</span></div>
                <div className="d-flex justify-content-between session_txt"><span>Scratched Task</span><span>{this.props.removed_todos_count}</span></div>
                <div className="d-flex justify-content-between session_txt"><span>New Task added</span><span>{this.props.new_todos_count}</span></div>
                <button className="btn btn-primary btn-block d-flex justify-content-between mt-3" type="submit"><span>Approve<i className="fas fa-long-arrow-right ml-1"></i></span></button>
            </form>
        </div>

	)
	


	}
}






const mapStateToProps = state =>{
    return {
        me:state.me,
        add_img:state.add_img,
        update_img:state.update_img,
        delete_img:state.delete_img,
        form_obj:state.form_obj,
        removed_todos_count:state.removed_todos_count,
        new_todos_count:state.new_todos_count,
        del_or_edit_obj:state.del_or_edit_obj
    }
}






export default connect(
    mapStateToProps,
    {add_todo,del_or_edit_action}
    )(Form)



