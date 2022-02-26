import uuid from 'uuid-random'
// JSON.stringify() to string the array of objects
// and JSON.parse to bring them back in raw object form







// updating the current input values to apply to whatever current CRUD action we are making.
export const current_form_obj = (obj) => dispatch =>{
	

	// update redux
	return dispatch({type:'FORM_TYPE',payload:obj})
}









// CREATE - INSERT - ADD - PUSH
// adding a todo to the list
export const add_todo = (obj) => dispatch =>{
	// add del_key to object
	obj['del_key'] = uuid()
	// grab and parse todo_list
	let todo_list = JSON.parse(window.localStorage.todo_list)
	// append the new todo task
	todo_list.push(obj)
	// stringify and store back into session
	window.localStorage.todo_list=JSON.stringify(todo_list)
	// add +1 session count to session
	window.sessionStorage.new_task_added=Number(window.sessionStorage.new_task_added)+1
	// update redux
	return dispatch({type:'TODO_LIST',payload:todo_list})
} 












// UPDATE - DELETE - CHANGE - POP - PUT - REMOVE
// task choice you want to delete or edit from or in the list 
export const del_or_edit_choice = (obj) => dispatch =>{
		// save choice to session
		// send task obj to form..edit..
		// update redux
		return dispatch({type:'DEL_OR_EDIT_CHOICE',payload:obj})
	
}
// making the actual action of deleting or editing the task
export const del_or_edit_action = (obj,do_we_edit) => dispatch =>{
	// based off the choice at this point the semi actions within the form
	// should already be made or if trash icon is clicked its a 2 birds 1 stone type of thing
	// grab and parse todo_list

	let todo_list = JSON.parse(window.localStorage.todo_list)

	// edit the chosen task
	let new_list=[]

	if(do_we_edit){// UPDATE - CHANGE - PUT
	// loop through cur list to catch what to change
	todo_list.forEach(o=>{
		if(o.del_key===obj.del_key){new_list.push(obj)}
		
		else {new_list.push(o)}
	})

	// save edited new list
	todo_list = new_list

	// clear the edit or del choice
	dispatch({type:'CLEAR_DEL_OR_EDIT_CHOICE'})
	}
	else{// DELETE - POP - REMOVE

	// delete the chosen task
	todo_list = todo_list.filter(o=>o['del_key']!== obj['del_key'])
	// add +1 to removed_task session count
	window.sessionStorage.removed_task = Number(window.sessionStorage.removed_task)+1

	// clear the edit or del choice
	dispatch({type:'CLEAR_DEL_OR_EDIT_CHOICE'})
	}


	// stringify and store back into session
	window.localStorage.todo_list=JSON.stringify(todo_list)
	// update redux
	return dispatch({type:'TODO_LIST',payload:todo_list})
}









