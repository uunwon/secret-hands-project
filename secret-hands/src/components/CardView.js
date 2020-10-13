import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';
import { useGutterBorderedGridStyles } from '@mui-treasury/styles/grid/gutterBordered';
import CardImage from '../images/dog-unsplash.jpg'
import CardImage2 from '../images/dog-unsplash2.jpg'
import CardImage3 from '../images/dog-unsplash3.jpg'
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 35,
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
  },
  typography: {
    marginBottom:30,
    marginLeft: 10,
    textAlign: 'left',
    fontSize: 22,
    letterSpacing: '0.5px',
    fontWeight: 'bold',
  },
  card: {
    borderRadius: 12,
    minWidth: 256,
    maxWidth: 700,
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
    color: theme.palette.grey[500],
    marginBottom: '0.875em',
  },
  statLabel: {
    fontSize: 12,
    color: theme.palette.grey[500],
    fontWeight: 500,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    margin: 0,
  },
  statValue: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 4,
    letterSpacing: '1px',
  },
}));

export default function FullWidthGrid() {
  const styles = useStyles();
  const shadowStyles = useFadedShadowStyles();
  const borderedGridStyles = useGutterBorderedGridStyles({
    borderColor: 'rgba(0, 0, 0, 0.08)',
    height: '50%',
  });

  return (
    <div>
      <img src={require('../images/banner.png')} alt="" width="100%" />
      
      <div className={styles.root}>
        <Typography className={styles.typography}>모집 중인 봉사활동</Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Card className={cx(styles.card, shadowStyles.root)}>
            <CardContent>
              <Avatar className={styles.avatar} src={CardImage} />
              <h3 className={styles.heading}>한국유기견협회</h3>
              <span className={styles.subheader}>D-6</span>
            </CardContent>
            <Divider light />
            <Box display={'flex'}>
              <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
                <p className={styles.statLabel}>위치</p>
                <p className={styles.statValue}>서초구</p>
              </Box>
              <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
                <p className={styles.statLabel}>인원</p>
                <p className={styles.statValue}>4명 참여 / 5명</p>
              </Box>
              <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
                <p className={styles.statLabel}>후원금</p>
                <p className={styles.statValue}>1만 원</p>
              </Box>
            </Box>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card className={cx(styles.card, shadowStyles.root)}>
              <CardContent>
                <Avatar className={styles.avatar} src={CardImage2} />
                <h3 className={styles.heading}>미국유기견협회</h3>
                <span className={styles.subheader}>D-6</span>
              </CardContent>
              <Divider light />
              <Box display={'flex'}>
                <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
                  <p className={styles.statLabel}>위치</p>
                  <p className={styles.statValue}>도봉구</p>
                </Box>
                <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
                  <p className={styles.statLabel}>인원</p>
                  <p className={styles.statValue}>7명 참여 / 8명</p>
                </Box>
                <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
                  <p className={styles.statLabel}>후원금</p>
                  <p className={styles.statValue}>5천 원</p>
                </Box>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card className={cx(styles.card, shadowStyles.root)}>
              <CardContent>
                <Avatar className={styles.avatar} src={CardImage3} />
                <h3 className={styles.heading}>독일유기견협회</h3>
                <span className={styles.subheader}>D-6</span>
              </CardContent>
              <Divider light />
              <Box display={'flex'}>
                <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
                  <p className={styles.statLabel}>위치</p>
                  <p className={styles.statValue}>성동구</p>
                </Box>
                <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
                  <p className={styles.statLabel}>인원</p>
                  <p className={styles.statValue}>1명 참여 / 5명</p>
                </Box>
                <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
                  <p className={styles.statLabel}>후원금</p>
                  <p className={styles.statValue}>5천 원</p>
                </Box>
              </Box>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Card className={cx(styles.card, shadowStyles.root)}>
            <CardContent>
              <Avatar className={styles.avatar} src={CardImage3} />
              <h3 className={styles.heading}>스위스유기견협회</h3>
              <span className={styles.subheader}>D-6</span>
            </CardContent>
            <Divider light />
            <Box display={'flex'}>
              <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
                <p className={styles.statLabel}>위치</p>
                <p className={styles.statValue}>성동구</p>
              </Box>
              <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
                <p className={styles.statLabel}>인원</p>
                <p className={styles.statValue}>2명 참여 / 3명</p>
              </Box>
              <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
                <p className={styles.statLabel}>후원금</p>
                <p className={styles.statValue}>5천 원</p>
              </Box>
            </Box>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card className={cx(styles.card, shadowStyles.root)}>
              <CardContent>
                <Avatar className={styles.avatar} src={CardImage} />
                <h3 className={styles.heading}>북한유기견협회</h3>
                <span className={styles.subheader}>D-6</span>
              </CardContent>
              <Divider light />
              <Box display={'flex'}>
                <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
                  <p className={styles.statLabel}>위치</p>
                  <p className={styles.statValue}>관악구</p>
                </Box>
                <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
                  <p className={styles.statLabel}>인원</p>
                  <p className={styles.statValue}>4명 참여 / 5명</p>
                </Box>
                <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
                  <p className={styles.statLabel}>후원금</p>
                  <p className={styles.statValue}>1만 원</p>
                </Box>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card className={cx(styles.card, shadowStyles.root)}>
              <CardContent>
                <Avatar className={styles.avatar} src={CardImage2} />
                <h3 className={styles.heading}>스웨덴유기견협회</h3>
                <span className={styles.subheader}>D-6</span>
              </CardContent>
              <Divider light />
              <Box display={'flex'}>
                <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
                  <p className={styles.statLabel}>위치</p>
                  <p className={styles.statValue}>종로구</p>
                </Box>
                <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
                  <p className={styles.statLabel}>인원</p>
                  <p className={styles.statValue}>1명 참여 / 5명</p>
                </Box>
                <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
                  <p className={styles.statLabel}>후원금</p>
                  <p className={styles.statValue}>5천 원</p>
                </Box>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}