import { Typography, Skeleton } from 'antd';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import Slider from 'react-slick';
import { PlusCircleTwoTone, MinusCircleTwoTone } from '@ant-design/icons';
import userLibraryAction from '../../API/userLibraryAction';
import noDataImage from '../../assets/img/no-data.jpeg';
import noSong from '../../assets/img/no-song.jpeg'
const { Title, Text } = Typography;
const NewReleasesCard = (props) => {
  const saveToMyAlbumHandler = (event) => {
    console.log(event.currentTarget.dataset.id);
    const albumId = event.currentTarget.dataset.id;
    userLibraryAction(albumId, 'PUT', 'albums');
  };
  const removeFromAlbumHandler = (event) => {
    console.log('Remove Id ' + event.currentTarget.dataset.id);
    const albumId = event.currentTarget.dataset.id;
    userLibraryAction(albumId, 'DELETE', 'albums');
  };
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 2560,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  if (props.loading) {
    return <Skeleton active loading={props.loading}></Skeleton>;
  }
  if (props.newReleases.length === 0) {
    return (
      <>
        <img src={noDataImage} style={{ maxWidth: '100%' }}></img>
      </>
    );
  }
  return (
    <>
      <Slider {...settings}>
        {props.newReleases.map((item) => (
          <div key={item.id}>
            <a href={item.external_urls.spotify}>
              <img
                style={{
                  height: 250,
                  objectFit: 'fill',
                  borderRadius: '20px',
                  boxShadow:
                    '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
                }}
                alt="song-alt"
                src={item.images.length>0?item.images[0].url:noSong}
              />
            </a>
            <Typography style={{ marginLeft: '10px' }}>
              <Title level={4}>{item.name.split('(')[0]}</Title>
              <Text>{item.name}</Text>

              <PlusCircleTwoTone
                data-id={item.id}
                onClick={saveToMyAlbumHandler}
                style={{ margin: '5px' }}
              />

              <MinusCircleTwoTone
                data-id={item.id}
                onClick={removeFromAlbumHandler}
                style={{ margin: '5px' }}
              />
            </Typography>
          </div>
        ))}
      </Slider>
    </>
  );
};
export default NewReleasesCard;
