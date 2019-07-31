export const ADD_TASK='ADD_TASK';//Action Type

export const addTask = taskName =>{//Action Creator
    console.log(taskName);
    return{//action
        type: ADD_TASK,
        payload: taskName

    }
}