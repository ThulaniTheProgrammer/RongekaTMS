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
import RongekaCard from './RongekaCard';
import { CiShoppingCart } from "react-icons/ci";
import { LuSaveAll } from "react-icons/lu";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import Curve from '../Curve/curve';
import Tasks from './Task';
import Register from './Register';






export default function Report({token}) {
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
        <div className='bg-[#001136]  h-full   px-10  '>
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
    <div className='text-white bold py-5'   onClick={() => navigate("/")} >Report</div>
    <div className='text-white bold py-5' onClick={handleLogout}>Log Out</div>


    

</div>


<div className='flex flex-col w-full' >
<div className='flex w-full h-32 rounded-md'>

<RongekaCard Salename="Task Completed" Salenumber="10" Icon={< CiShoppingCart />}/>
<RongekaCard Salename="Task Overdue" Salenumber="8"   Icon={< LuSaveAll />}/>
<RongekaCard Salename="Project Completed" Salenumber="7" Icon={< MdOutlineAccountBalanceWallet />}/>     
</div>
<div className='text-white font-medium text-xl my-10'>Team Perfomance Analytics</div>
<Curve/>

</div>
</div>



        </div>
    )
}