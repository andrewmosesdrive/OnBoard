import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';


function Copyright() {

    const useStyles = makeStyles(() => ({
        root: {
            position:'fixed',
            bottom: 0,
            marginLeft: 10,
            paddingBottom: 15,
            color: '#f2f4ff'
        }
    }));

    const classes = useStyles();

    return (
        <Typography className={classes.root} variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit">
                OnBoard
            </Link>{' '}
            {new Date().getFullYear()}
            {''}
        </Typography>
    );
}

export default Copyright;