import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import img from "../../images/Ddog3.webp"

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
                        그린 펫타운
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <p>후원금: 5000원</p>
                        <p>일시: 2020년 8월 19일 08:00 - 10:00</p>
                        <p>장소: 서울 도봉동 38-3 철</p>
                        <p>봉사내용: 유기견 목욕시키기</p>
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}