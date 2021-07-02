import React from 'react';

import loginImage from '../assets/img/login-image.jpeg';
import { Row, Col, Button } from 'antd';
import commonStyles from '../assets/Css/CommonStyle.module.css';
const Login = () => {
  return (
    <>
      <Row>
        <Col lg={24}>
          <Col lg={24}>
            <center>
              <h1 className={commonStyles.headerText}>
                We know that you enjoy Music.
              </h1>
              <h3 className={commonStyles.normalText}>
                Checkout Drooble to see what
                <br />
                <p className={commonStyles.normalText}>people are listening nearby.</p>
              </h3>
              <a href="https://drooble.herokuapp.com/auth/me/login">
                <Button className={commonStyles.spotifyButton}>
                  Login With Spotify
                </Button>
              </a>
            </center>
          </Col>

          <Col lg={24}>
            <img
              src={loginImage}
              style={{ maxWidth: '100%', height: 'auto' }}
            ></img>
          </Col>
        </Col>
      </Row>
    </>
  );
};
export default Login;
