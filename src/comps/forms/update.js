import react from 'react'
import {connect} from 'react-redux'
import {current_form_obj} from '../../redux/actions'






class Update extends react.Component{
constructor(props){
    super(props)
    this.state={
        subject:this.props.del_or_edit_obj.subject,
        todo:this.props.del_or_edit_obj.todo,
        del_key:this.props.del_or_edit_obj.del_key,
        posted_date:new Date().toString().slice(0,15).replace(/-/g,"")
    }

    this.update_inputs=this.update_inputs.bind(this)



    }


    update_inputs(e){
        this.setState({
            subject:this.props.del_or_edit_obj.subject,
            todo:this.props.del_or_edit_obj.todo,
            [e.target.name]:e.target.value,
            // adding these below because, for some reason it does 
            // not hold these values above...maybe its the [key]:value
            // usage that resets it or its a flaw in how state works idk?
            del_key:this.props.del_or_edit_obj.del_key,
            posted_date:new Date().toString().slice(0,15).replace(/-/g,"")
        })
    }

    componentDidUpdate(){
        return this.props.current_form_obj(this.state)
    }




    render(){

        return (


<div className="container-fluid">
   {
    !Object.keys(this.props.del_or_edit_obj).length?(<h3>PLEASE CHOOSE A TASK TO EDIT</h3>)

    :( <div className="row">
                      
              <div><label className="input-labelz">What Kind Of Task Is This?</label>
                      <input type="text" className="form-control inps" placeholder={this.props.del_or_edit_obj.subject} name='subject'
                              onChange={this.update_inputs}
                           maxLength={8} />
                      </div>
                      
              <div>
              <label className="input-labelz">What Should Be Done?</label>
                      <textarea type="bio" className="form-control inps" placeholder={this.props.del_or_edit_obj.todo} name='todo'
                              onChange={this.update_inputs}
                           maxLength={48} />
                      </div>
                      
          </div>)}
</div>



    )
    


    }
}






const mapStateToProps = state =>{
    return {
        todo_img:state.todo_img,
        del_or_edit_obj:state.del_or_edit_obj,
        form_obj:state.form_obj
    }
}






export default connect(
    mapStateToProps,
    {current_form_obj}
    )(Update)



