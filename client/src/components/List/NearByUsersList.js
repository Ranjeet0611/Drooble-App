import React from 'react';
import NoSsr from '@material-ui/core/NoSsr';
import GoogleFontLoader from 'react-google-font-loader';
// import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
// import MoreHoriz from '@material-ui/icons/MoreHoriz';
import InfiniteScroll from 'react-infinite-scroller';
import { Skeleton } from 'antd';
import { LinkOutlined } from '@ant-design/icons';
import { Column, Row, Item } from '@mui-treasury/components/flex';
import { Info, InfoTitle, InfoSubtitle } from '@mui-treasury/components/info';
import { useGrowAvatarStyles } from '@mui-treasury/styles/avatar/grow';
import { useMusicInfoStyles } from '@mui-treasury/styles/info/music';
import commonStyles from '../../assets/Css/CommonStyle.module.css';
import noDataImage from '../../assets/img/no-data.jpeg';
import { Typography } from 'antd';
const { Title } = Typography;
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

const NearByUsersList = (props) => {
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
  if (props.nearbyUsers.length === 0) {
    return (
      <>
        <img src={noDataImage} style={{ maxWidth: '100%' }}></img>
        <center>
          <Title level={5}>Ask your Friends to join Drooble</Title>
        </center>
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
            {props.nearbyUsers.map((item) => (
              <a href={`User/${item._id}`}>
                <Row>
                  <Item>
                    <div className={avatarStyles.root}>
                      <Avatar src={item.imageUrl.length>0?item.imageUrl:''} />
                    </div>
                  </Item>
                  <Info useStyles={useMusicInfoStyles} minWidth={0}>
                    <InfoTitle>{item.name}</InfoTitle>
                    <InfoSubtitle>{item.country}</InfoSubtitle>
                  </Info>
                  <Item position={'right'}>
                    {/* <IconButton size={'small'}>
                  <MoreHoriz />
                </IconButton> */}
                    <a href="{item.external_urls.spotify}">
                      <LinkOutlined />
                    </a>
                  </Item>
                </Row>
              </a>
            ))}
          </InfiniteScroll>
        </div>
      </Column>
    </>
  );
};
export default NearByUsersList;
