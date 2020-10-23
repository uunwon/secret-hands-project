import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import img from "../../images/dog2.webp"
import Button from "@material-ui/core/Button";
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
                    image={img}
                    title="dog"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        도그마루
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <p>후원금: 8000원</p>
                        <p>일시: 2020년 9월 4일 13:00 - 15:00</p>
                        <p>장소: 신상동산 10-3로</p>
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