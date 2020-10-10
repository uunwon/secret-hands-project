import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';
import { useGutterBorderedGridStyles } from '@mui-treasury/styles/grid/gutterBordered';
import CardImage from '../images/dog-unsplash.jpg'
import CardImage2 from '../images/dog-unsplash2.jpg'
import CardImage3 from '../images/dog-unsplash3.jpg'

const useStyles = makeStyles(({ palette }) => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
  },
  paper: {
    textAlign: 'center',
    whiteSpace: 'nowrap',
  },
  divider: {
  },
  card: {
    borderRadius: 12,
    margin:50,
    minWidth: 256,
    maxWidth: 400,
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
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 4,
    letterSpacing: '1px',
  },
}));

export const ProfileCardDemo = React.memo(function ProfileCard() {
  const styles = useStyles();
  const shadowStyles = useFadedShadowStyles();
  const borderedGridStyles = useGutterBorderedGridStyles({
    borderColor: 'rgba(0, 0, 0, 0.08)',
    height: '50%',
  });

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={4}>
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

        <Grid item xs={4}>
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

        <Grid item xs={4}>
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
      </Grid>
    </div>
  );
});

export default ProfileCardDemo