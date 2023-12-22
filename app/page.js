"use client";

import React, { useState, useEffect } from 'react';
import Nav from './components/nav.js'
import JobInfo from './tabs/jobInfo.js';
import Material from './tabs/material.js';
import Notes from './tabs/notes.js';
import Printing from './tabs/printing.js';

function Home() {
  // Navbar
  const [activeTab, setActiveTab] = useState("Job Info");

  // Job Info
  const [jobName, setJobName] = useState("");
  const [customerName, setCustomerName] = useState("");

  // Printing
  const [showTextField, setShowTextField] = useState(false);
  const [text, setText] = useState("");
  const [printCustomerName, setPrintCustomerName] = useState(false);
  const [pType, setPType] = useState("");

  // Materials
  const [checked, setChecked] = useState(Array(26).fill(false));

  // Notes
  const [note, setNote] = useState("");

  const [submittedForm, setSubmittedForm] = useState(false);

  function getMaterialIds() {
    let arr = []
    for (let i = 0; i < checked.length; i++) {
      if (checked[i]) {
        arr.push(i + 1);
      }
    }
    return arr.toString();
  }

  function getMaterialNames() {
    let arr = []
    for (let i = 0; i < checked.length; i++) {
      if (checked[i]) {
        arr.push('Material ' + String.fromCharCode(65 + i));
      }
    }
    return arr.toString();
  }

  return (
    <div className="m-auto w-3/5">
      <div className="my-5 flex items-center justify-center">
        <Nav handleClick={setActiveTab} />
      </div>
      <div className="flex items-center justify-center">
        {activeTab === "Job Info" && <JobInfo jobName={jobName} setJobName={setJobName} customerName={customerName} setCustomerName={setCustomerName} />}
        {activeTab === "Material" && <Material checked={checked} setChecked={setChecked} />}
        {activeTab === "Notes" && <Notes note={note} setNote={setNote} />}
        {activeTab === "Printing" && <Printing showTextField={showTextField} setShowTextField={setShowTextField} text={text} setText={setText} printCustomerName={printCustomerName} setPrintCustomerName={setPrintCustomerName} pType={pType} setPType={setPType} />}
      </div>
      <div className="my-2 flex items-center justify-center">
        {submittedForm && <p className="text-red-600">Form has been submitted!</p>}
      </div>
      <div className="flex items-center justify-center">
        <button onClick={() => {setSubmittedForm(true), setTimeout(() => {setSubmittedForm(false);}, 1000), fetch('http://localhost:3000/api/submitFormData', { method: "POST", headers: { "Content-type": "application/json" }, body: JSON.stringify({ "jobName": jobName, "customerName": customerName, "materialIDs": getMaterialIds(), "materialNames": getMaterialNames(), "printType": pType, "printCustomerName": printCustomerName, "shouldPrintCustomText": showTextField, "printCustomText": text, "designNotes": note }) })}} className="border-2 border-black p-1 rounded-lg hover:bg-blue-300">Submit</button>
      </div>
    </div>
  );
}

export default Home;
