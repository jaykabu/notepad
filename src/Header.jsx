import React from "react";
import logo from './image/Notepad_logo.png'

const Header= () => {
    return (
        <>
           <div className={''}>
               <img src={logo}  alt={'logo'} width={'70'} height={'50'}/>
               <h1>MY NOTE</h1>
           </div>
        </>
    )
};

export default Header;