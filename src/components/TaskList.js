import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import { List } from 'rsuite';
import EditableTask from './EditableTask';
import {persistLocalState,getLocalState} from '../misc/utils'
import {putInitalState} from "../actions/addTask"

const TaskList = ({dispatch,tasks, open}) => {
  useEffect(
    ()=>{persistLocalState(tasks)}
    ,[tasks])
 
  return (
    <List>
      {tasks
        ? tasks.map((task) => {

            return <EditableTask key={task.id} open={open} _edit={false} _task={task} />;
          })
        : null}
    </List>
  );
};

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks.task_list,
  };
};

export default connect(mapStateToProps,null)(TaskList);
