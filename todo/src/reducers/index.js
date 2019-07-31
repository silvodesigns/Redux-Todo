import { ADD_TASK } from '../actions';

const initialState = {

      todos: [
        {value: "go shopping",  completed: "false", id:1},
        {value: "do my homework",  completed: "false", id:2},
        {value: "go to gym",  completed: "false", id:3}
      
      ]
};


export const reducer = (state = initialState, action) => {

    switch(action.type){
        case ADD_TASK:
        return {
           ...state,
           todos: [...state.todos, { value: action.payload, completed:false, id:`${state.todos.length+1}`} ]
        };
        default:
        return state
        
    }


};