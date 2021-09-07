import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Link, NavLink } from 'react-router-dom';

import colors from '../constants/colors'
import * as MUI from '../assests/MUI'

export default function Navbar() {
    const classes = useStyles();
    const navLinksData = [
        {title: 'Resume', link: '/'},
        {title: 'Blog', link: '/blogs'},
        {title: 'Create Blog', link: '/blog/new'}
    ]
    const navLinks = navLinksData.map(navLink => 
        <NavLink to={navLink.link} className={classes.navLink} key={navLink.title}>
                {navLink.title}
        </NavLink>)
    return (
        <div>
            <MUI.AppBar position="static" className={classes.container}>
                <MUI.Toolbar>
                <Link to="/" className={classes.hyperLink}>
                    <MUI.Typography variant="h6" className={classes.title}>
                        Blog Generator
                    </MUI.Typography>
                </Link>
                {navLinks}
                </MUI.Toolbar>
            </MUI.AppBar>
        </div>
    )
}

const useStyles = makeStyles(() => ({
    container: {
        background: colors.primary
    },
    title: {
      flexGrow: 1,
      color: colors.white
    },
    hyperLink: {
        textDecoration: 'none',
        color: colors.white,
        marginRight: '1.5em'
    },
    navLink: {
        textDecoration: 'none',
        color: colors.white,
        marginLeft: '1.5em'
    }
}));