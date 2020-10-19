import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';
import { useGutterBorderedGridStyles } from '@mui-treasury/styles/grid/gutterBordered';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Appbar from './Appbar';
import { Column, Item } from '@mui-treasury/components/flex';
import { Info } from '@mui-treasury/components/info';
import '../index.css'

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        margin: 55,
      },
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
      },
    card: {
        position: 'relative',
        borderRadius: 45,
        backgroundColor: '#00ff0000',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minWidth: 256,
        minHeight: 270,
      },
      typography: {
        marginTop: 20,
        marginBottom: 30,
        marginLeft: 20,
        textAlign: 'left',
        fontSize: 22,
        letterSpacing: '0.5px',
        fontWeight: 'bold',
        fontFamily: 'JSDongkang-Bold',
      },
      subButton:{
        backgroundColor: '#ffff00 !important',
        color: '#000000',
        borderRadius: 14,
        marginRight: 5,
        marginLeft: 5,
        minWidth: 50,
        minHeight: 42,
        fontSize: '1rem',
        fontWeight: 700,
        fontFamily: 'JSDongkang-Bold',
      },
      date: {
        display: 'inline',
        marginTop: 5,
        color: '#ffff00',
        fontWeight: 'bold',
        fontSize: '1.2rem',
        fontFamily: 'JSDongkang-Bold',
      },
      detailButton: {
        backgroundColor: '#7e19ff !important',
        color: '#ffff00',
        borderRadius: 30,
        minHeight: 47,
        minWidth: 330,
        marginTop: 80,
        fontSize: '1rem',
        fontFamily: 'JSDongkang-Regular',
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
      <Appbar />
      <img src={require('../images/banner.png')} alt="" width="100%" />
      
      <div className={styles.root}>
        <Typography className={styles.typography}>모집 중인 봉사활동</Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Card
                className={cx(styles.card, shadowStyles.root)}
                style={{ backgroundImage: `url(${require("../images/main-dog1.png")})` }}>
                <Column gap={3} mr={1}>
                    <Info>
                      <Grid container justify="space-between"> 
                          <div>
                            <Button className={styles.subButton}>실외</Button>
                            <Button className={styles.subButton}>산책하기</Button>
                          </div>
                          <Typography className={styles.date}>D-2</Typography>
                      </Grid>
                    </Info>
                    <Item mt={12}>
                        <Button className={styles.detailButton}>서초구 | 4명 참여 / 5명 | 1만 원</Button>
                    </Item>
                </Column>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4}>
          <Card
                className={cx(styles.card, shadowStyles.root)}
                style={{ backgroundImage: `url(${require("../images/main-dog2.png")})` }}>
                <Column gap={3} mr={2}>
                    <Info>
                      <Grid container justify="space-between"> 
                          <div>
                            <Button className={styles.subButton}>실외</Button>
                            <Button className={styles.subButton}>산책하기</Button>
                          </div>
                          <Typography className={styles.date}>D-3</Typography>
                      </Grid>
                    </Info>
                    <Item mt={12}>
                        <Button className={styles.detailButton}>도봉구 | 7명 참여 / 8명 | 5천 원</Button>
                    </Item>
                </Column>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4}>
          <Card
                className={cx(styles.card, shadowStyles.root)}
                style={{ backgroundImage: `url(${require("../images/main-dog3.png")})` }}>
                <Column gap={3} mr={2}>
                    <Info>
                      <Grid container justify="space-between"> 
                          <div>
                            <Button className={styles.subButton}>실내</Button>
                            <Button className={styles.subButton}>사무보조</Button>
                          </div>
                          <Typography className={styles.date}>D-4</Typography>
                      </Grid>
                    </Info>
                    <Item mt={12}>
                        <Button className={styles.detailButton}>성동구 | 1명 참여 / 5명 | 5천 원</Button>
                    </Item>
                </Column>
            </Card>
          </Grid>


          <Grid item xs={12} sm={4}>
            <Card
                className={cx(styles.card, shadowStyles.root)}
                style={{ backgroundImage: `url(${require("../images/main-dog4.png")})` }}>
                <Column gap={3} mr={2}>
                    <Info>
                      <Grid container justify="space-between"> 
                          <div>
                            <Button className={styles.subButton}>실내</Button>
                            <Button className={styles.subButton}>청소하기</Button>
                          </div>
                          <Typography className={styles.date}>D-10</Typography>
                      </Grid>
                    </Info>
                    <Item mt={12}>
                        <Button className={styles.detailButton}>성동구 | 2명 참여 / 3명 | 5천 원</Button>
                    </Item>
                </Column>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4}>
          <Card
                className={cx(styles.card, shadowStyles.root)}
                style={{ backgroundImage: `url(${require("../images/main-dog5.png")})` }}>
                <Column gap={3} mr={2}>
                    <Info>
                      <Grid container justify="space-between"> 
                          <div>
                            <Button className={styles.subButton}>실내</Button>
                            <Button className={styles.subButton}>목욕하기</Button>
                          </div>
                          <Typography className={styles.date}>D-15</Typography>
                      </Grid>
                    </Info>
                    <Item mt={12}>
                        <Button className={styles.detailButton}>관악구 | 4명 참여 / 5명 | 1만 원</Button>
                    </Item>
                </Column>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4}>
          <Card
                className={cx(styles.card, shadowStyles.root)}
                style={{ backgroundImage: `url(${require("../images/main-dog6.png")})` }}>
                <Column gap={3} mr={2}>
                    <Info>
                      <Grid container justify="space-between"> 
                          <div>
                            <Button className={styles.subButton}>실내</Button>
                            <Button className={styles.subButton}>먹이주기</Button>
                          </div>
                          <Typography className={styles.date}>D-20</Typography>
                      </Grid>
                    </Info>
                    <Item mt={12}>
                        <Button className={styles.detailButton}>종로구 | 1명 참여 / 5명 | 5천 원</Button>
                    </Item>
                </Column>
            </Card>
          </Grid>

        </Grid>
      </div>
    </div>
  );
}