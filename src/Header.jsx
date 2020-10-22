import React from "react";
import logo from './image/Notepad_logo.png'

const Header= () => {
    return (
        <>
           <div className={''}>
               <img src={logo}  alt={'logo'} width={'80'} height={'55'}/>
               <h2>Note</h2>
           </div>
        </>
    )
};

export default Header;
