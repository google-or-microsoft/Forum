import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { spacing } from '@material-ui/system';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '80%',
        marginTop:5
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
    avatar: {
        backgroundColor: red[500],
    },
    cardComponent: {
         paddingLeft: 10,
         paddingTop:5,
         paddingBottom:1,
         marginTop:2
    }
}));

const Comment = (props) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root} elevation={3} >
            <CardHeader
                className={classes.cardComponent}
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        {props.username}
                    </Avatar>
                }
                title= {props.username}
                subheader={props.date}
            />
            <CardContent className={classes.cardComponent}>
                <Typography variant="body1" color="textSecondary" component="p">
                    {props.text}
                </Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardComponent}>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Method:</Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
export default Comment;