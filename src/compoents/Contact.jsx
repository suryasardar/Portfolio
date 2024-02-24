import React from 'react'

const Contact = () => {
  return (
      <div name='contact' className=' w-full md:h-screen bg-slate-100 dark:bg-black text-black flex justify-center items-center p-4'>
          <form method="POST" action='https://getform.io/f/zbqOG3ep' className='flex flex-col max-w-2xl w-full dark:text-yellow-400'>
              <div className='pb-8  '>
                  <p className=' text-4xl border-b-4  font-bold inline dark:border-yellow-400 '>Contact</p>
                  <p className='py-4'> Submit the form below or shoot me an Email - suryaprakashchary616@gmail.com</p>
              </div>
              <input className=" bg-slate-300 p-2" type='text' name='name' placeholder='Name' />
              <input className=" bg-slate-300  my-4 p-2" type='email' name='email' placeholder='Email' />
              <textarea  className=" bg-slate-300 p-2 text-black" name='message' placeholder='Message' rows='10'></textarea>
               <button className='dark:text-white py-1 border-2 px-4 my-8 mx-auto flex items-center hover:bg-red-600'> Let's Collaborate</button>
           </form>
    </div>
  )
}

export default Contact;