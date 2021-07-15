import React,{useEffect} from 'react';
import {Alert, Button, Col, Grid, Icon, Row} from 'rsuite';
import AddTaskbtn from '../components/AddTaskbtn';
import EditableTask from '../components/EditableTask';
import TaskList from '../components/TaskList';
import { useMediaQuery, useModalState } from '../misc/custom-hooks';

const HomePage = ({}) => {
  const {isOpen, open, close} = useModalState();
  const isDesktop = useMediaQuery('(min-width: 600px)');

  
  return (
    <Grid>
      <Row>
        <Col xs={0} sm={4} md={6}></Col>
        <Col xs={24} sm={16} md={12}>
          {!isOpen && <TaskList open={open}/>}
          <AddTaskbtn open={open} isOpen={isOpen} close={close} isDesktop={isDesktop}/>
          <hr/>
        </Col>
        <Col xs={0} sm={4} md={6}></Col>
      </Row>
    </Grid>
  );
};

export default HomePage;
