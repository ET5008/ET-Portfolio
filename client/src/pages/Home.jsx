import { useState } from 'react'
import email from './assets/email.svg'
import github from './assets/github.svg'
import linkedIn from './assets/linkedIn.svg'
import './index.css'
import Nav from './components/Nav'


function App() {

  return (
    <>
      <Nav />
      <main>
        <section id='hero' className='h-[90vh] flex justify-center items-center flex-col'>
          <h1 className='text-5xl text-text'>Bridging gaps in business with technology</h1>
          <a href="#about" className='border rounded-md mt-8 bg-primary p-2.5 text-lg w-[15vw] text-center'>Learn More</a>
        </section>
        <section id='about' className='flex flex-col items-center h-[75vh] justify-center p-16'>
          <h2 className='text-3xl text-text'>About Me</h2>
          <p className='text-lg w-[40vw] text-center mt-4 text-text'>Hello! My name is Ethan and I am an incoming Computer Science undergrad at UC Berkeley. I love finding and creating solutions for small and local businesses to help their growth. I have experience in front end development and UX design. I am currently exploring backend and Full-stack development as it is my goal to be a full stack developer. Come and watch my journey!</p>
        </section>
        <section id='work' className='flex flex-col items-center h-[75vh] justify-center p-16'>
          <h2 className='text-3xl text-text'>My Work</h2>
          <div className='flex space-x-4 mt-4'>
            <div className='p-4 rounded-md w-[25vw] text-text bg-secondary'>
              <img src="" alt="" />
              <h3 className='text-2xl'>Work in progress</h3>
              <div className='space-x-3 flex flex-row flex-wrap'>
                <span className='text-sm font-light  py-1 px-3 bg-primaryDark mt-1 rounded-full'>React</span>
                <span className='text-sm font-light  py-1 px-3 bg-primaryDark mt-1 rounded-full'>Tailwind</span>
                <span className='text-sm font-light  py-1 px-3 bg-primaryDark mt-1 rounded-full'>Node</span>
                <span className='text-sm font-light  py-1 px-3 bg-primaryDark mt-1 rounded-full'>HTML/CSS</span>
              </div>
              <p className='text-xl mb-3 mt-4'>More amazing projects to come shortly</p>
              <a href="" className=''>view project</a>
            </div>
          </div>
        </section>
        <section id='contact' className='flex items-center flex-col h-[70vh] justify-center'>
          <div className='bg-backgroundLight text-text p-16 rounded-md text-center flex items-center flex-col justify-center border-white'>
            <h2 className='text-3xl'>Contacts</h2>
            <p className='text-lg'>Feel free to follow all my socials and reach out!</p>
            <div className='flex space-x-4 mt-4'>
              <img src={email} alt="" className='h-16' />
              <img src={github} alt="" className='h-16' />
              <img src={linkedIn} alt="" className='h-16' />
            </div>
          </div>
        </section>
      </main>
      <footer>
        <h2 className='p-2 text-text text-lg bg-backgroundLight'>Created and designed by Ethan Tran</h2>
      </footer>
    </>
  )
}

export default App
