import React, {useState} from 'react';
import './index.css'
import Header from "./Header";
import CreateNote from "./CreateNote";
import Note from "./Note";
import Footer from "./Footer";

const Appp = () => {
    const [addItem, setAddItem] = useState([]);

    const addNote = (addTitle) => {
        // alert('clicked')
        setAddItem((prevData) => {
            return [...prevData, addTitle]
        })
        // console.log(addTitle);
    }

    const onDelete = (id) => {
        setAddItem((olddata)=>
        olddata.filter((currdata , indx)=>{
            return indx !== id;
        })
        )
    }

    return (
        <>
            <Header/>
            <CreateNote passNote={addNote}/>

            {addItem.map((value, index) => {
                return <Note
                    key={index}
                    id={index}
                    title={value.title}
                    content={value.content}
                    deleteItem={onDelete}
                />
            })}

            <Footer/>
        </>
    )
}

export default Appp;