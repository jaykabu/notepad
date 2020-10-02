import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";


const Appp = () => {

    const [addItem, setAddItem] = useState([]);

    const addNote = (note) => {
        alert('click');
        setAddItem((oldData) => {
            return [...oldData, note]
        });
        // console.log(note)
    }

    return (
        <>


            <Header/>
            <CreateNote passNote={addNote}/>
            {/*<Note/>*/}
            {addItem.map((val, index) => {
                return <Note
                    key={index}
                    id={index}
                    title={val.title}
                    content={val.content}
                />
            })}

            <Footer/>


        </>
    )
};

export default Appp;