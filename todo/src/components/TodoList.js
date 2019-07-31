import React from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions';
import Task from './Task';



class TodoList extends React.Component {

        state = {
                newTask : ''
        }

        callAddAction = e => {
            e.preventDefault();
            this.props.addTask(this.state.newTask);
        }

        handleChanges = e => {
            this.setState(
                {newTask: e.target.value}
            )
        }

        render() { 

            return (
            <div className="Tasks">


                {this.props.todos.map( task => (
                    <Task task={task} key={task.id}/>
                ))}

                
                <input onChange={this.handleChanges} value={this.state.newTask}/>
                <button onClick={this.callAddAction}>Add Task</button>
            </div>
            );
        }

}


//Here we take the data that we need from the state and make it locally availble as props 
//in the current component
const mapStateToProps = state => {
    console.log(state, "from state");
    return {
      todos: state.todos
    }
  }


// export default TodoList;
//Using  connet from react-redux we connect the state to props  
export default connect(mapStateToProps, { addTask })(TodoList)