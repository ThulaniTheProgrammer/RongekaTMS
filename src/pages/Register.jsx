
import React, { useState } from 'react';
import { Form, useNavigate } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://nhgwlsmmqjlszkjncurg.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5oZ3dsc21tcWpsc3pram5jdXJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk2NzAyNzcsImV4cCI6MjAyNTI0NjI3N30.d_XWelkD4W4eo4R5eJybKzXfuG02WIemtAQwSU-oW1g');

const Register = () => {
    const navigate = useNavigate();
    const [task, setTask] = useState('');
    const [date, setDate] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [role, setRole] = useState('');
    const [projectTittle, setProjectTittle] = useState('');
    const [description, setDescription] = useState('');
    const [email, setEmail] = useState('');
    const [priority, setPriority] = useState('');

    


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data, error } = await supabase.from('Rongeka').insert([{ task, date,email,priority,description,projectTittle,role,surname,name }]);
            if (error) {
                throw error;
            }
            console.log('Data inserted successfully:', data);
            // Reset the form
            setTask('');
            setDate('');
            setName('');
            setSurname('');
            setRole('');
            setProjectTittle('');
            setDescription('');
            setEmail('');
            setPriority('');
        
            
        } catch (error) {
            console.error('Error inserting data:', error);
        }
    };

    return (
        <div className='bg-[#001136] h-screen px-10'>
            <form onSubmit={handleSubmit}>
                <div className='flex items-center flex-row pt-10 justify-center'>
                    <h1 className='text-white text-4xl px-10 bold pd-10'>RONGEKA</h1>
                    <h1 className='text-blue-900 text-4xl bold'>T</h1>
                    <h1 className='text-white text-4xl bold'>M</h1>
                    <h1 className='text-blue-900 text-4xl bold'>S</h1>
                </div>
                <div className="border border-[#1983FF] mt-2 h-0.5 w-full"></div>
                <div className='flex flex-row items-center text-center justify-center mt-4'>
                    <div className='text-white font-poppins'>Do You Want To Set Up Your Task?</div>
                    <div className='text-blue-500 font-bold font-poppins' onClick={() => navigate("/SighnUp")}>Join Now</div>
                </div>
                <div className='flex justify-center items-center flex-row mt-10 '>
                    <div className='mx-40 hide'>
                        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} className="bg-black h-16 w-80 text-white border rounded-lg border-blue-500 px-4 py-2" placeholder="Enter your name eg Tanaka" />
                    </div>

                    <div className='mx-40'>
                        <input type="text" value={date} onChange={(e) => setDate(e.target.value)} className="bg-black h-16 w-80 text-white border rounded-lg border-blue-500 px-4 py-2" placeholder="Enter the due date eg 12 May 2022" />
                    </div>
        
                </div>

<div className='flex justify-center items-center flex-row mt-10 '>
                    <div className='mx-40 hide'>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="bg-black h-16 w-80 text-white border rounded-lg border-blue-500 px-4 py-2" placeholder="Enter your name eg Tanaka" />
                    </div>

                    <div className='mx-40'>
                        <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} className="bg-black h-16 w-80 text-white border rounded-lg border-blue-500 px-4 py-2" placeholder="Enter your email eg Moyo" />
                    </div>
        
                </div>
                <div className='flex justify-center items-center flex-row mt-10 '>
                    <div className='mx-40 hide'>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-black h-16 w-80 text-white border rounded-lg border-blue-500 px-4 py-2" placeholder="Enter your name eg openai@gmail.com" />
                    </div>

                    <div className='mx-40'>
                        <input type="text" value={role} onChange={(e) => setRole(e.target.value)} className="bg-black h-16 w-80 text-white border rounded-lg border-blue-500 px-4 py-2" placeholder="Enter your role eg Project Manager" />
                    </div>
                </div>
                <div className='flex justify-center items-center flex-row mt-10 '>
                    <div className='mx-40 hide'>
                        <input type="text" value={projectTittle} onChange={(e) => setProjectTittle(e.target.value)} className="bg-black h-16 w-80 text-white border rounded-lg border-blue-500 px-4 py-2" placeholder="Enter tittle of the project" />
                    </div>

                    <div className='mx-40'>
                        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="bg-black h-16 w-80 text-white border rounded-lg border-blue-500 px-4 py-2" placeholder="Brief project description" />
                    </div>
                </div>
                <div className='flex justify-center items-center flex-row mt-10 '>
                    <div className='mx-40 hide'>
                        <input type="text" value={priority} onChange={(e) => setPriority(e.target.value)} className="bg-black h-16 w-80 text-white border rounded-lg border-blue-500 px-4 py-2" placeholder="Choose project priority" />
                    </div>

                    <div className='mx-40'>
                    <button className='bg-blue-500 h-16 w-80 text-white border rounded-lg border-blue-500 px-4 py-2' type="submit">Add Task</button></div>
                </div>





            </form>
        </div>
    );
};

export default Register;
       

        
    