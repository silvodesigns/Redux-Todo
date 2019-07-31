import React from 'react';
import { completed } from '../actions';


class Task extends React.Component {
    constructor(props){
        super(props);
    }




callCompleteAction = e => {
    const index = e.target.id;
    completed(parseInt(index));
}

render(){

    return (
     <p onClick={this.callCompleteAction} id={`${this.props.task.id}`}>{this.props.task.value}</p>
    );
  }
}

export default Task;