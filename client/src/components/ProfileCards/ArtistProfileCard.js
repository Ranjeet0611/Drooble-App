// import { Skeleton,Card, Avatar, Typography } from 'antd';
import { Skeleton } from 'antd';
import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';
import noDataImage from '../../assets/img/no-data.jpeg';
import { useGutterBorderedGridStyles } from '@mui-treasury/styles/grid/gutterBordered';
const useStyles = makeStyles(({ palette }) => ({
  card: {
    borderRadius: 12,
    minWidth: 200,
    textAlign: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    margin: 'auto',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: '0.5px',
    marginTop: 8,
    marginBottom: 0,
  },
  subheader: {
    fontSize: 14,
    color: palette.grey[500],
    marginBottom: '0.875em',
  },
  statLabel: {
    fontSize: 12,
    color: palette.grey[500],
    fontWeight: 500,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    margin: 0,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
    letterSpacing: '1px',
  },
}));

const ArtistProfileCard = (props) => {
  const numberFormatter = (num)  =>{
    if(num > 999 && num < 1000000){
        return (num/1000).toFixed(1) + 'K'; // convert to K for number from > 1000 < 1 million 
    }else if(num > 1000000){
        return (num/1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million 
    }else if(num < 900){
        return num; // if value < 1000, nothing to do
    }
}
  const styles = useStyles();
  const shadowStyles = useFadedShadowStyles();
  const borderedGridStyles = useGutterBorderedGridStyles({
    borderColor: 'rgba(0, 0, 0, 0.08)',
    height: '50%',
  });
  if (props.loading) {
    return <Skeleton active loading={props.loading}></Skeleton>;
  }
  if (props.userProfileData.length === 0) {
    return (
      <>
        <img src={noDataImage} style={{maxWidth:'100%'}}></img>
      </>
    );
  } 
  return (
    <Card className={cx(styles.card, shadowStyles.root)}>
      <CardContent>
        <Avatar
          className={styles.avatar}
          src={props.userProfileData.images.length>0?props.userProfileData.images[0].url:''}
        />
        <h3 className={styles.heading}>{props.userProfileData.name}</h3>
        <span className={styles.subheader}>
          {props.userProfileData.country}
        </span>
      </CardContent>
      <Divider light />
      <Box display={'flex'}>
        <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
          <p className={styles.statLabel}>Popularity</p>
          <p className={styles.statValue}>{props.userProfileData.popularity}</p>
        </Box>
        <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
          <p className={styles.statLabel}>Followers</p>
          <p className={styles.statValue}>
            {numberFormatter(props.userProfileData.followers.total)}
          </p>
        </Box>
      </Box>
    </Card>
  );
};
export default ArtistProfileCard;
