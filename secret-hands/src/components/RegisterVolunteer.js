import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import Appbar from './Appbar2';
import '../index.css'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: 'auto',
        textAlign: 'start',
        width: '80%',
      },
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
      },
      grid: {
          margin: 'auto',
          marginTop: 25,
      },
      logo: {
        marginTop: 15,
        color: grey[600],
        fontSize: 27,
        fontWeight: 'bold',
      },
      mainTitle: {
        margin: 10,
        marginTop: 7,
        fontSize: 45,
        fontFamily: 'paybooc-ExtraBold',
      },
      subTitle: {
        fontSize: 21,
        color: grey[800],
        fontWeight: 'bold',
        fontFamily: 'paybooc-Light',
      },
      subTitle2: {
        marginTop: 70,
        fontSize: 21,
        fontWeight: 'bold',
        fontFamily: 'paybooc-Medium',
      },
      subTitle3: {
        margin: 25,
        marginLeft: 35,
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'paybooc-Medium',
      },
      subTitle4: {
        margin: 30,
        marginLeft: 50,
        fontSize: 17,
        fontWeight: 'bold',
        fontFamily: 'paybooc-Medium',
      },
}));

export default function FullWidthGrid() {
  const styles = useStyles();

  return (
    <div
      style={{
      backgroundColor: 'white',
      width: '100%',
      height: '100%',
      }}>
      <Appbar />
      <img src={require('../images/screen/screen02.png')} style={{ marginTop:40 }} alt="" width="100%" />

      <div className={styles.root}>
        <Typography className={styles.subTitle2}>
          이 봉사는요... </Typography> <hr style={{ marginBottom:30 }}/>

        <Box border={1}>
          <Typography className={styles.subTitle3}>
            봉사 정보 등록 </Typography> <hr />

          <Typography className={styles.subTitle4} style={{ marginTop:50 }}>
            1. 어디서 하게 되나요? </Typography> 

          <Typography className={styles.subTitle4} style={{ marginTop:50 }}>
            2. 무엇을 하게 되나요? </Typography> 

          <Typography className={styles.subTitle4} style={{ marginTop:50 }}>
            3. 모집 인원 </Typography> 

          <Typography className={styles.subTitle4} style={{ marginTop:50 }}>
            4. 봉사를 잘 나타내는 사진 첨부 </Typography> 

          <Typography className={styles.subTitle4} style={{ marginTop:50 }}>
            5. 봉사명 </Typography> 

          <Typography className={styles.subTitle4} style={{ marginTop:50 }}>
            6. 후원 최소 금액 </Typography> 

          <Typography className={styles.subTitle4} style={{ marginTop:50 }}>
            7. 봉사 가능 일시 </Typography> 

          <Typography className={styles.subTitle4} style={{ marginTop:50 }}>
            8. 모집 기간 </Typography> 
        </Box>

        <Box border={1} style={{marginTop: 50, marginBottom:50 }}>
          <Typography className={styles.subTitle3}>
            봉사 안내하기 </Typography> <hr />

          <Typography className={styles.subTitle4} style={{ marginTop:50 }}>
            1. 준비물이 있나요? </Typography> 

          <Typography className={styles.subTitle4} style={{ marginTop:50 }}>
            2. 주의사항이 있나요? </Typography> 
        </Box>
      </div>
    </div>
  );
}