import react from 'react'
import {connect} from 'react-redux'
import {current_form_obj} from '../../redux/actions'

 


class Delete extends react.Component{
constructor(props){
    super(props)
    this.update_inputs=this.update_inputs.bind(this)
    }


    update_inputs(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }

componentDidUpdate(){
        // update the obj that we will be sending in to replace the obj chosen
        return this.props.current_form_obj(this.state)
    }

    render(){

        return (


<div className="container-fluid">
    <div className="row">
                
      {

      !Object.keys(this.props.del_or_edit_obj).length?(<h3>PLEASE CHOOSE A TASK TO DELETE</h3>)

      

      :(

        <div className="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
                        <div className="d-flex flex-row"><img className="rounded" src={this.props.todo_img} width="40" height='50'/><small className="font-weight-bold d-block spec">({this.props.del_or_edit_obj.subject})</small>
                        <div className="ml-2"><span className="font-weight-bold d-block">{this.props.del_or_edit_obj.todo}</span><code className="spec"><small>Date Posted:{this.props.del_or_edit_obj.posted_date}</small></code></div>
                        </div>
                      
                        </div>
        )




      }
                
    </div>
</div>



    )
    


    }
}






const mapStateToProps = state =>{
    return {
        todo_img:state.todo_img,
        form_obj:state.form_obj
    }
}






export default connect(
    mapStateToProps,
    {current_form_obj}
    )(Delete)



