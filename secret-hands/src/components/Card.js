<<<<<<< HEAD
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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 35,
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
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
      <img src={require('../images/dog-unsplash.jpg')} alt="" width="100%" />
      
      <div className={styles.root}>
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
                <p className={styles.statValue}>양천구</p>
              </Box>
              <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
                <p className={styles.statLabel}>인원</p>
                <p className={styles.statValue}>1 / 3</p>
              </Box>
              <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
                <p className={styles.statLabel}>후원금</p>
                <p className={styles.statValue}>5,000</p>
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
                  <p className={styles.statValue}>LA</p>
                </Box>
                <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
                  <p className={styles.statLabel}>인원</p>
                  <p className={styles.statValue}>2 / 3</p>
                </Box>
                <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
                  <p className={styles.statLabel}>후원금</p>
                  <p className={styles.statValue}>15,000</p>
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
                  <p className={styles.statValue}>Berlin</p>
                </Box>
                <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
                  <p className={styles.statLabel}>인원</p>
                  <p className={styles.statValue}>4 / 5</p>
                </Box>
                <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
                  <p className={styles.statLabel}>후원금</p>
                  <p className={styles.statValue}>5,000</p>
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
                <p className={styles.statValue}>베른</p>
              </Box>
              <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
                <p className={styles.statLabel}>인원</p>
                <p className={styles.statValue}>1 / 3</p>
              </Box>
              <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
                <p className={styles.statLabel}>후원금</p>
                <p className={styles.statValue}>5,000</p>
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
                  <p className={styles.statValue}>평양</p>
                </Box>
                <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
                  <p className={styles.statLabel}>인원</p>
                  <p className={styles.statValue}>2 / 3</p>
                </Box>
                <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
                  <p className={styles.statLabel}>후원금</p>
                  <p className={styles.statValue}>15,000</p>
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
                  <p className={styles.statValue}>스톡홀름</p>
                </Box>
                <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
                  <p className={styles.statLabel}>인원</p>
                  <p className={styles.statValue}>4 / 5</p>
                </Box>
                <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
                  <p className={styles.statLabel}>후원금</p>
                  <p className={styles.statValue}>5,000</p>
                </Box>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
=======
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import purple from "@material-ui/core/colors/purple";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function MediaCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        희망 보호소
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <p>일시: 2020년 9월 1일 13:00 - 15:00</p>
                        <p>장소: 경기도 파주 범안로 13길 24</p>
                        <p>봉사내용: 유기견 산책시키기</p>
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button variant="contained"
                        style={{backgroundColor:purple[300],
                        color:"white"}}>
                    예약한 봉사 취소하기
                </Button>
            </CardActions>
        </Card>
    );
}
>>>>>>> ee16a434cd103bf764fde238494629720ce216da
