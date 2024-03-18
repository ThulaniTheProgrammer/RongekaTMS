
import { useNavigate } from 'react-router-dom'
import { createClient } from '@supabase/supabase-js';

import React, { useEffect, useState } from 'react'

const supabase = createClient('https://fwlzeppvsmeiiusapnkp.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3bHplcHB2c21laWl1c2FwbmtwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAyMjUzNDIsImV4cCI6MjAyNTgwMTM0Mn0.5nAajCdyhd-P1WsBDwIPLir48huFuydsmQOUW3tnSRA');





export default function Welcome() {
    const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
     
const { data, error } = await supabase.auth.signInWithPassword({
    email: formData.email,
    password: formData.password
    
  })

    


      if (error) throw error;

     
      // Perform necessary actions with user data

      navigate('/WelcomeAdmin');
    } catch (error) {
      alert(error.message);
    }
  }

;

    
    return (
        <div className='bg-[#001136] h-screen px-10'>
            <form onSubmit={handleSubmit} >
            <div className='flex items-center flex-row pt-10 justify-center'>
                <h1 className='text-white text-4xl px-10 bold pd-10'>RONGEKA</h1>
                
                <h1 className='text-blue-900 text-4xl bold'>T</h1>
                <h1 className='text-white text-4xl bold'>M</h1>
                <h1 className='text-blue-900 text-4xl bold'>S</h1>
            </div>
            <div className="border border-[#1983FF] mt-2 h-0.5 w-full"></div>
            <div className='flex flex-row items-center text-center justify-center mt-4'>
                <div className='text-white font-poppins'>Do You Want To Set Up Your Task?</div>
                <div className='text-blue-500 font-bold font-poppins'  onClick={() => navigate("/SighnUp")}>Join Now</div>
            </div>
            <div className='flex   justify-center mt-24'>
                <div className="flex w-1/2 border-r border-gray-500 flex-col items-center justify-center">
                    <div>
                        <input 
                         placeholder="Enter your name"
                         name="email"
                         
                         onChange={handleChange}
                        
                        type="email" className="bg-black h-16 w-80 text-white rounded-xl border border-white px-4 py-2"  />
                    </div>
                    <div className="flex flex-col items-center justify-center mt-20">
                        <input  
    name="password"
    type="password"
    onChange={handleChange}
                        
                         className="bg-black w-80 h-16  rounded-xl text-white border border-white px-4 py-2" placeholder="Enter Password" />
                    </div>
                    <div className='flex-col items-center justify-center mt-20'>
                        
                        <button className="w-80 text-white h-16 rounded-xl   bg-[#1983FF]  px-4 py-2 font-bold text-center" type="submit"  >
                            Log In
                        </button>
                    </div>
                </div>
                <div className="flex w-1/2 flex-col items-center h-10 text-center ">
                    <button   onClick={() => navigate("/SighnUp")} className="w-80 rounded-xl font-semibold text-white bg-[#1983FF] py-4 px-3 text-center">
                        Sigh In User
                    </button>
                    <button onClick={() => navigate("/SighnUp")} className="w-80 h-16 mt-20  font-semibold rounded-xl text-white bg-[#3B5998] py-4 px-3 text-center">
                        Register As Admistrator
                    </button>
                </div>
            </div>
            </form>
        </div>
    )
}

