import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { deepPurple, grey } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Typography } from '@material-ui/core';
import Appbar from './Appbar2';
import '../index.css'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: 55,
      },
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
      },
      grid: {
          margin: 'auto',
          marginTop: 25,
      },
      purple1: {
        margin: 'auto',
        minHeight: 150,
        minWidth: 150,
        color: theme.palette.getContrastText(deepPurple['A200']),
        backgroundColor: deepPurple['A200'],
      },
      purple2: {
        margin: 'auto',
        minHeight: 150,
        minWidth: 150,
        color: theme.palette.getContrastText(deepPurple['A200']),
        backgroundColor: deepPurple['A200'],
      },
      purple3: {
        margin: 'auto',
        minHeight: 150,
        minWidth: 150,
        color: theme.palette.getContrastText(deepPurple['A200']),
        backgroundColor: deepPurple['A200'],
      },
      mainTitle: {
        margin: 10,
        marginTop: 35,
        color: grey[700],
        fontSize: 23,
        fontFamily: 'JSDongkang-Bold',
      },
      subTitle: {
        fontSize: 16,
        color: grey[700],
        fontFamily: 'JSDongkang-Regular',
      }
}));

export default function FullWidthGrid() {
  const styles = useStyles();

  return (
    <div>
      <Appbar />
      <img src={require('../images/banner(company).png')} alt="" width="100%" />
      
      <div className={styles.root}>
        <Grid container spacing={4}>
          <Grid className={styles.grid} item xs={12} sm={4}>
                <Avatar className={styles.purple1}>
                    <FavoriteIcon />
                </Avatar>
                <Typography className={styles.mainTitle}>
                    후원금 사용내역 인증 시스템
                </Typography>
                <Typography className={styles.subTitle}>
                    봉사신청 리스트를 <br/> 빠르고 간편하게 확인하세요.
                </Typography>
          </Grid>

          <Grid className={styles.grid} item xs={12} sm={4}>
                <Avatar className={styles.purple2}>
                    <FavoriteBorderIcon />
                </Avatar>
                <Typography className={styles.mainTitle}>
                    봉사자 관리
                </Typography>
                <Typography className={styles.subTitle}>
                    봉사신청 리스트를 <br/> 빠르고 간편하게 확인하세요.
                </Typography>
          </Grid>

          <Grid className={styles.grid} item xs={12} sm={4}>
                <Avatar className={styles.purple3}>
                    <FavoriteIcon />
                </Avatar>
                <Typography className={styles.mainTitle}>
                    단체 소식 알림
                </Typography>
                <Typography className={styles.subTitle}>
                    봉사신청 리스트를 <br/> 빠르고 간편하게 확인하세요.
                </Typography>
          </Grid>

        </Grid>
      </div>
    </div>
  );
}