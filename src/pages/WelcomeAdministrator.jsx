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






export default function WelcomeAdminstrator() {
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);

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

<div className='flex w-1/4 flex-col font-bold text-lg rounded-lg px-4 bg-blue-300 mr-2xl '>
<div className='text-blue-950 bold text-3xl pb-5'>RONGEKA</div>
    <div className='text-white bold pb-5'>Home</div>
    <div className='text-white bold py-5'>Project</div>
    <div className='text-white bold py-5'>My Task</div>
    <div className='text-white bold py-5'>Calander</div>
    <div className='text-white bold py-5'>Time</div>
    <div className='text-white bold py-5'>Reports</div>
    <div className='text-white bold py-5'>LogOut</div>
    

</div>

<div className='flex w-full bg-[#001136]'>

    <div className='w-full bg-blue-100 px-4 mr-10 ml-10 rounded-3xl'>
      <div className='flex flex-row'>
        <div className='w-3/4 bg-blue-100 rounded-3xl h-screen'>
            <div className='font-bold text-4xl  my-3'>DASHBOARD</div>
            
            <div className='flex flex-row justify-between'>

            <div className='mt-10 '>
     
    </div>
            <div className=' flex justify-startitems-start mr-2 rounded-lg bg-blue-200'>
           
            </div>
            </div>

            <div className='flex flex-row justify-between'>

            <div className=' flex justify-start w-80 h-80 mr-4   bg-blue-100'>


</div>





</div>


  
         



            
        </div>
    
      </div>
   



    </div>
  
</div>




</div>



        </div>
    )
}