import React from 'react';
import TaskForm from './TaskForm';
import TaskView from './TaskView';

const EditableTask = ({edit}) => {
  return <>{edit ? <TaskForm /> : <TaskView />}</>;
};

export default EditableTask;
