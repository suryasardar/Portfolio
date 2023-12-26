import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaNode, FaReact,FaDocker } from 'react-icons/fa';
import { GrMysql } from "react-icons/gr";

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'Node',
    icon: <FaNode className='h-16 w-16 text-emerald-500' />,
    text: ' Node.js to create high-performance and responsive back-end systems and handling asynchronous operations, managing APIs, and ensuring optimal performance for web applications.',
  },
  {
    id: nanoid(),
    title: 'Mysql',
    icon: <GrMysql className='h-16 w-16 text-emerald-500' />,
    text: ' I possess the ability to create tables and perform data modeling in MySQL, My skills extend to crafting SQL queries to interact with and manipulate data within these tables.'
  },
  {
    id: nanoid(),
    title: 'Docker',
    icon: <FaDocker className='h-16 w-16 text-emerald-500' />,
    text: 'I can containerize applications using Docker, providing a consistent and portable environment across different systems. This involves creating Docker containers, encapsulating applications and their dependencies.'
  },
];

export const projects = [
  {
    id: nanoid(),
    img: 'https://www.typingmaster.com/image/lockup_1.png',
    url: 'https://6583075430feee29e4925af3--fanciful-shortbread-401dc6.netlify.app/',
    github: 'https://github.com/suryasardar/typingwebsite',
    title: 'Tying Website',
    text: 'It is a typing website where you can become proficient by practicing consistently and accurately, typing even in fast-paced environments.The platform provides a user-friendly interface that adapts to various skill levels, allowing users to practice typing in both controlled exercises and fast-paced environments.',
  },
  {
    id: nanoid(),
    img: 'https://user-images.githubusercontent.com/60821265/106362860-289ce500-634b-11eb-8d38-0ff284011689.png',
    // url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/suryasardar/comfy-sloth-store',
    title: 'comfy-sloth-store',
    text: "It's an e-commerce website specializing in furniture products.I've developed both the frontend and backend using Node.js and MySQL. On the frontend, I've created an intuitive and visually appealing user interface to enhance the overall shopping experience. The backend features RESTful APIs and incorporates solid error-handling mechanisms, ensuring a seamless and secure online shopping journey for users.",
  },
     
];
