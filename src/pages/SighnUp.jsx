import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';


const supabase = createClient('https://fwlzeppvsmeiiusapnkp.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3bHplcHB2c21laWl1c2FwbmtwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAyMjUzNDIsImV4cCI6MjAyNTgwMTM0Mn0.5nAajCdyhd-P1WsBDwIPLir48huFuydsmQOUW3tnSRA');



const SignUp = () => {
  const navigate = useNavigate();
  const [formData,setFormData] = useState({
    fullName:'',email:'',password:''
  })

  console.log(formData)

  function handleChange(event){
    setFormData((prevFormData)=>{
      return{
        ...prevFormData,
        [event.target.name]:event.target.value
      }

    })

  }

  async function handleSubmit(e){
    e.preventDefault()

    try {
      const { data, error } = await supabase.auth.signUp(
        {
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              full_name: formData.fullName,
            }
          }
        }
      )
      if (error) throw error
      alert('Check your email for verification link')

      
    } catch (error) {
      alert(error)
    }
  }





  return (
    <div className='bg-black h-screen px-10'>
    <form onSubmit={handleSubmit} >
    <div className='flex items-center flex-row pt-10 justify-center'>
                <h1 className='text-white text-4xl px-10 bold pd-10'>RONGEKA</h1>
                
                <h1 className='text-blue-900 text-4xl bold'>T</h1>
                <h1 className='text-white text-4xl bold'>M</h1>
                <h1 className='text-blue-900 text-4xl bold'>S</h1>
            </div>
    <div className="border border-blue-500 mt-2 h-0.5 w-full"></div>
    <div className='flex flex-row items-center text-center justify-center mt-4'>
        <div className='text-white'>Do You Want To Join The Movement?</div>
        <div className='text-blue-500 bold tex-lg font-bold'  onClick={() => navigate("/Welcome")}>Log In Now</div>
    </div>
    <div className='flex   justify-center mt-24'>
        <div className="flex w-1/2 flex-col  items-center justify-center">
            <div>
                <input 
                 placeholder="Enter your Email"
                 name="email"
                 
                 onChange={handleChange}
                
                type="email" className="bg-black h-16 w-80 text-white rounded-xl border border-red-300 px-4 py-2"  />
            </div>
            <div className="flex flex-col items-center justify-center mt-20">
                <input  
name="password"
type="password"
onChange={handleChange}
                
                 className="bg-black w-80 h-16 text-white border rounded-xl border-red-900 px-4 py-2" placeholder="Enter Password" />
            </div>
            <div className='flex-col items-center justify-center mt-20'>
                
                <button className="w-80 text-white font-poppins font-extrabold h-16  bg-blue-500 px-4 py-2 text-center" type="submit"  >
                    Log In
                </button>
            </div>
        </div>
         
    </div>
    </form>
</div>
  )
}

export default SignUp;