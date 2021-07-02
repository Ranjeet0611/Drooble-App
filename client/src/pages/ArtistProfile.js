import React from 'react';
// import PostsCard from '../components/Card/PostsCard';
import ArtistsProfile from '../containers/ArtistProfile';
import { Row, Col, Typography } from 'antd';
import ArtistTopSongs from '../containers/ArtistTopSongs';
import RelatedArtists from '../containers/RelatedArtists';
import ArtistAlbums from '../containers/ArtistAlbums';
import FeaturedPlaylist from '../containers/FeaturedPlaylist';
import { useSelector } from 'react-redux';
import loginError from '../assets/img/login-error.png';
import locationImage from '../assets/img/location-error.jpeg';
import apiErrorImage from '../assets/img/api-error.jpeg';
import Cookie from 'js-cookie';
const { Title } = Typography;
const ArtistProfile = () => {
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
  if (isApiError  || token.length === 0) {
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
              <Title level={4}>Artist Profile</Title>
            </Typography>
            <ArtistsProfile />
          </Col>
          <Col lg={24} style={{marginBottom:'40px'}}>
            <Typography>
              <Title level={4}>Related Top Artists</Title>
            </Typography>
            <RelatedArtists />
          </Col>
        </Row>
      </Col>
      <Col lg={18} sm={24} xs={24} md={24}>
        <Col style={{marginBottom:'40px'}}>
          <Typography>
            <Title level={4}>Artist Top Songs</Title>
          </Typography>
          <ArtistTopSongs />
        </Col>
        <Col>
          <Row style={{ marginTop: '100px' }} justify="space-between">
            <Col lg={9} style={{marginBottom:'40px'}}>
              <Typography>
                <Title level={4}>Artist Top Albums</Title>
              </Typography>

              <ArtistAlbums />
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

export default ArtistProfile;
