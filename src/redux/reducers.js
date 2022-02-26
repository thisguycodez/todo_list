import me from '../util/imgs/chill_me.jpeg'
import todo_img from '../util/imgs/todo.png'
import add_img from '../util/imgs/add.png'
import update_img from '../util/imgs/update.png'
import delete_img from '../util/imgs/delete.png'

const SESSION_COUNT_REMOVE_TODO = window.sessionStorage.removed_task || '0'
const SESSION_COUNT_ADD_TODO = window.sessionStorage.new_task_added || '0'
const TODO_LIST = window.localStorage.todo_list && JSON.parse(window.localStorage.todo_list) || []


const initialStorage = {
	// form type images
	me:me,
	todo_img:todo_img,
	add_img:add_img,
	update_img:update_img,
	delete_img:delete_img,

	// form features
	form_obj:{},
	removed_todos_count:Number(SESSION_COUNT_REMOVE_TODO),
	new_todos_count:Number(SESSION_COUNT_ADD_TODO),
	del_or_edit_obj:{},


	// todo list
	todo_list:TODO_LIST,
	todo_msg:`You have ${TODO_LIST.length} task listed, ${TODO_LIST.length>3?'start by completing 1':TODO_LIST.length<1?'add some':'add a couple more'}.`
}







const reducer = (state=initialStorage,action) =>{
	switch(action.type){
		case 'FORM_TYPE':
			return {...state,
				form_obj:action.payload
			}

		case 'TODO_LIST':
			return {...state,
				todo_list:action.payload,
				todo_msg:`You have ${action.payload.length} task listed, ${action.payload.length>3?'start by completing 1':action.payload.length<1?'add some':'add a couple more'}.`,
				removed_todos_count:window.sessionStorage.removed_task,
				new_todos_count:window.sessionStorage.new_task_added,
			}

		case 'DEL_OR_EDIT_CHOICE':
			return {...state,
			del_or_edit_obj:action.payload
			}

		case 'CLEAR_DEL_OR_EDIT_CHOICE':
			return {...state,
			del_or_edit_obj:{},
			form_obj:{}
			}


		default:
			return state
	}
}







export default reducer