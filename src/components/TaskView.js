import React, {useState} from 'react';
import {Checkbox, Icon, List, Tag} from 'rsuite';
import {getDateString} from '../misc/utils';

const TaskView = ({task}) => {
  const time = getDateString(new Date(task.dateTime));
  const [check, setCheck] = useState();

  const handleChange = () => {
    setCheck((p) => {
      return !p;
    });
  };
  return (
    <List.Item>
      <Checkbox value={check} onChange={handleChange}>
        <span className={check ? 'completed' : ''}>{task.title}</span>{' '}
        {!!time && (
          <Tag color={check? null: "green"}>
            <Icon icon="clock-o" /> {time}
          </Tag>
        )}
      </Checkbox>
    </List.Item>
  );
};

export default TaskView;
