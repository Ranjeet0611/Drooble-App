import React from 'react';
import NoSsr from '@material-ui/core/NoSsr';
import GoogleFontLoader from 'react-google-font-loader';
// import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
// import MoreHoriz from '@material-ui/icons/MoreHoriz';
import InfiniteScroll from 'react-infinite-scroller';
import { Skeleton} from 'antd';
import { PlusCircleTwoTone, MinusCircleTwoTone } from '@ant-design/icons';
import { Column, Row, Item } from '@mui-treasury/components/flex';
import { Info, InfoTitle, InfoSubtitle } from '@mui-treasury/components/info';
import { useGrowAvatarStyles } from '@mui-treasury/styles/avatar/grow';
import { useMusicInfoStyles } from '@mui-treasury/styles/info/music';
import userLibraryAction from '../../API/userLibraryAction';
import commonStyles from '../../assets/Css/CommonStyle.module.css';
import noDataImage from '../../assets/img/no-data.jpeg';
// const useStyles = makeStyles(() => ({
//   text: {
//     display: 'flex',
//     alignItems: 'center',
//     '& > svg': {
//       fontSize: 18,
//       color: '#888',
//       marginRight: 4,
//     },
//   },
// }));

const ArtistAlbumList = (props) => {
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
  const commonProps = {
    blur: '12px',
    radius: 16,
    size: 48,
    opacity: 0.6,
  };
  const avatarStyles = useGrowAvatarStyles({ ...commonProps });
  // const styles = useStyles();
  if (props.loading) {
    return <Skeleton active loading={props.loading}></Skeleton>;
  }
  if (props.artistAlbum.length === 0) {
    return (
      <>
        <img src={noDataImage} style={{ maxWidth: '100%' }}></img>
      </>
    );
  }
  return (
    <>
      <NoSsr>
        <GoogleFontLoader fonts={[{ font: 'Questrial' }]} />
      </NoSsr>
      <Column gap={2} width={'100%'}>
        <div className={commonStyles.infiniteScrollbar}>
          <InfiniteScroll
            initialLoad={false}
            pageStart={0}
            hasMore={props.loading}
            useWindow={false}
          >
            {props.artistAlbum.map((item) => (
              <Row>
                <Item>
                  <a href={item.external_urls.spotify}>
                    <div className={avatarStyles.root}>
                      <Avatar src={item.images.length>0?item.images[0].url:''} />
                    </div>
                  </a>
                </Item>
                <Info useStyles={useMusicInfoStyles} minWidth={0}>
                  <InfoTitle>{item.name.split('(')[0]}</InfoTitle>
                  <InfoSubtitle>{item.release_date}</InfoSubtitle>
                </Info>
                <Item position={'right'} gutter={[32, 32]}>
                  {/* <IconButton size={'small'}>
                  <MoreHoriz />
                </IconButton> */}

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
                </Item>
              </Row>
            ))}
          </InfiniteScroll>
        </div>
      </Column>
    </>
  );
};
export default ArtistAlbumList;
