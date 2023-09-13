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
            description: 'An Ecommerce Application, showcases my proficiency in the MERN stack and Material UI. This application features user authentication, authorization, a shopping cart, and wishlist functionality. I successfully deployed it on AWS, emphasizing my commitment to learning responsive design and UI development.',
            urlGit: 'https://github.com/stephen1521/ecommerce',
            urlApp: 'https://ecommerce.srwarnock.com/',
            skills: ['React', 'Material UI', 'Express', 'JavaScript', 'MongoDB', 'Node', 'Redux', 'Context', 'Mongoose', 'Axios', 'AWS', 'JWT', 'Bcryptjs']
        },
        {
            name: 'Project Management Application',
            description: 'As my first full-stack project, the Project Management Application demonstrates my ability to create comprehensive web applications. Developed using the MERN stack with Bootstrap, it offers project creation, user assignment, and task management. With full CRUD capabilities for projects and tasks, this project marks a significant milestone in my development journey. Deployment on AWS is in progress.',
            urlGit: 'https://github.com/stephen1521/project-management_front-end',
            urlApp: '',
            skills: ['React', 'BootStrap', 'Express', 'JavaScript', 'MongoDB', 'Node', 'Mongoose', 'Axios', 'AWS', 'CSS', 'JWT', 'Bcryptjs'],
        },
        {
            name: 'Tetris Clone',
            description: 'My inaugural project, a Tetris Clone, was built from scratch using vanilla HTML, CSS, and JavaScript. It incorporates features like fast drop, hard drop, level progression, and score tracking. This project is deployed on GitHub Pages and reflects my early dedication to coding and web development.',
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
            description: 'As a Medical Device Delivery Specialist at MedScope, I efficiently schedule appointments with clients, personally deliver medical alert devices, facilitate paperwork completion, and provide detailed device explanations. I prioritize client satisfaction through excellent service and addressing their inquiries.'
        },
        {
            start: '2014',
            end: '2019',
            jobTitle: 'U.S. Army',
            jobPosition: 'Military Police',
            description: 'In the U.S. Army, I served as a Military Police Officer, specializing in law enforcement and base security. My duties encompassed maintaining law and order, ensuring the safety of military personnel and property, and executing security protocols with precision and professionalism.'
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
