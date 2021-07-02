import React from 'react';
// import PostsCard from '../components/Card/PostsCard';
import UsersProfileById from '../containers/UserProfileById';
import { Row, Col, Typography } from 'antd';
import UserTopTracks from '../containers/UserTopTracks';
import DroobleUsers from '../containers/DroobleUsers';
import UserSavedAlbum from '../containers/UserSavedAlbum';
import FeaturedPlaylist from '../containers/FeaturedPlaylist';
import { useSelector } from 'react-redux';
import loginError from '../assets/img/login-error.png';
import locationImage from '../assets/img/location-error.jpeg';
import apiErrorImage from '../assets/img/api-error.jpeg';
import Cookie from 'js-cookie';
const { Title } = Typography;
const UserProfile = () => {
  const isLocationError = useSelector(
    (state) => state.nearByUsers.isLocationError
  );
  const isApiError = useSelector((state) => state.apiError.isError);
  const isAuthenticated = Cookie.get('isAuthenticated');
  const token = Cookie.get('token');
  if (!isAuthenticated) {
    return (
      <center>
        <h1>Please Login to access your Drooble Account</h1>
        <img src={loginError} style={{maxWidth: '100%'}}></img>
      </center>
    );
  }

  if (isLocationError) {
    return (
      <center>
        <h1>Allow Drooble To Access Your Location.</h1>
        <img src={locationImage} style={{maxWidth: '100%'}}></img>
      </center>
    );
  }
  if (isApiError || token.length === 0) {
    return (
      <center>
        <h1>Something Went Wrong please login again.</h1>
        <img src={apiErrorImage} style={{ maxWidth: '100%' }}></img>
      </center>
    );
  }
  return (
    <>
      <Col lg={6}>
        <Row style={{ rowGap: '40px' }}>
          <Col lg={18} sm={24} xs={24} md={24} style={{marginBottom:'40px'}}>
            <Typography>
              <Title level={4}>User Profile</Title>
            </Typography>
            <UsersProfileById />
          </Col>
          <Col lg={24} style={{marginBottom:'40px'}}>
            <Typography>
              <Title level={4}>Drooble Users</Title>
            </Typography>
            <DroobleUsers />
          </Col>
        </Row>
      </Col>
      <Col lg={18} sm={24} xs={24} md={24} >
        <Col style={{marginBottom:'40px'}}>
          <Typography>
            <Title level={4}>User Top Songs</Title>
          </Typography>
          <UserTopTracks />
        </Col>
        <Col >
          <Row style={{ marginTop: '100px' }} justify="space-between">
            <Col lg={9} style={{marginBottom:'40px'}}>
              <Typography>
                <Title level={4}>User Top Albums</Title>
              </Typography>

              <UserSavedAlbum />
            </Col>
            <Col lg={9} style={{marginBottom:'40px'}}>
              <Typography>
                <Title level={4}>Featured Playlists</Title>
              </Typography>
              <FeaturedPlaylist />
            </Col>
          </Row>
        </Col>
      </Col>
    </>
  );
};

export default UserProfile;
