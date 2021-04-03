import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  displayNone : {
      display: 'none',
  }
}));

const videoControl = () => {
    const video = document.getElementById("itemProductVideo");
    const play = document.getElementById("play");
    const pause = document.getElementById("pause");
    if (video.paused) {
      video.play();
      play.style.display = "none";
      pause.style.display = "block";
    } else {
      video.pause();
      play.style.display = "block";
      pause.style.display = "none";
    }
  };


export default function SingleProductMovieCard({ current }) {
  const classes = useStyles();
/*   const theme = useTheme();
 */
  const {
/*       link, */
      video,

  } = current

  return (
    <Card className={classes.root}>
    <div className={classes.details}>
      <CardContent className={classes.content}>
        <Typography component="h5" variant="h5">
          Live From Space
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Mac Milsfdsfdsgkhgsdfler
        </Typography>
      </CardContent>
      <div className={classes.controls}>
        <IconButton aria-label="play/pause" onClick={videoControl}>
          <PlayCircleOutlineIcon  id="play" />
          <PauseCircleOutlineIcon
            className={( classes.displayNone)}
            id="pause"
          />
        </IconButton>
      </div>
    </div>
    <CardMedia
      className={classes.cover}
      component="video"
      id="itemProductVideo"
      image={video}
      autoPlay
      loop
      title="Live from space album cover"
    />
  </Card>
  );
}
