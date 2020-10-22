import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { grey, purple } from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
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
        marginLeft: 50,
        fontSize: 17,
        fontWeight: 'bold',
        fontFamily: 'paybooc-Medium',
      },
      textControl: {
        marginTop: 15,
        marginLeft: 50,
        minWidth: 240,
      },
      textField: {
        marginTop: 15,
        marginLeft: 50,
        marginRight: 10,
      },
      textField2: {
        marginTop:25,
        marginLeft: 20,
      },
      caption: {
        marginTop: 10,
        marginLeft: 50,
        marginRight: theme.spacing(6),
        marginBottom: 50,
        color: 'red',
        fontSize: 12,
        fontWeight: 'bold',
        fontFamily: 'paybooc-Light',
      },
      input:{
        marginTop: 15,
        minHeight: 55,
        fontWeight: 'bold',
        fontFamily: 'paybooc-Medium',
        marginRight: theme.spacing(1),
      },
      input2: {
        marginLeft:10,
        marginBottom: 2,
        minHeight: 55,
        fontWeight: 'bold',
        fontFamily: 'paybooc-Medium',
      },
      font: {
        fontFamily: 'paybooc-ExtraBold',
      },
      link: {
        textDecoration: 'none',
        color:'inherit',
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

            <form noValidate autoComplete="off" style={{ marginTop:40 }}>
              <TextField className={styles.textField} id="outlined-basic" variant="outlined" />
              <input
                accept="image/*"
                className={ styles.input }
                style={{ display:'none' }}
                id="contained-button-file"
                multiple
                type="file"
              />
              <label htmlFor="contained-button-file">
              <Button className={ styles.input } variant="outlined" component="span"> 조회 </Button> </label>
              <Button className={ styles.input } variant="contained" color="secondary" component="span">
                사설보호소 등록 </Button> </form>
              <Typography className={styles.caption}>*검색 결과가 없습니다. 사설 보호소로 등록해주세요.</Typography>
       
        </Box>

        <Box border={1} style={{marginTop: 50, marginBottom:30}}>
          <Typography className={styles.subTitle3}>
            사설 보호소로 등록하기 </Typography> <hr />

            <form noValidate autoComplete="off">
            <Typography className={styles.subTitle4} style={{ marginTop:40, display: 'inline-block' }}>
                보호단체명 </Typography> 
            <TextField className={styles.textField2} style={{ marginTop:25 }} id="outlined-basic" variant="outlined" />

            <div>
                <Typography className={styles.subTitle4} style={{ marginTop:40, display: 'inline-block' }}>
                    지역 </Typography> 
                <TextField className={styles.textField2} style={{ marginTop:25, marginLeft:68 }} id="outlined-basic" variant="outlined" />
            </div>

            <div>
                <Typography className={styles.subTitle4} style={{ marginTop:40, display: 'inline-block' }}>
                    주소 </Typography> 
                <TextField className={styles.textField2} style={{ marginTop:25, marginLeft:68 }}
                        id="outlined-basic" variant="outlined" placeholder="우편번호 찾기" />
                <Button variant="outlined" className={styles.input2}>조회</Button>
          
                <Typography className={styles.subTitle4} style={{ marginTop:40, display: 'inline-block' }}>
                    담당자 이름 </Typography> 
                <TextField className={styles.textField2} style={{ marginTop:25 }} id="outlined-basic" variant="outlined" />
            </div>

            <div>
                <Typography className={styles.subTitle4} style={{ marginTop:40, display: 'inline-block' }}>
                    　 </Typography> 
                <TextField className={styles.textField2} style={{ marginTop:25, marginLeft:82 }}
                        id="outlined-basic" variant="outlined" placeholder="상세주소 입력" />
          
                <Typography className={styles.subTitle4} style={{ marginTop:40, marginLeft:123, display: 'inline-block' }}>
                    이메일 </Typography> 
                <TextField className={styles.textField2} style={{ marginTop:25, marginLeft:57 }} id="outlined-basic" variant="outlined" />
            </div>

            <div>
                <Typography className={styles.subTitle4} style={{ marginTop:40, display: 'inline-block' }}>
                    등록인 </Typography> 
                <TextField className={styles.textField2} style={{ marginTop:25, marginLeft:52 }} id="outlined-basic" variant="outlined" />
            </div>

            <div>
                <Typography className={styles.subTitle4} style={{ marginTop:40, display: 'inline-block' }}>
                    홈페이지 </Typography> 
                <TextField className={styles.textField2} style={{ marginTop:25, marginLeft:37 }} id="outlined-basic" variant="outlined" />
            </div>

            <div>
                <Typography className={styles.subTitle4} style={{ marginTop:40, display: 'inline-block' }}>
                    사진첨부 </Typography> 
                <TextField className={styles.textField2} style={{ marginTop:25, marginLeft:37 }} id="outlined-basic" variant="outlined" />
            </div>

            <div>
                <Typography className={styles.subTitle4} style={{ marginTop:40, display: 'inline-block' }}>
                    상세설명 </Typography> 
                <TextField className={styles.textField2} style={{ marginTop:25, marginLeft:37 }} id="outlined-basic" variant="outlined" />
            </div>

            <div>
                <Typography className={styles.subTitle4} style={{ marginTop:40, display: 'inline-block' }}>
                    주의사항 </Typography> 
                <TextField className={styles.textField2} style={{ marginTop:25, marginLeft:37 }} id="outlined-basic" variant="outlined" />
            </div>

            <div>
                <Typography className={styles.subTitle4} style={{ marginTop:40, display: 'inline-block' }}>
                    알림사항 </Typography> 
                <TextField className={styles.textField2} style={{ marginTop:25, marginLeft:37 }} id="outlined-basic" variant="outlined" />
            </div>

            <div>
                <Typography className={styles.subTitle4} style={{ marginTop:40, display: 'inline-block' }}>
                    보호단체명 </Typography> 
                <TextField className={styles.textField2} style={{ marginTop:25, marginLeft:22 }} id="outlined-basic" variant="outlined" />
            </div>

          <div style={{margin: 'auto', textAlign: 'center'}}>
            <Button variant="outlined" className={styles.input} style={{ marginBottom:30, paddingLeft:25, paddingRight:25}}>등록하기</Button>
          </div>
          </form>
        </Box>
       </div>
    </div>
  );
}