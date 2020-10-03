import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const Note = (props) => {

    const deleteNote = () => {
        props.deleteItem(props.id);
    }

    return (
        <>
            <div className={'note'}>
                <h3>{props.title}</h3>
                <p>{props.content}</p>
                <Button className={''} onClick={deleteNote}>
                    <DeleteOutlineIcon className={''}/>
                </Button>
            </div>
        </>
    )
}

export default Note;