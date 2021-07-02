import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Row, Item } from '@mui-treasury/components/flex';
import { Info, InfoTitle, InfoSubtitle } from '@mui-treasury/components/info';
import { useTutorInfoStyles } from '@mui-treasury/styles/info/tutor';
// import { useSizedIconButtonStyles } from '@mui-treasury/styles/iconButton/sized';
import { useDynamicAvatarStyles } from '@mui-treasury/styles/avatar/dynamic';
import { Skeleton } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import commonStyles from '../../assets/Css/CommonStyle.module.css';
import noDataImage from '../../assets/img/no-data.jpeg';
// const useStyles = makeStyles(() => ({
//   action: {
//     backgroundColor: '#fff',
//     boxShadow: '0 1px 4px 0 rgba(0,0,0,0.12)',
//     '&:hover': {
//       backgroundColor: '#fff',
//       color: '#fff',
//     },
//   },
// }));

const TopRelatedArtistList = (props) => {
  // const styles = useStyles();
  // const iconBtnStyles = useSizedIconButtonStyles({ padding: 6 });
  const avatarStyles = useDynamicAvatarStyles({ radius: 12, size: 48 });
  if(props.loading){
    return <Skeleton active loading={props.loading}></Skeleton>;
  }
  if (props.relatedArtists.length === 0) {
    return (
      <>
        <img src={noDataImage} style={{maxWidth:'100%'}}></img>
      </>
    );
  } 
  return (
    <>
    <div className={commonStyles.infiniteScrollbar}>
    <InfiniteScroll 
          initialLoad={false}
          pageStart={0}
          hasMore={props.loading}
          useWindow={false}
        >
      {props.relatedArtists.map((item) => (
          <a href={`/Artist/${item.id}`}>
            <Row p={1.5} gap={2} bgcolor={'#fff'} borderRadius={16}>
              <Item>
                <Avatar classes={avatarStyles} src={item.images.length>0?item.images[0].url:''} />
              </Item>
              <Info position={'middle'} useStyles={useTutorInfoStyles}>
                <InfoTitle>{item.name}</InfoTitle>
                <InfoSubtitle>{item.genres[0]}</InfoSubtitle>
              </Info>
            </Row>
          </a>
        ))}
        </InfiniteScroll>
        </div>
    </>
  );
};
export default TopRelatedArtistList;
