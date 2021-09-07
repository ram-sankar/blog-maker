import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function Editor({content, setContent}) {
    const classes = useStyles();

    return (
        <div>
            <CKEditor
                className={classes.editor}
                editor={ ClassicEditor }
                data={content}
                onChange={ ( event, editor ) => {
                    setContent(editor.getData());
                } }
            />
        </div>
    )
}

const useStyles = makeStyles(() => ({
    editor: {
        height: '100vh'
    },
}));