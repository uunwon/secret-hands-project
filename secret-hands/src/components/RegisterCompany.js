import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { grey, purple } from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
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
        marginRight: theme.spacing(6),
      },
      caption: {
        marginTop: 10,
        marginLeft: 50,
        marginRight: theme.spacing(6),
        marginBottom: 50,
        fontSize: 12,
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
        marginTop: 15,
        minHeight: 55,
        fontWeight: 'bold',
        fontFamily: 'paybooc-Medium',
        marginRight: theme.spacing(2),
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
  const [age, setAge] = React.useState('');
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
  });

  const handleChange = (event) => {
    setAge(event.target.value);
    setState({ ...state, [event.target.name]: event.target.checked });
  };

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

            <form noValidate autoComplete="off" style={{ marginTop:40, marginBottom:70 }}>
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
              <Button className={ styles.input } variant="outlined" component="span"> 조회 </Button> </label>
              <Button className={ styles.input } color="secondary" variant="outlined" component="span">
              <Link to = "/RegisterIndividualCompany" className={styles.link}>사설보호소 등록</Link> </Button> </form>
        </Box>

        <Typography className={styles.subTitle2}>
          후원금 관리하기 </Typography> <hr style={{ marginBottom:30 }}/>

        <Box border={1}>
          <Typography className={styles.subTitle3}>
            후원 계좌 등록 </Typography> <hr />

          <Typography className={styles.subTitle4} style={{ marginTop:40 }}>
            은행 선택 </Typography> 
          <form noValidate autoComplete="off">
          <FormControl variant="outlined" className={styles.textControl}>
          <InputLabel id="demo-simple-select-outlined-label">선택해주세요</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={age}
            onChange={handleChange}
            >
            <MenuItem value={10}>기업은행</MenuItem>
            <MenuItem value={20}>신한은행</MenuItem>
            <MenuItem value={30}>우리은행</MenuItem>
            <MenuItem value={40}>국민은행</MenuItem>
            <MenuItem value={50}>카카오뱅크</MenuItem>
          </Select>
          </FormControl>

          <Typography className={styles.subTitle4} style={{ marginTop:30 }}>
            계좌번호 입력 </Typography> 
              <TextField className={styles.textField} id="outlined-basic" variant="outlined" placeholder="-없이 입력"
                        style={{ display:'flex' }} />

          <Typography className={styles.subTitle4} style={{ marginTop:30 }}>
            예금주 </Typography>
              <TextField className={styles.textField} id="outlined-basic" variant="outlined"
                        style={{ display:'flex', marginBottom:50 }} /> </form>
        </Box>

        <Box border={1} style={{marginTop: 50}}>
          <Typography className={styles.subTitle3}>
            후원금 사용 계획 </Typography> <hr />

          <Typography className={styles.subTitle4} style={{ marginTop:40 }}>
            1. 어느 분야에 이용되나요? </Typography> 
            <form noValidate autoComplete="off">
            <Button variant="outlined" className={styles.input2} style={{marginLeft:50}} >동물 구조</Button>
            <Button variant="outlined" className={styles.input2} >치료와 돌봄</Button>
            <Button variant="outlined" className={styles.input2} >입양 및 캠페인</Button>
        
          <Typography className={styles.subTitle4} style={{ marginTop:30 }}>
            2. 상세 설명 </Typography> 
            <TextField className={styles.textField} id="outlined-basic" variant="outlined" multiline rows={10}
                      style={{ display:'flex', marginBottom:50, marginTop:20 }}  /> </form>
        </Box>

        <Typography className={styles.subTitle2}>
          우리 단체는요... </Typography> <hr style={{ marginBottom:30 }}/>

        <Box border={1} style={{ marginBottom:30 }}>
          <Typography className={styles.subTitle3}>
            단체 소개 </Typography> <hr />

          <Typography className={styles.subTitle4} style={{ marginTop:40 }}>
            1. 홈페이지 </Typography> 
            <form noValidate autoComplete="off">
              <TextField className={styles.textField} id="outlined-basic" variant="outlined"
                        style={{ minWidth:285 }} placeholder="링크를 입력해주세요." />

          <Typography className={styles.subTitle4} style={{ marginTop:30 }}>
            2. 단체 소개말 </Typography> 
            <TextField className={styles.textField} id="outlined-basic" variant="outlined" multiline rows={10}
                      style={{ display:'flex' }} placeholder="단체에 대해 상세히 소개해주세요. ex) 규모" />

          <Typography className={styles.subTitle4} style={{ marginTop:30 }}>
            3. 단체 소개 사진 첨부하기 (최대 5장 등록 가능) </Typography> 
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
              </label> </form>
              <Typography className={styles.caption}>*첫번째 선택한 이미지는 봉사자에게 처음으로 노출되는 이미지이니, 신중하게 선택해주세요 :D</Typography>
        </Box>

        <div style={{margin: 'auto', textAlign: 'center'}}>
          <Button variant="outlined" className={styles.input} style={{ marginBottom:30, paddingLeft:25, paddingRight:25}}>저장</Button>
        </div>
        </div>
    </div>
  );
}