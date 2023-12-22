"use client";

import React, { useState } from 'react';

function Printing({showTextField, setShowTextField, text, setText, printCustomerName, setPrintCustomerName, pType, setPType}){
    const printTypes = [""];

    for(let i = 0; i < 10; i++){
        printTypes.push('Print Type ' + String.fromCharCode(i+65));
    }

    return (
        <form>
            <div>
                <label htmlFor="printType" className="mr-3">Print Type</label>
                <select id="printType" className="border-2 border-black" onChange={(e) => setPType(e.target.value)} value={pType}>
                    {printTypes.map((printType) => {
                        return <option key={"printType" + printType}>{printType}</option>;
                    })}
                </select>
            </div>

            <div>
                <label htmlFor="customerName" className="mr-3">Print Customer Name</label>
                <input type="checkbox" id="customerName" checked={printCustomerName} onChange={() => setPrintCustomerName(!printCustomerName)}></input>
            </div>

            <div>
                <label htmlFor="customTextCheckbox" className="mr-3">Print Custom Text</label>
                <input type="checkbox" id="customTextCheckbox" checked={showTextField} onChange={() => setShowTextField(!showTextField)}></input>
                <br/>
                {showTextField && <textarea id="designNotes" className="border-2 border-black" onChange={(e) => setText(e.target.value)} value={text}></textarea>}
            </div>
        </form>
    );
}

export default Printing;