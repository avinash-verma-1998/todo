import React, {useRef, useState} from 'react';
import {
  Button,
  ButtonToolbar,
  ControlLabel,
  DatePicker,
  Form,
  FormControl,
  FormGroup,
  HelpBlock,
  Icon,
  Schema,
  Toggle,
} from 'rsuite';

// const {StringType} = Schema.Types;
// const model = Schema.Model({
//   title: StringType().isRequired('Enter a title.'),
//   task: StringType().isRequired('enter a task'),
// });

const TaskForm = ({_task, close, createTask, updateTask, fullWidth}) => {
  let _addDate = false;
  let update;
  if(!!_task )
    {
      update = true;
      if(!!_task.dateTime){
        _addDate = true;
      }

    }
  const task_state = !!_task ? _task : {
    task:'',
    title:'',
    dateTime: new Date()
  }  
  const [addDate, setIsAddDate] = useState(_addDate);
  const [dateTime, setDateTime] = useState(task_state.dateTime);
  const [task, setTask] = useState(task_state.task);
  const [title, setTitle] = useState(task_state.title);
  const formRef = useRef();

  const showDateTimePicker = (state) => {
    setIsAddDate(state);
  };
  const setDate = (date) => {
    setDateTime(date);
  };
  const handleTitleChange = (t) => {
    setTitle(t);
  };
  const handleTaskChange = (t) => {
    setTask(t);
  };
  const updateTaskForm = () => {
    if (!formRef.current.check()) {
      return;
    }
    if(update) {
        updateTask(title, task, addDate ? dateTime : null)
        if(close) close();
        return;
      };

    createTask(title, task, addDate ? dateTime : null);
    if (close) close();
  };
  return (
    <div className={fullWidth ? 'full-widh' : ''}>
      <Form ref={formRef}>
        <FormGroup>
          <ControlLabel>Title</ControlLabel>
          <FormControl
            value={title}
            onChange={handleTitleChange}
            name="title"
          />
          <HelpBlock tooltip>Required</HelpBlock>
        </FormGroup>
        <FormGroup>
          <ControlLabel>Task</ControlLabel>
          <FormControl
            name="task"
            value={task}
            onChange={handleTaskChange}
            componentClass="textarea"
            rows={5}
          />
          <HelpBlock tooltip>Required</HelpBlock>
        </FormGroup>
        <Toggle
          onChange={showDateTimePicker}
          className="mb-20"
          value={addDate}
          size="md"
          checkedChildren="remove reminder"
          unCheckedChildren={<Icon icon="clock-o" />}
        />
        {addDate ? (
          <DatePicker
            className="mb-20"
            placement="auto"
            placeholder="select Date"
            block
            onChange={setDate}
            format="DD-MM-YYYY HH:mm:ss"
            value={dateTime}
            ranges={[
              {
                label: 'Now',
                value: new Date(),
              },
            ]}
          />
        ) : null}
        <FormGroup>
          <ButtonToolbar>
            <Button
              block
              onClick={updateTaskForm}
              type="submit"
              appearance="primary"
            >
              Submit
            </Button>
            <Button
              block
              className="mt-20"
              color="red"
              onClick={close}
              appearance="default"
            >
              Cancel
            </Button>
          </ButtonToolbar>
        </FormGroup>
      </Form>
    </div>
  );
};

export default TaskForm;
