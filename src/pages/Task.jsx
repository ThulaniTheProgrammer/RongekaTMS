import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Lottie from 'lottie-react';
import student from './student.png'
import Radial from './Chart/radial';
import { SlArrowRight } from "react-icons/sl";

import Register from './Register';
import Report from './Report'
import WelcomeAdmin from './WelcomeAdmin';






export default function Tasks({token}) {
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);

    function handleLogout(){
      sessionStorage.removeItem('token')
      navigate('/')
    }


    function handleLogout(){
      sessionStorage.removeItem('token')
      navigate('/')
    }

    useEffect(() => {
      const fetchOrders = async () => {
        const supabase = createClient('https://nhgwlsmmqjlszkjncurg.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5oZ3dsc21tcWpsc3pram5jdXJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk2NzAyNzcsImV4cCI6MjAyNTI0NjI3N30.d_XWelkD4W4eo4R5eJybKzXfuG02WIemtAQwSU-oW1g');


  
        const { data, error } = await supabase
          .from('Realman')
          .select('Name, Surname, Email, Mobile, MaritalStatus, Church, Age, Address');
        
        if (error) {
          console.error('Error fetching orders:', error);
        } else {
          setOrders(data);
        }
      };
  
      fetchOrders();
    }, []);





    
    return (
        <div className='bg-[#001136]  h-fullw-screen px-10  '>
            <div className='flex justify-between pt-5 mb-20'>
            <div className='flex items-center flex-row  start  border-b border-blue-500'>
            <h1 className='text-white text-4xl px-10 bold pd-10'>RONGEKA</h1>
                
                <h1 className='text-blue-900 text-4xl bold'>T</h1>
                <h1 className='text-white text-4xl bold'>M</h1>
                <h1 className='text-blue-900 text-4xl bold'>S</h1>
               
            </div>
          
             <div>
            <div className='rounded-full bg-blue-100 h-10 w-10'>
            
            </div>
            <h1 className='text-white font-bold'>Hie </h1>
            </div>
            </div>
          
<div className='flex'>

<div className='flex w-1/4 flex-col font-bold text-lg'>
<div className='text-white bold pb-5'  onClick={() => navigate("/WelcomeAdmin")} >Home</div>
    <div className='text-white bold py-5'   onClick={() => navigate("")} >My Task</div>
    <div className='text-white bold py-5'   onClick={() => navigate("/Register")} >Register</div>
    <div className='text-white bold py-5'   onClick={() => navigate("/Report")} >Report</div>
    <div className='text-white bold py-5' onClick={handleLogout}>Log Out</div>

    

    

</div>

<div className='flex w-full bg-[#001136]'>

    <div className='w-full bg-blue-100 px-4 mr-10 rounded-3xl'>
      <div className='flex flex-row'>
        <div className='w-3/4 text-gray-700 bg-blue-100 rounded-3xl h-screen'>
            <div className='font-bold text-4xl  my-3'>My Task</div>
            <div className='font-bold text-4xl  mb-10'>Task Management</div>

            <div className='flex justify-between flex-row'>
    <div>To-dos</div>
    <div className='text-start mx-5'>In Progress</div>

</div>
<div className='flex justify-between rounded-lg'>


  

  <div className='flex-1  mt-2 rounded-lg bg-blue-100'>
  <div className='flex-1  mt-10 rounded-lg bg-white px-4 py-4'>

  <div className='flex justify-between mb-5  '>
    <div className='flex flex-row'>
    <p className='text-xl text-gray-600 bg-red-200 px-2 py-1 mx-1 rounded-2xl'>Allan</p>
    <p className='text-xl text-white-600 bg-purple-300 font-thick text-black  px-2 py-1 mx-1 rounded-2xl'>Mudzuri</p>
    </div>
    <p className='text-green-600'>+2.0%</p>
    </div>
    <div className='text-3xl pb-1 font-medium'>Design Development</div>
    <div className='text-gray-40'>At the begining of design development you must ha a rough idea</div>
    <div className='flex justify-between'>
        <p className='flex items-center underline text-gray-500'>View all Tasks</p>
        <div className='text-white font-bold py-1 px-1 bg-blue-500  rounded-3xl'>High</div>
    
    </div>



</div>
<div className='flex-1  mt-10 rounded-lg bg-white'>

<div className='flex-1  mt-10 rounded-lg bg-white px-4 py-4'>

  <div className='flex justify-between mb-5  '>
    <div className='flex flex-row'>
    <p className='text-xl text-gray-600 bg-red-200 px-2 py-1 mx-1 rounded-2xl'>Joy</p>
    <p className='text-xl text-white-600 bg-purple-300 font-thick text-black  px-2 py-1 mx-1 rounded-2xl'>Mazitye</p>
    </div>
    <p className='text-red-600'>-10.0%</p>
    </div>
    <div className='text-3xl pb-1 font-medium'>UI/UX design</div>
    <div className='text-gray-40'>Proper design methodologies must be taken into considertion and proper colors which alighn with the theme must be used</div>
    <div className='flex justify-between'>
        <p className='flex items-center underline text-gray-500'>View all Tasks</p>
        <div className='text-white font-bold py-1 px-1 bg-blue-300  rounded-3xl'>medium</div>
    
    </div>



</div>



</div>
  </div>
  
  <div className='flex-1 mt-2 rounded-lg m-2 bg-blue-100'>

  <div className='flex-1  mt-10 rounded-lg bg-white'>

  <div className='flex-1  mt-10 rounded-lg bg-white px-4 py-4'>

<div className='flex justify-between mb-5  '>
  <div className='flex flex-row'>
  <p className='text-xl text-gray-600 bg-red-200 px-2 py-1 mx-1 rounded-2xl'>Melissa</p>
  <p className='text-xl text-white-600 bg-purple-300 font-thick text-black  px-2 py-1 mx-1 rounded-2xl'>Tsvangirai</p>
  </div>
  <p className='text-green-600'>+22.0%</p>
  </div>
  <div className='text-3xl pb-1 font-medium'>Software Development</div>
  <div className='text-gray-40'>Agile Methodology must be used as the software development method </div>
  <div className='flex justify-between'>
      <p className='flex items-center underline text-gray-500'>View all Tasks</p>
      <div className='text-white font-bold py-1 px-1 bg-blue-100  rounded-3xl'>low</div>
  
  </div>



</div>

</div>

<div className='flex-1  mt-10 rounded-lg bg-white'>

<div className='flex-1  mt-10 rounded-lg bg-white px-4 py-4'>

  <div className='flex justify-between mb-5  '>
    <div className='flex flex-row'>
    <p className='text-xl text-gray-600 bg-red-200 px-2 py-1 mx-1 rounded-2xl'>Thulani</p>
    <p className='text-xl text-white-600 bg-purple-300 font-thick text-black  px-2 py-1 mx-1 rounded-2xl'>Makeba</p>
    </div>
    <p className='text-green-600'>+2.0%</p>
    </div>
    <div className='text-3xl pb-1 font-medium'>Project Documentation</div>
    <div className='text-gray-40'>All reference soureces must be documented and all chapters must be submitted to the supervisor</div>
    <div className='flex justify-between'>
        <p className='flex items-center underline text-gray-500'>View all Tasks</p>
        <div className='text-white font-bold py-1 px-1 bg-blue-500  rounded-3xl'>High</div>
    
    </div>



</div>



</div>
    
  </div>



</div>



  
         



            
        </div>
        <div className='w-1/4 px-2 rounded-2xl bg-white h-screen relative'>

       <div className='  font-bold text-xl text-start   text-gray-900 mb-12'>Completed</div>
       
       <div className='flex flex-col  '>
<div className=' rounded-lg bg-blue-200 py-4 px-2  my-2 h-28'>
  <div className='flex justify-between'>
    <div className='relative'>
<div className='font-bold text-lg '>Dissertation</div>
<div>Final year project</div>
<div className='font-thin absolute-4 mt-4 '>Due 6 June</div>
</div>
<div>
<SlArrowRight />
</div>
</div>

</div>
<div className='  rounded-lg bg-blue-200 px-2 py-2 my-2 h-28'>
<div className='flex justify-between'>
    <div className='relative'>
<div className='font-bold text-lg '>Assignment</div>
<div>Research Methods</div>
<div className='font-thin absolute-4 mt-4 '>Due 5 April</div>
</div>
<div>
<SlArrowRight />
</div>
</div>
</div>
<button>
<div className='mx-10 text-xl font-thick   text-white bg-blue-700 px-4 py-2 my-12 rounded-2xl'>Submit Task</div>
</button>
</div>

        </div>
      </div>
   



    </div>
  
</div>




</div>



        </div>
    )
}