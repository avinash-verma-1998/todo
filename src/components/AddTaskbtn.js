import React from 'react';
import {Button, Icon, Modal} from 'rsuite';
import {useMediaQuery, useModalState} from '../misc/custom-hooks';
import EditableTask from './EditableTask';

const AddTaskbtn = ({}) => {
  const {isOpen, open, close} = useModalState();
  const isDesktop = useMediaQuery('(min-width: 600px)');

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
              <EditableTask close={close} />
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
          </Modal>
        </div>
      ) : (
        (isOpen && <EditableTask close={close} fullWidth />)
      )}
    </>
  );
};

export default AddTaskbtn;
