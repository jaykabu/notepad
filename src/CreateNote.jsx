import React, {useState} from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';


const CreateNote = (props) => {

    const [note, setNote] = useState({
        title: '',
        content: ''
    });

    const inputEvent = (event) => {

        const {value, name} = event.target

        setNote((olddata) => {
            return {
                ...olddata,
                [name]: value
            }
        })
    }

    const addEvent = () => {
        props.passNote(note);

        setNote({
            title: '',
            content: ''
        });
    }

    return (
        <>
            <div className={''}>
                <form>
                    <input className={''} type={'text'}
                           name={'title'}
                           value={note.title}
                           onChange={inputEvent}
                           placeholder={'Title'}
                           autoComplete={'off'}
                    />
                    <textarea rows={''}
                              column={''}
                              name={'content'}
                              value={note.content}
                              onChange={inputEvent}
                              placeholder={'Write a Note...'}
                              autoComplete={'off'}
                    />


                <Button onChange={addEvent}>
                        <AddIcon className={''}/>
                    </Button>
                </form>
            </div>
        </>
    )
};

export default CreateNote;