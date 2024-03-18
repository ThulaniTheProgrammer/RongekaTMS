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
import Tasks from './Task';
import Register from './Register';
import Report from './Report';






export default function WelcomeAdmin({token}) {
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
    <div className='text-white bold pb-5'>Home</div>
    <div className='text-white bold py-5'   onClick={() => navigate("/Tasks")} >My Task</div>
    <div className='text-white bold py-5'   onClick={() => navigate("/Register")} >Register</div>
    <div className='text-white bold py-5'   onClick={() => navigate("/Report")} >Report</div>
    <div className='text-white bold py-5' onClick={handleLogout}>Log Out</div>

    

</div>

<div className='flex w-full bg-[#001136]'>

    <div className='w-full bg-blue-100 px-4 mr-10 rounded-3xl'>
      <div className='flex flex-row'>
        <div className='w-3/4 text-gray-700 bg-blue-100 rounded-3xl h-screen'>
            <div className='font-bold text-4xl  my-3'>My Task</div>
            <div className='font-bold text-4xl  mb-10'>Welcome to Rongeka</div>
            <div className='flex flex-row'>

            <div className='mt-10'>
      <img src={student}   height={100} width={400} />
    </div>
            <div className=' flex justify-start w-1/2 items-start mr-2 rounded-lg bg-blue-200'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar />
    </LocalizationProvider>
            </div>
            </div>

            <div className='flex flex-row justify-between'>

            <div className=' flex justify-start w-80 h-80 mr-4   bg-blue-100'>

<div className='flex flex-col  '>
<div className='w-80  rounded-lg bg-blue-200 py-4 px-2  my-2 h-28'>
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
<div className=' w-80  rounded-lg bg-blue-200 my-2 h-28'>
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
</div> 
</div>




<div className=' flex justify-start w-1/2 items-start mr-2 mt-2 rounded-lg px-2 bg-blue-200'>
  <div className='text-center justify-center flex items-center font-semibold'>Tasks</div>
            <Radial/> 
            </div>
</div>


  
         



            
        </div>
        <div className='w-1/4 rounded-2xl bg-blue-200 h-screen relative'>
       <div className='mx-10 text-3xl font-semibold my-4 text-gray-700'>Team Chart</div>
       <div className='w-full bg-red-200 mr-10 rounded-xl   '>
      
      <div className="container w-full  ">
        <table className="table-auto w-full ">
          <thead className='px-10 bg-blue-500 mt-5'>
          <tr className='p-10 text-white'>
                    <th>Task Name </th>
                   
                    <th>Due Date</th>
                 
                  </tr>
          </thead>
          <tbody className=''>
            {orders.map((row, index) => (
              <tr key={row.id} className={index % 3 === 0 ? 'bg-[#3fcaf8]' : index % 3 === 1 ? 'bg-[#eab843]' : 'bg-[#4fe8eb]'}>
                      <td style={{ textAlign: 'center',  height: '50px'  }}>{row.Surname}</td>
                     
                      <td style={{ textAlign: 'center',  height: '50px'  }}>{row.Mobile}</td>
                 
                    </tr>
            ))}
          </tbody>
        </table>
      </div>
  
  
      </div>

<div className=' text-center absolute bottom-60 mx-2 pr-40  font-bold text-white bg-blue-500 rounded-2xl py-3 w-full flex items-center justify-center'>Register</div>

        </div>
      </div>
   



    </div>
  
</div>




</div>



        </div>
    )
}