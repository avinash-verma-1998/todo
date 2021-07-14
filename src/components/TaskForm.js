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

const {StringType} = Schema.Types;
const model = Schema.Model({
  title: StringType().isRequired('Enter a title.'),
  task: StringType().isRequired('enter a task'),
});

const TaskForm = ({dispatch, close, createTask, fullWidth}) => {
  const [addDate, setIsAddDate] = useState(false);
  const [dateTime, setDateTime] = useState(new Date());
  const [task, setTask] = useState('');
  const [title, setTitle] = useState('');
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
  const updateTask = () => {
    if (!formRef.current.check()) {
      return;
    }

    createTask(title, task, addDate ? dateTime : null);
    if (close) close();
  };
  return (
    <div className={fullWidth ? 'full-widh' : ''}>
      <Form ref={formRef} model={model}>
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
            format="YYYY-MM-DD HH:mm:ss"
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
              onClick={updateTask}
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
