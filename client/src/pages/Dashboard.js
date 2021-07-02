import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import PostsCard from '../components/Card/PostsCard';
import UserProfile from '../containers/UserProfile';
import { Row, Col, Typography } from 'antd';
import NewReleases from '../containers/NewReleases';
import NearByUsers from '../containers/NearByUsers';
import TopArtists from '../containers/TopArtists';
import FeaturedPlaylist from '../containers/FeaturedPlaylist';
import { useSelector } from 'react-redux';
import loginError from '../assets/img/login-error.png';
import locationImage from '../assets/img/location-error.jpeg';
import apiErrorImage from '../assets/img/api-error.jpeg';
import Cookie from 'js-cookie';
const { Title } = Typography;
// const useStyles = makeStyles((theme) => ({
//   postContainer: {
//     paddingTop: theme.spacing(10),
//   },
//   gridItem: {
//     margin: theme.spacing(10),
//   },
// }));
const Dashboard = () => {
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
        <img src={loginError} style={{ maxWidth: '100%' }}></img>
      </center>
    );
  }

  if (isLocationError) {
    return (
      <center>
        <h1>Allow Drooble To Access Your Location.</h1>
        <img src={locationImage} style={{ maxWidth: '100%' }}></img>
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
        <Row style={{ rowGap: '40px' }} c>
          <Col lg={18} sm={24} xs={24} md={24} style={{ marginBottom: '40px' }}>
            <Typography>
              <Title level={4}>Your Profile</Title>
            </Typography>
            <UserProfile />
          </Col>
          <Col lg={24} style={{ marginBottom: '40px' }}>
            <Typography>
              <Title level={4}>Your Top Artists</Title>
            </Typography>
            <TopArtists />
          </Col>
        </Row>
      </Col>
      <Col lg={18} sm={24} xs={24} md={24}>
        <Col style={{ marginBottom: '40px' }}>
          <Typography>
            <Title level={4}>New Releases</Title>
          </Typography>
          <NewReleases />
        </Col>
        <Col>
          <Row justify="space-between">
            <Col lg={9} style={{ marginBottom: '40px' }}>
              <Typography>
                <Title level={4}>Nearby Users</Title>
              </Typography>
              <NearByUsers />
            </Col>
            <Col lg={9} style={{ marginBottom: '40px' }}>
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

export default Dashboard;
