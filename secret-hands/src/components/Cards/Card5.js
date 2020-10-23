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
import img from "../../images/clean2.jpg"

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
                    image={img}
                    title="clean"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        카라반 보호소
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <p>후원금: 10000원</p>
                        <p>일시: 2020년 9월 3일 13:00 - 15:00</p>
                        <p>장소: 경남 양산시 동면 여락리 21-3 일원</p>
                        <p>봉사내용: 보호소 청소하기</p>
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