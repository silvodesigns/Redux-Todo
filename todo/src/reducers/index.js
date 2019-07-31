import { ADD_TASK } from '../actions';
import { COMPLETED } from '../actions';

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
        }
        case COMPLETED:
        //map over the state 
        //build a new array with same data
        //only modify the one that has been clicked
        //check my checking matching id attribute

        const container = state.map( task => {
            const holder={};
            holder.value = task.value;
            if(task.id === action.payload){
             holder.completed = !task.completed;
            }
            else{
            holder.completed = task.completed;
            }

            return container;

        })

        default:
        return state
        
    }


};