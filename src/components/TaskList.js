import React from 'react';
import {connect} from 'react-redux';
import { List } from 'rsuite';
import EditableTask from './EditableTask';

const TaskList = ({tasks}) => {
  return (
    <List>
      {tasks
        ? tasks.map((task) => {

            return <EditableTask key={task.id} _edit={false} _task={task} />;
          })
        : null}
    </List>
  );
};

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};

export default connect(mapStateToProps,null)(TaskList);
