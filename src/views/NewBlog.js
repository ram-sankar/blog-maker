import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';

import colors from '../constants/colors'
import * as MUI from '../assests/MUI'
import Navbar from '../components/Navbar'
import Editor from '../components/Editor'

export default function NewBlog() {
    const classes = useStyles();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const onPublish = () => {
        console.log(content);
    }
    
    const searchBar = 
    <div className={classes.searchContainer}>
        <MUI.TextField label="Title" size="small" className={classes.inputText}
             value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <MUI.Button variant="contained" className={classes.previewButton}>
            Preview
        </MUI.Button>
        <MUI.Button variant="contained" color="secondary" className={classes.publishButton} onClick={onPublish}>
            Publish
        </MUI.Button>
    </div>

    return (
        <>
            <Navbar />
            <div className={classes.container}>
                {searchBar}
                <Editor content={content} setContent={setContent}/>
            </div>
            
        </>
    )
}

const useStyles = makeStyles(() => ({
    container: {
        padding: '1em'
    },
    searchContainer: {
        width: '100%',
        display: 'flex',
        marginBottom: '2em'
    },
    inputText: {
        width: '100%',
    },
    publishButton: {
        background: colors.secondary,
        margin: 'auto 1em auto 0.5em',
        height: '2.5em',
    },
    previewButton: {
        height: '2.5em',
        margin: 'auto 0.5em auto 1em'
    }
}));