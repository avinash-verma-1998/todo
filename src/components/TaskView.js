import React, {useState} from 'react';
import {Checkbox, FlexboxGrid, Icon, List, Tag} from 'rsuite';
import {connect} from 'react-redux'
import FlexboxGridItem from 'rsuite/lib/FlexboxGrid/FlexboxGridItem';
import {getDateString} from '../misc/utils';
import {setTask,deleteTaskAction} from "../actions/addTask";

const TaskView = ({task, open,dispatch}) => {
  const time = !!task.dateTime ? getDateString(new Date(task.dateTime)) : null;
  const [check, setCheck] = useState();
  const [showFull,setShowFull] = useState(false);

  const handleChange = () => {
    setCheck((p) => {
      return !p;
    });
  };
  const handleEditTask = ()=>{
    setTask(dispatch,task);
    open();
  }
  const deleteTask = ()=>{
    deleteTaskAction(dispatch,{id:task.id});
  }

  return (
    <List.Item onClick={()=>{setShowFull(p=>!p)}} className="list-item">
      <FlexboxGrid justify="space-between">
        <FlexboxGridItem>
          <Checkbox value={check} onChange={handleChange}>
            <span className={check ? 'completed' : ''}>{task.title}</span>{' '}
            {!!time && (
              <Tag color={check ? null : 'green'}>
                <Icon icon="clock-o" /> {time}
              </Tag>
            )}
          </Checkbox>
        </FlexboxGridItem>
        <FlexboxGridItem >
          <Icon onClick={handleEditTask} className="mr-10 clickable-icon" size="2x" icon="edit" />
          <Icon onClick={deleteTask} className="mr-10 clickable-icon" size="2x" icon="trash" />

        </FlexboxGridItem>
      </FlexboxGrid>
      <p>{showFull ? task.task: null}</p>
    </List.Item>
  );
};

export default connect()(TaskView);
