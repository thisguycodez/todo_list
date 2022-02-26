import react from 'react'
import {connect} from 'react-redux'







class Form extends react.Component{
constructor(props){
    super(props)
    this.state={
      
    }


    }


    


    render(){

        return (


 <div className="container-fluid">
                
             <h1>PICK A FORM PLEASE...</h1>
                </div>



    )
    


    }
}






const mapStateToProps = state =>{
    return {
        
    }
}






export default connect(
    mapStateToProps,
    {}
    )(Form)



