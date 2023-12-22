"use client";

import React, { useState } from 'react';

function Notes({note, setNote}){
    return (
        <form className="flex flex-col items-center">
            <label htmlFor="designNotes">Design Notes</label>
            <textarea className="border-2 border-black" id="designNotes" rows="4" cols="50" onChange={(e) => setNote(e.target.value)} value={note}></textarea>
        </form>
    );
}

export default Notes;