import React, {useCallback, useState} from 'react';
import { connect } from 'react-redux';
import { Alert } from 'rsuite';
import { addTask } from '../actions/addTask';
import TaskForm from './TaskForm';
import TaskView from './TaskView';

const EditableTask = ({dispatch,close=null,_task=null,_edit=true, fullWidth=false}) => {
  const [edit,setEdit] = useState(_edit)
  const [task,setTask] = useState(_task);
  const createTask = useCallback(
    (title, task, dateTime) => {
      const id = Date.now();

      const payload = {
        title,
        task,
        id,
        dateTime,
      };
      addTask(dispatch, payload);
      setTask(payload)
      setEdit(false)
      Alert.info("Task Created",4000);
    ;
  },[]);

  return <>{edit ? <TaskForm fullWidth={fullWidth} close={close} createTask={createTask} /> : <TaskView task={task} />}</>;
};

export default connect()(EditableTask);
