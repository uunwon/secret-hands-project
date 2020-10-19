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
      }} >
      <Appbar />
      <img src={require('../images/screen/screen01.png')} style={{ marginTop:44 }} alt="" width="100%" />

      <div className={styles.root}>
        <Typography className={styles.subTitle2}>
          보호소 인증하기 </Typography> <hr style={{ marginBottom:30 }}/>

        <Box border={1}>
          <Typography className={styles.subTitle3}>
            동물보호센터 조회 </Typography> <hr />

          <Typography className={styles.subTitle4} style={{ marginTop:50 }}>
            - </Typography> 

          <Typography className={styles.subTitle4} style={{ marginTop:50 }}>
            - </Typography> 

          <Typography className={styles.subTitle4} style={{ marginTop:50 }}>
            보호센터명 </Typography> 

          <Typography className={styles.subTitle4} style={{ marginTop:50 }}>
            보호센터주소 </Typography> 
        </Box>

        <Typography className={styles.subTitle2}>
          후원금 관리하기 </Typography> <hr style={{ marginBottom:30 }}/>

        <Box border={1}>
          <Typography className={styles.subTitle3}>
            후원 계좌 등록 </Typography> <hr />

          <Typography className={styles.subTitle4} style={{ marginTop:50 }}>
            은행 선택 </Typography> 

          <Typography className={styles.subTitle4} style={{ marginTop:50 }}>
            계좌번호 입력 </Typography> 

          <Typography className={styles.subTitle4} style={{ marginTop:50 }}>
            에금주 </Typography>
        </Box>

        <Box border={1} style={{marginTop: 50}}>
          <Typography className={styles.subTitle3}>
            후원금 사용 계획 </Typography> <hr />

          <Typography className={styles.subTitle4} style={{ marginTop:50 }}>
            1. 어느 분야에 이용되나요? </Typography> 

          <Typography className={styles.subTitle4} style={{ marginTop:50 }}>
            2. 상세 설명 </Typography> 
        </Box>

        <Typography className={styles.subTitle2}>
          우리 단체는요... </Typography> <hr style={{ marginBottom:30 }}/>

        <Box border={1} style={{ marginBottom:50 }}>
          <Typography className={styles.subTitle3}>
            단체 소개 </Typography> <hr />

          <Typography className={styles.subTitle4} style={{ marginTop:50 }}>
            1. 홈페이지 </Typography> 

          <Typography className={styles.subTitle4} style={{ marginTop:50 }}>
            2. 단체 소개말 </Typography> 

          <Typography className={styles.subTitle4} style={{ marginTop:50 }}>
            3. 단체 소개 사진 첨부하기 (최대 5장 등록 가능) </Typography> 
        </Box>
        
      </div>
    </div>
  );
}