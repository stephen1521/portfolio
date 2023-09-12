import { useMediaQuery } from '@mui/material';
import { useTheme } from "@mui/material/styles";
import './App.css';
import Home from './Components/Home';
import HomeMobile from './Components/HomeMobile';
import AppDrawer from './Components/Drawer';
import { useState } from "react";
import { useRef } from "react";

function App() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('lg'))
    const [openDrawer, setOpenDrawer] = useState(false);
    const aboutRef = useRef(null);
    const experienceRef = useRef(null);
    const educationRef = useRef(null);
    const projectRef = useRef(null);
    
    const projects = [
        {
            name: 'Ecommerce',
            description: 'An e-commerce site selling clothes. The purpose of this project was to learn Material UI and Responsive/Mobile First Design. Some features include user authentication and authorization, a cart, a wishlist, and more. The project is deployed through AWS.',
            urlGit: 'https://github.com/stephen1521/ecommerce',
            urlApp: 'https://ecommerce.srwarnock.com/',
            skills: ['React', 'Material UI', 'Express', 'JavaScript', 'MongoDB', 'Node', 'Redux', 'Context', 'Mongoose', 'Axios', 'AWS', 'JWT', 'Bcryptjs']
        },
        {
            name: 'Project Management Application',
            description: 'I created a content management system focused on projects. This was my first Full Stack Application, so the whole application was a big learning experience. Features include the ability to create, assign, and manage tasks assigned to users and more. The project will be deployed through AWS soon.',
            urlGit: 'https://github.com/stephen1521/project-management_front-end',
            urlApp: '',
            skills: ['React', 'BootStrap', 'Express', 'JavaScript', 'MongoDB', 'Node', 'Mongoose', 'Axios', 'AWS', 'CSS', 'JWT', 'Bcryptjs'],
        },
        {
            name: 'Tetris Clone',
            description: 'This was the first project I created using HTML, CSS, and JavaScript. It is a Tetris clone, with features like fast drop, hard drop, levels, and score tracking. The project is deployed through GitHub pages.',
            urlGit: 'https://github.com/stephen1521/final-project',
            urlApp: 'https://stephen1521.github.io/final-project/',
            skills: ['HTML', 'CSS', 'JavaScript'],
        },
    ];

    const jobs = [
        {
            start: '2021',
            end: 'Present',
            jobTitle: 'MedScope',
            jobPosition: 'Medical Alert Device Delivery Specialist',
            description: 'I deliver medical alert devices to people who need them, I explain how to use and test them. The work is done on a contract basis with little oversight.'
        },
        {
            start: '2014',
            end: '2019',
            jobTitle: 'U.S. Army',
            jobPosition: 'Military Police',
            description: 'I joined the Military right out of High School, I served for 5 years as a Military Police Officer. My duties included Law Enforcement and Base Security.'
        },
    ]

    return (
        <>
        <AppDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} aboutRef={aboutRef} educationRef={educationRef} experienceRef={experienceRef} projectRef={projectRef}/>
        {matches ? <HomeMobile projects={projects} jobs={jobs} setOpenDrawer={setOpenDrawer} aboutRef={aboutRef} educationRef={educationRef} experienceRef={experienceRef} projectRef={projectRef} /> : <Home projects={projects} jobs={jobs} aboutRef={aboutRef} educationRef={educationRef} experienceRef={experienceRef} projectRef={projectRef}/>}
        </>
    )
}

export default App;
