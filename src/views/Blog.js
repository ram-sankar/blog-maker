import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";

import colors from '../constants/colors'
import * as MUI from '../assests/MUI'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import mockData from '../assests/MockBlogs.json'

export default function Blog() {
    const classes = useStyles();
    const history = useHistory();

    const [searchText, setSearchText] = useState('');
    const [blogsObject, setBlogsObject] = useState(mockData);

    const onKeyPress = (event) => {
        setSearchText(event.target.value);
        setBlogsObject(mockData.filter(obj => (obj.author.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())||
        obj.blogTitle.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))));
    };

    const navigateToDetailsPage = (title) => {
        history.push(`/blogs/${title.replace(/ /g, '_').replace(/\./g, '')}`);
    }

    const searchBar = 
    <MUI.Paper elevation={3} className={classes.searchContainer}>
        <MUI.TextField label="Search Blog" variant="outlined" size="small" className={classes.inputText}
             value={searchText} onChange={onKeyPress}/>
        <MUI.Button variant="contained" className={classes.searchButton}>
            Search
        </MUI.Button>
    </MUI.Paper>

    const blogCards = blogsObject.map(blog => 
        <MUI.Grid item xs={12} md={3} sm={6} key={blog.id}>
            <Card 
                author={blog.author} 
                createdTime={blog.createdDate} 
                content={blog.blogContent}
                id={blog.id}
                title={blog.blogTitle}
                onSeeMoreClick={navigateToDetailsPage}
            />
        </MUI.Grid>)
    

    return (
        <>
            <Navbar />
            <div className={classes.container}>
                {searchBar}
                <MUI.Grid container spacing={3}>
                    {blogCards}
                </MUI.Grid>
            </div>
        </>
    )
}

const useStyles = makeStyles(() => ({
    container: {
        margin: '1em 4em'
    },
    searchContainer: {
        width: '40%',
        margin: 'auto',
        padding: '1em',
        display: 'flex',
        marginBottom: '2em'
    },
    inputText: {
        width: '80%',
        marginRight: '1em',
        background: 'rgb(240 248 255)'
    },
    searchButton: {
        background: colors.secondary
    }
}));
