export const ADD_TASK='ADD_TASK';//Action Type
export const COMPLETED = 'COMPLETED';

export const addTask = taskName =>{//Action Creator

    return{//action
        type: ADD_TASK,
        payload: taskName

    }
}


export const completed = complete => {//Action Creator
   
console.log(complete, "from complete");

    return{//action
        type: COMPLETED,
        payload: complete - 1,


    }
}