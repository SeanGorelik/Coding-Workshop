"use client";

import React, { useState } from 'react';

function Nav({handleClick}){
    const navbarContent = ["Job Info", "Material", "Printing", "Notes"]
    const [coloredButton, setColoredButton] = useState("Job Info");

    return (
        <div className="flex flex-row">
            {navbarContent.map((value, index) => {
                if (value === coloredButton){
                    return <button key={value} className="mr-4 border-b-2 border-blue-400" onClick={() => {handleClick(value);setColoredButton(value)}}>{value}</button>; 
                }
                else{
                    return <button key={value} className="mr-4 hover:border-b-2 border-blue-300" onClick={() => {handleClick(value);setColoredButton(value)}}>{value}</button>;
                }
            })}
        </div>
    );
}

export default Nav;