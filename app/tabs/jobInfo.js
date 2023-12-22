"use client";

import React, { useState } from 'react';

function JobInfo({jobName, setJobName, customerName, setCustomerName}){
    const customerNames = ["", "Johnny", "Michael", "Yuvraj", "Farhad", "Henry", "Bob", "Angela", "Natalie", "Ashley"];

    return (
        <form className="flex flex-col text-center">
            <label htmlFor="jobName">Job Name</label>
            <input type="text" id="jobName" className="border-2 border-black" onChange={(e) => setJobName(e.target.value)} value={jobName}></input>

            <label htmlFor="customerName">Customer Name</label>
            <select id="customerName" className="border-2 border-black" onChange={(e) => setCustomerName(e.target.value)} value={customerName}>
                {customerNames.map((name) => {
                    return <option key={"customerName"+name}> {name} </option>;
                })}
            </select>
        </form>
    );
}

export default JobInfo;