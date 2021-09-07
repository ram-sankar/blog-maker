import React, {useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';

import colors from '../constants/colors'
import * as MUI from '../assests/MUI'
import Navbar from '../components/Navbar'
import mockData from '../assests/MockBlogs.json'

export default function ViewBlog() {
    const classes = useStyles();
    const {encodedTitle} = useParams();
    const [blog, setBlog] = useState();

    useEffect(() => {
        setBlog(mockData.find(data=>data.blogTitle.replace(/ /g, '_').replace(/\./g, '')===encodedTitle))
    }, [encodedTitle])

    const details = () => {
        if(blog) {
            return <div className={classes.container}>
                <div className={classes.title}>{blog.blogTitle}</div>
                <div class={classes.flexContainer}>
                    <MUI.Avatar aria-label="recipe" style={{backgroundColor: getRandomColor()}}>
                        {blog.author.charAt(0)}
                    </MUI.Avatar>
                    <div>
                        <div className={classes.author}>{blog.author}</div>
                        <div className={classes.createdDate}>{blog.createdDate}</div>
                    </div>
                </div>
                <img src={`https://source.unsplash.com/random/200x200?sig=${blog.id}`}  className={classes.image}/>
                <div className={classes.content}>{blog.blogContent}</div>
            </div>
        }
    }

    return (
        <>
            <Navbar />
            {details()}
        </>
    )
}

const getRandomColor = () => {
    const randomColors = [colors.primary, colors.secondary, colors.redRose, colors.grassGreen, '#faf21b', '#b206b8', '#5606b8'];
    return randomColors[Math.floor(Math.random()*randomColors.length)];
}

const useStyles = makeStyles(() => ({
    container: {
        margin: '2em 20em',
    },
    title: {
        fontSize: '2em',
        fontWeight: '600',
        color: colors.dark
    },
    content: {
        fontSize: '1em',
        color: colors.dark,
        textAlign: 'justify'
    },
    image: {
        width: '100%',
        paddingBottom: '1em',
        height: '16em'
    },
    author: {
        fontSize: '1em',
        fontWeight: '600',
        color: colors.dark,
        paddingLeft: '1em'
    },
    createdDate: {
        fontSize: '0.8em',
        paddingBottom: '0.5em',
        paddingLeft: '1.2em',
        color: colors.dark
    },
    flexContainer: {
        display: 'flex',
        padding: '0.2em'
    }
}));