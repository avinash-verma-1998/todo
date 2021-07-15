import React, {useCallback, useState} from 'react';
import {connect} from 'react-redux';
import {Alert} from 'rsuite';
import {addTask, updateTaskAction} from '../actions/addTask';
import AddTaskbtn from './AddTaskbtn';
import TaskView from './TaskView';
import TaskForm from './TaskForm'
const EditableTask = ({
  dispatch,
  current,
  _task,
  _edit = true,
  open,
  close,
  fullWidth=false
}) => {

  const [edit, setEdit] = useState(_edit);
  const [task, setTask] = useState(current || _task);
  const createTask = useCallback((title, task, dateTime) => {
    const id = Date.now();

    const payload = {
      title,
      task,
      id,
      dateTime,
    };
    addTask(dispatch, payload);
    setTask(payload);
    setEdit(false);
    Alert.info('Task Created', 4000);
  }, []);
  const updateTask = useCallback((title, task, dateTime) => {
    const id = current.id;

    const payload = {
      title,
      task,
      id,
      dateTime,
    };
    updateTaskAction(dispatch, payload);
    setTask(payload);
    setEdit(false);
    Alert.info('Task Updated', 4000);
  }, []);

  return (
    <>
      {edit ? (
        <TaskForm
          _task={task}
          close={close}
          createTask={createTask}
          updateTask={updateTask}
          fullWidth={fullWidth}
        />
      ) : (
        <TaskView open={open} task={task} />
      )}
    </>
  );
};
const mapPropsToState = (state) => {
  return{current: state.tasks.current};
}

export default connect(mapPropsToState)(EditableTask);
