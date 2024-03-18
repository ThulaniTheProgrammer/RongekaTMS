import React from 'react'
import { Form, useNavigate } from 'react-router-dom'

import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://nhgwlsmmqjlszkjncurg.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5oZ3dsc21tcWpsc3pram5jdXJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk2NzAyNzcsImV4cCI6MjAyNTI0NjI3N30.d_XWelkD4W4eo4R5eJybKzXfuG02WIemtAQwSU-oW1g');



const RegisterTask = () => {
    const navigate = useNavigate();
  const [Name, setName] = useState('');
  const [Surname, setSurname] = useState('');
  const [Email, setEmail] = useState('');
  const [Mobile, setMobile] = useState('');
  const [MaritalStatus, setMaritalStatus] = useState('');
  const [Church, setChurch] = useState('');
  const [Age, setAge] = useState('');
  const [Address, setAddress] = useState('');
  

  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      const { data, error } = await supabase.from('Realman').insert([{ Name, Surname, Email, Mobile, MaritalStatus, Church, Age, Address}]);
      if (error) {
          throw error;
      }
      console.log('Data inserted successfully:', data);
      // Reset the form
        
    setName('');
    setSurname('');
    setEmail('');
    setMobile('');
    setMaritalStatus('');
    setChurch('');
    setAge('');
    setAddress('');

  } catch (error) {
      console.error('Error inserting data:', error);
  }


   


  };

  
   

    
    return (
       
        <div className='bg-blue-500 h-screen px-10'>
             <form onSubmit={handleSubmit} className=''>
            <div className='flex items-center flex-row pt-10 justify-center'>
                <h1 className='text-white text-4xl bold pd-10'>BE</h1>
                <h1 className='text-red-600 text-4xl bold px-2'>THAT</h1>
                <h1 className='text-white text-4xl bold'>M</h1>
                <h1 className='text-red-600 text-4xl bold'>A</h1>
                <h1 className='text-white text-4xl bold'>N</h1>
            </div>
            <div className="border border-red-500 mt-2 h-0.5 w-full"></div>
            <div className='flex flex-row items-center text-center justify-center mt-4  mb-32'>
                <div className='text-white'>Do You Want To Join The Movement?</div>
                <div className='text-red-500'>Join Now</div>
            </div>


            <div className='flex justify-center items-center flex-row mt-10 '>

          

<div  className='mx-40 hide'>
<input type="text" value={Name} onChange={(e) => setName(e.target.value)} className="bg-black h-16 w-80 text-white border border-red-500 px-4 py-2" placeholder="Enter your name" /> onChange={setEmail} className="bg-black h-16 w-80 text-white border border-red-500 px-4 py-2" placeholder="Enter your email" /

</div>
<div className='mx-40'>
<input type="text" value={Surname} onChange={(e) => setSurname(e.target.value)} className="bg-black h-16 w-80 text-white border border-red-500 px-4 py-2" placeholder="Enter your surname" /> className="bg-black h-16 w-80 text-white border border-red-500 px-4 py-2" placeholder="Enter your email" /
</div>
</div>
<div className='flex justify-center items-center flex-row mt-10 '>
  
<div  className='mx-40 hide'>
<input type="text" value={Email} onChange={(e) => setEmail(e.target.value)} className="bg-black h-16 w-80 text-white border border-red-500 px-4 py-2" placeholder="Enter your name" /> onChange={setEmail} className="bg-black h-16 w-80 text-white border border-red-500 px-4 py-2" placeholder="Enter your email" /

</div>


<div className='mx-40'>
<input type="numeric" value={Mobile} onChange={(e) => setMobile(e.target.value)} className="bg-black h-16 w-80 text-white border border-red-500 px-4 py-2" placeholder="Enter your mobile" /> className="bg-black h-16 w-80 text-white border border-red-500 px-4 py-2" placeholder="Enter your email" /
</div>
</div>
<div className='flex justify-center items-center flex-row mt-10 '>
    <div className='mx-40'>
<input type="text" value={MaritalStatus} onChange={(e) => setMaritalStatus(e.target.value)} className="bg-black h-16 w-80 text-white border border-red-500 px-4 py-2" placeholder="Enter your marital status" /> className="bg-black h-16 w-80 text-white border border-red-500 px-4 py-2" placeholder="Enter your email" /
</div>
<div className='mx-40'>
<input type="text" value={Church} onChange={(e) => setChurch(e.target.value)} className="bg-black h-16 w-80 text-white border border-red-500 px-4 py-2" placeholder="Enter your church" /> className="bg-black h-16 w-80 text-white border border-red-500 px-4 py-2" placeholder="Enter
</div>
</div>
    
<div className='flex justify-center items-center flex-row mt-10 '>
    <div className='mx-40'>
        <input type="numeric" value={Age} onChange={(e) => setAge(e.target.value)} className="bg-black h-16 w-80 text-white border border-red-500 px-4 py-2" placeholder="Enter your age" /> className="bg-black h-16 w-80 text-white border border-red-500 px-4 py-2" placeholder="Enter your email" /
        </div>
        <div className='mx-40'>
            <input type="text" value={Address} onChange={(e) => setAddress(e.target.value)} className="bg-black h-16 w-80 text-white border border-red-500 px-4 py-2" placeholder="Enter your address" /> className="bg-black h-16 w-80 text-white border border-red-500 px-4 py-2" placeholder="Enter your email" /
            </div>


            
        



    </div>
 
    <div className='flex justify-center items-center flex-row mb-40 mx-36 '>
    
        

            
        
    
    <button className='text-xl w-full mb-10 py-10 text-white font-bold  bg-red-500 rounded-xl  mt-4 px-2'   type="submit">Add Man</button>
         


    </div>
 
          
      </form>
        </div>
       

        
    )
}

export default RegisterTask;