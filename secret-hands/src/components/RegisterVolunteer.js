import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
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
      subTitle5: {
        marginTop:20,
        marginLeft: 70,
        fontSize: 17,
        fontFamily: 'paybooc-Medium',
      },
      textField: {
        marginTop: 15,
        marginLeft: 70,
        marginRight: theme.spacing(6),
      },
      textField2: {
        marginTop: 15,
        marginRight: theme.spacing(6),
      },
      input:{
        marginTop: 15,
        minHeight: 55,
        fontWeight: 'bold',
        fontFamily: 'paybooc-Medium',
        marginRight: theme.spacing(1),
      },
      input2: {
        marginTop: 15,
        minHeight: 55,
        fontWeight: 'bold',
        fontFamily: 'paybooc-Medium',
        marginRight: theme.spacing(2),
      },
      span:{
        marginTop:33,
        display:'inline-block',
        fontWeight: 'bold',
        fontFamily: 'paybooc-Medium',
      },
      caption: {
        marginTop: 10,
        marginLeft: 70,
        marginRight: theme.spacing(6),
        fontSize: 12,
        fontFamily: 'paybooc-Light',
      },
      caption2: {
        marginLeft: 110,
        marginRight: theme.spacing(6),
        fontSize: 12,
        fontFamily: 'paybooc-Light',
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

          <Typography className={styles.subTitle4} style={{ marginTop:40 }}>
            1. 어디서 하게 되나요? </Typography> 
            <form noValidate autoComplete="off">
            <Button variant="outlined" className={styles.input2} style={{marginLeft:70}} >실내</Button>
            <Button variant="outlined" className={styles.input2} >야외</Button>

          <Typography className={styles.subTitle4} style={{ marginTop:30 }}>
            2. 무엇을 하게 되나요? </Typography> 
            <Button variant="outlined" className={styles.input2} style={{marginLeft:70}} >청소</Button>
            <Button variant="outlined" className={styles.input2} >산책하기</Button>
            <Button variant="outlined" className={styles.input2} >먹이주기</Button>
            <Button variant="outlined" className={styles.input2} >사무보조</Button>
            <Button variant="outlined" className={styles.input2} >입양돕기</Button>
            <Button variant="outlined" className={styles.input2} >야외</Button>
            <TextField className={styles.input2} id="outlined-basic" variant="outlined" placeholder="기타"
                        style={{ minWidth:315 }} />
            <Typography className={styles.caption}>* 중복 선택 가능</Typography>

          <Typography className={styles.subTitle4} style={{ marginTop:30 }}>
            3. 모집 인원 </Typography> 
            <TextField className={styles.textField} id="outlined-basic" variant="outlined" style={{ marginRight:15 }} />
            <p className={styles.span}>명</p>

          <Typography className={styles.subTitle4} style={{ marginTop:30 }}>
            4. 봉사를 잘 나타내는 사진 첨부 </Typography> 
              <TextField className={styles.textField} id="outlined-basic" variant="outlined"
                        style={{ marginRight:10 }} />
              <input
                accept="image/*"
                className={ styles.input }
                style={{ display:'none' }}
                id="contained-button-file"
                multiple
                type="file"
              />
              <label htmlFor="contained-button-file">
                <Button className={ styles.input } variant="outlined" component="span">
                  찾아보기
                </Button>
              </label>

          <Typography className={styles.subTitle4} style={{ marginTop:30 }}>
            5. 봉사명 </Typography> 
            <TextField className={styles.textField} id="outlined-basic" variant="outlined" placeholder="봉사명(10글자 이내 입력)"
                        style={{ minWidth:315 }} />

          <Typography className={styles.subTitle4} style={{ marginTop:30 }}>
            6. 후원 최소 금액 </Typography>
            <Typography className={styles.subTitle5}>최소 후원 금액 설정</Typography>
            <Button variant="outlined" className={styles.input2} style={{marginLeft:70}} >5,000</Button>
            <Button variant="outlined" className={styles.input2} >10,000</Button>
            <Button variant="outlined" className={styles.input2} >20,000</Button>
            <TextField className={styles.input2} id="outlined-basic" variant="outlined" placeholder="직접 입력(숫자만)"/>

            <Typography className={styles.subTitle5}>후원금만 받기 설정</Typography>
            <FormControlLabel label="후원금만 받기 가능" className={styles.textField} style={{marginTop:5}}
                    control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />} />
            <Typography className={styles.caption2}>* 후원자는 봉사활동을 하지 않아도 후원금만 보낼 수 있습니다.</Typography>


          <Typography className={styles.subTitle4} style={{ marginTop:30 }}>
            7. 봉사 가능 일시 </Typography> 
            <TextField id="date" type="date" defaultValue="2020-10-20" variant="outlined" className={styles.textField}
                 style={{marginRight:15}} InputLabelProps={{ shrink: true, }} />
            <TextField id="time" type="time" defaultValue="00:00" className={styles.textField2} variant="outlined"
                InputLabelProps={{ shrink: true, }} inputProps={{ step: 300, }} />

          <Typography className={styles.subTitle4} style={{ marginTop:30 }}>
            8. 모집 기간 </Typography> 
            <div style={{display:'inline-block'}}>
              <Typography className={styles.subTitle5}>시작 기간</Typography>
              <TextField id="date" type="date" defaultValue="2020-10-20" variant="outlined" className={styles.textField}
                  style={{marginRight:15}} InputLabelProps={{ shrink: true, }} />
              <TextField id="time" type="time" defaultValue="12:00" className={styles.textField2} variant="outlined"
                  InputLabelProps={{ shrink: true, }} inputProps={{ step: 300, }} /> </div>
            <div style={{display:'inline-block', marginBottom:30}}>
              <Typography className={styles.subTitle5} style={{marginLeft:0}}>마감 기간</Typography>
              <TextField id="date" type="date" defaultValue="2020-10-20" variant="outlined" className={styles.textField}
                  style={{marginRight:15, marginLeft:0}} InputLabelProps={{ shrink: true, }} />
              <TextField id="time" type="time" defaultValue="12:00" className={styles.textField2} variant="outlined"
                  InputLabelProps={{ shrink: true, }} inputProps={{ step: 300, }} /> </div>

          <div style={{margin: 'auto', textAlign: 'center'}}>
            <Button variant="outlined" className={styles.input} style={{ marginBottom:30, paddingLeft:25, paddingRight:25}}>저장</Button>
          </div> </form>
        </Box>

        <Box border={1} style={{marginTop: 50, marginBottom: 50 }}>
          <Typography className={styles.subTitle3}>
            봉사 안내하기 </Typography> <hr />

          <Typography className={styles.subTitle4} style={{ marginTop:40 }}>
            1. 준비물이 있나요? </Typography> 
            <form noValidate autoComplete="off">
            <TextField className={styles.textField} id="outlined-basic" variant="outlined" multiline rows={3}
                      style={{ display:'flex' }} placeholder="봉사자가 준비해와야 할 물품 (식사, 여벌옷 등)에 대해 말해주세요." />

          <Typography className={styles.subTitle4} style={{ marginTop:30 }}>
            2. 주의사항이 있나요? </Typography> 
            <TextField className={styles.textField} id="outlined-basic" variant="outlined" multiline rows={10}
                      style={{ display:'flex', marginBottom:15 }} placeholder="봉사자가 주의해야할 것들에 대해 말해주세요. ex) 다친 아이들을 발견하면 스텝에게 말해주세요." />
          <div style={{margin: 'auto', textAlign: 'center'}}>
            <Button variant="outlined" className={styles.input} style={{ marginBottom:30, paddingLeft:25, paddingRight:25}}>저장</Button>
          </div> </form>
        </Box>
      </div>
    </div>
  );
}