import React ,{useEffect, useState}from 'react';
import {Button, Icon, Modal} from 'rsuite';
import TaskForm from './TaskForm';
import EditableTask from './EditableTask'
import {connect} from 'react-redux';
const AddTaskbtn = ({open,isOpen,close,current,isDesktop,createTask}) => {
  return (
    <>
      {isOpen ? null : (
        <Button onClick={open} block color="blue">
          <Icon icon="plus-square" />
          {'  '}Add Task
        </Button>
      )}
      {isDesktop? (
        <div className="modal-container">
          <Modal overflow={false} show={isOpen} onHide={close}>
            <Modal.Header>
              <Modal.Title>Create a new</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <EditableTask _task={current} createTask={createTask} close={close} />
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
          </Modal>
        </div>
      ) : (
        (isOpen && <EditableTask _task={current} createTask={createTask} close={close} fullWidth />)
      )}
    </>
  );
};

const mapStateToProps = (state)=>{
  return {current: state.tasks.current}
}

export default connect(mapStateToProps)(AddTaskbtn);
