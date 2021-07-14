// import React from 'react';
// import {Button, Icon, Grid, Row, Col, Alert} from 'rsuite';
// import {auth, db} from '../misc/firebase';
// import firebase from 'firebase/app';
// import {signInAction} from '../actions/signInAction';
// import {connect} from 'react-redux';
// const SignInPage = ({dispatch, authMessage}) => {
//   const signInWithGoogle = async () => {
//     try {
//       const {user, additionalUserInfo} = await auth.signInWithPopup(
//         new firebase.auth.GoogleAuthProvider()
//       );
//       const id = await user.getIdToken();
//       Alert.info(user.displayName, 4000);
//     } catch (err) {
//       Alert.error(err.message, 4000);
//     }
//   };
//   return (
//     <>
//       <Grid fluid>
//         <Row className="mt-100">
//           <Col xs={0} sm={7} md={8}></Col>
//           <Col xs={24} sm={10} md={8}>
//             <Button onClick={signInWithGoogle} block color="red">
//               <Icon icon="google" /> Sign in with Google
//             </Button>
//             <Button
//               className="mt-20"
//               block
//               color="green"
//             >
//               <Icon icon="briefcase" /> Continue as a Guest
//             </Button>
//           </Col>
//           <Col xs={0} sm={7} md={8}></Col>
//         </Row>
//       </Grid>
//     </>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     authMessage: state.auth.user,
//   };
// };

// export default connect(mapStateToProps, null)(SignInPage);
