import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props) => {

    const [expand, setExpand] = useState(false)

    const [addTitle, setAddTitle] = useState({
        title: '',
        content: ''
    });

    const inputEvent = (event) => {

        const {name, value} = event.target

        setAddTitle((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        })
        // console.log(addTitle);
    }

    const addEvent = () => {
        props.passNote(addTitle);

        setAddTitle({
            title: '',
            content: ''
        })
    }

    const expandIt = ()=>{
        setExpand(true);
    }

    const bToNormal = ()=>{
        setExpand(false);
    }

    return (
        <>
            <div className={''}>
                <form>
                    {expand ?
                        < input type={'text'}
                                placeholder={'Title'}
                                name={'title'}
                                value={addTitle.title}
                                autoComplete={'off'}
                                onChange={inputEvent}
                        />
                        : null}

                    <textarea rows={''} column={''}
                              placeholder={'Write a Note'}
                              name={'content'}
                              value={addTitle.content}
                              onChange={inputEvent}
                              onClick={expandIt}
                              onDoubleClick={bToNormal}
                    />

                    {expand?
                        <Button onClick={addEvent}>
                        <AddIcon className={''}/>
                    </Button>
                    :null}
                </form>
            </div>
        </>
    )
}

export default CreateNote;