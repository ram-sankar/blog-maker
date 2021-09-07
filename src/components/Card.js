import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import * as Icons from '../assests/Icons'
import colors from '../constants/colors'

export default function RecipeReviewCard({author, createdTime, title, content, id, onSeeMoreClick}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" style={{backgroundColor: getRandomColor()}}>
            {author.charAt(0)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <Icons.MoreVertIcon />
          </IconButton>
        }
        title={author}
        subheader={createdTime}
      />
      <CardMedia
        className={classes.media}
        image={`https://source.unsplash.com/random/200x200?sig=${id}`}
        title="Random Image"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" className={classes.title}>
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" className={classes.content}>
          {content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Icons.FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <Icons.ShareIcon />
        </IconButton>
        <div className={classes.seeMore} onClick={()=>onSeeMoreClick(title)}>
          See More<Icons.ArrowForwardIosIcon className={classes.seeMoreIcon}/>
        </div>
      </CardActions>
    </Card>
  );
}

const getRandomColor = () => {
    const randomColors = [colors.primary, colors.secondary, colors.redRose, colors.grassGreen, '#faf21b', '#b206b8', '#5606b8'];
    return randomColors[Math.floor(Math.random()*randomColors.length)];
}

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    borderRadius: 0
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  content: {
      height: '6em',
      overflow: 'hidden',
      textAlign: 'justify'
  },
  title: {
    color: colors.dark,
    fontSize: '1em',
    marginBottom: '1em'
  },
  seeMore: {
    fontSize: '1em',
    color: colors.dark,
    marginLeft: 'auto',
    cursor: 'pointer'
  },
  seeMoreIcon: {
    fontSize: '13px',
    marginLeft: '5px'
  }
}));