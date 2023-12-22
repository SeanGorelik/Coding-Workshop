"use client";

import React, { useState } from 'react';

function Material({checked, setChecked}){
    const materialNames = [];
    const materialIds = [];
    
    for(let i = 0; i < 26; i++){
        materialNames.push('Material ' + String.fromCharCode(i+65));
        materialIds.push(i+1);
    }
    
    return (
        <form>
            <table className="border-2 border-black">
                
                <thead className="border-2 border-black">
                    <tr>
                        <th className="border-2 border-black text-center p-2">Material ID</th>
                        <th className="border-2 border-black text-center p-2">Material Name</th>
                        <th className="border-2 border-black text-center p-2">Select</th>
                    </tr>
                </thead>

                <tbody>
                    {materialIds.map((id, index) => {
                        return (
                            <tr key={id} className="border-2 border-black">
                                <td className="border-2 border-black text-center">{id}</td>
                                <td className="border-2 border-black text-center">{materialNames[index]}</td>
                                <td className="border-2 border-black text-center"><input checked={checked[index]} onChange={() => setChecked(checked.slice(0, index).concat(!checked[index]).concat(checked.slice(index+1, checked.length)))} id={"materialCheckbox"+id} type="checkbox"/></td>
                            </tr>
                        );
                    })}
                </tbody>

            </table>
        </form> 
    );
}

export default Material;