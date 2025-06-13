import React, { useState } from "react";
import './Form.css'

function Form(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [company, setCompany] = useState('');
    const [project, setProject] = useState('');
    const [tech, setTech] = useState('');
    const [budget, setBudget] = useState('');
    const [deadline, setDeadline] = useState('');
    const [addInfo, setAddinfo] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const submitBtn = (event) => {
        event.preventDefault(); //stops the page from refreshing
        setSubmitted(true);
        console.log('Form submitted:');
    };

    return(
        <>
            <div>
                {submitted ?(
                    <div className="mt-4">
                        <img src="https://media.istockphoto.com/id/1094780808/vector/approval-symbol-check-mark-in-a-circle-drawn-by-hand-vector-green-sign-ok-approval-or.jpg?s=612x612&w=0&k=20&c=0mlB50r769kHmLkVcq_HpdNFGdHIA_Cu_tPqN4IKZbc=" style={{width:'250px', height:'250px', borderRadius:'50%', backgroundColor:'grey'}} alt="successImg" />
                        <p className='lead text-white'>Thank you! I'll review your request and get back to you soon.</p> <br />
                        <br />
                        <a href="http://localhost:5173/HomePage">Go-Back</a>
                    </div>
                ):(
                <form action="" onSubmit={submitBtn} className='mt-5'>
                    <div id="formHead">
                        <h2 style={{fontFamily:"'Audiowide', cursive"}}>Please Fill Out This Form To Get Started</h2>
                    </div>
                    <div className='input-group' id='formDetailGroup'>
                        <div className="input-group-text">Full Name</div>
                        <input type="text" className='form-control' placeholder='name' value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className='input-group' id='formDetailGroup'>
                        <input type="email" className='form-control' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <div class="input-group-append">
                            <span class="input-group-text">@example.com</span>
                        </div>
                    </div>
                    <div className='input-group' id='formDetailGroup'>
                        <div className="input-group-text">Phone Number</div>
                        <input type="tel" className='form-control' placeholder='P-No' value={phone} onChange={(e) => setPhone(e.target.value)} required />
                    </div>
                    <div className='input-group' id='formDetailGroup'>
                        <div className="input-group-text">Company (if applicable)</div>
                        <input type="text" className='form-control' placeholder='' value={company} onChange={(e) => setCompany(e.target.value)} />
                    </div>
                    <div className="input-group" id='formDetailGroup'>
                        <div className="input-group-text">Project Description</div>
                        <input type="text" className='form-control' name="" placeholder='Briefly describe what you need' id="" value={project} onChange={(e) => setProject(e.target.value)} required />
                    </div>
                    <div className="input-group" id='formDetailGroup'>
                        <div className="input-group-text">Preferred Technologies (if any)</div>
                        <input type="text" className='form-control' name="" placeholder='e.g., React, Python, Node.js' id="" value={tech} onChange={(e) => setTech(e.target.value)} />
                    </div>
                    <div className="input-group" id='formDetailGroup'>
                        <div className="input-group-text">Budget Range</div>
                        <input type="text" className='form-control' name="" placeholder='$000' id="" value={budget} onChange={(e) => setBudget(e.target.value)} />
                    </div>
                    <div className="input-group" id='formDetailGroup'>
                        <div className="input-group-text">Deadline or Timeline</div>
                        <input type="date" className='form-control' name="" id="" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
                    </div>
                    <div className="input-group" id='formDetailGroup'>
                        <input type="file" className='form-control' name="" id="" onChange={(e) => setAddinfo(e.target.files[0])} />
                        <div className="input-group-text">Additional Information</div>
                    </div>
                    <button type='submit' className='btn btn-secondary mt-5' style={{width:'150px'}}>Submit</button>
                </form>
                )}
            </div>
        </>
    )
}
export default Form;