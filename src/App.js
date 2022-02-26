import './util/css/App.css';
import react from 'react'
import {connect} from 'react-redux'
import Todo from './comps/'









class App extends react.Component {
constructor(props){
  super(props)
  this.state={}
}




  componentDidMount(){
    // these if statements are for setting 
    // and maintaining the session counts and todo list (incase deleted or something)
    if(!window.sessionStorage.removed_task) sessionStorage.removed_task='0'
    if(!window.sessionStorage.new_task_added) sessionStorage.new_task_added='0'
    if(!window.localStorage.todo_list) localStorage.todo_list=JSON.stringify([])
      
    
  }

  render(){
  return (
    <div className="App">
      <Todo/>
    </div>
  );
  }
}


const mapStateToProps = state =>{
  return {
    todo_list:state.todo_list
  }
}









export default connect(
  mapStateToProps,
  {}
  )(App);
