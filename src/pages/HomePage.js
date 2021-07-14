import React, { useState } from 'react';
import {Alert, Button, Col, Grid, Icon, Row} from 'rsuite';
import AddTaskbtn from '../components/AddTaskbtn';
import EditableTask from '../components/EditableTask';
import TaskList from '../components/TaskList';
import {auth} from '../misc/firebase';
import {useProfile} from '../misc/profile';
const HomePage = () => {
  const [taskFormOpen,setTaskFormOpen] = useState(false);
  // const [profile, isLoading] = useProfile();

  // if (!isLoading) {
  //   console.log(profile);
  // }
  // const signOut = () => {
  //   auth
  //     .signOut()
  //     .then(() => {
  //       Alert.info('user deleted', 4000);
  //     })
  //     .catch((error) => {
  //       Alert.error(error.message, 4000);
  //     });
  // };
  return (
    <Grid>
      <Row>
        <Col xs={0} sm={4} md={6}></Col>
        <Col xs={24} sm={16} md={12}>
          {!taskFormOpen && <TaskList/>}
          <AddTaskbtn openM={setTaskFormOpen}/>
          <hr/>
          {/* <Button block onClick={signOut} color="red">
            <Icon icon="sign-out" />
            SignOut
          </Button> */}
        </Col>
        <Col xs={0} sm={4} md={6}></Col>
      </Row>
    </Grid>
  );
};

export default HomePage;
