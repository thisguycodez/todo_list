import react from 'react'
import {connect} from 'react-redux'
import {current_form_obj} from '../../redux/actions'






class Add extends react.Component{
constructor(props){
    super(props)
    this.state={
        subject:"react subject",
        todo:" REACT JS FRONT END really quick",
        posted_date:new Date().toString().slice(0,15).replace(/-/g,"")
    }

    this.update_inputs=this.update_inputs.bind(this)



    }


    update_inputs(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    componentDidUpdate(){
        return this.props.current_form_obj(this.state)
    }

    render(){

        return (


<div className="container-fluid">
    <div className="row">
                
        <div><label className="input-labelz">What Kind Of Task Is This?</label>
                <input type="text" className="form-control inps" placeholder="Subject Here..." name='subject'
                        onChange={this.update_inputs}
                    minLength={4} maxLength={8} required/>
                </div>
                
        <div><label className="input-labelz">What Should Be Done?</label>
                <textarea type="bio" className="form-control inps" placeholder="write Task here..." name='todo'
                        onChange={this.update_inputs}
                    minLength={5} maxLength={48} required/>
                </div>
                
    </div>
</div>



    )
    


    }
}






const mapStateToProps = state =>{
    return {
        form_obj:state.form_obj,
        c_k:state.c_k
    }
}






export default connect(
    mapStateToProps,
    {current_form_obj}
    )(Add)



