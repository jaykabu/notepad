import React from "react";
import logo from './image/Notepad_logo.png'

const Header= () => {
    return (
        <>
           <div className={''}>
               <img src={logo}  alt={'logo'} width={'70'} height={'50'}/>
               <h2>MY NOTE</h2>
           </div>
        </>
    )
};

export default Header;