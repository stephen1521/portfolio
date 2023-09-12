import { HomeContainer, LeftContainer, RightContainer, AppBarContainer, ProjectContainer, ExperienceContainer, EducationContainer } from "../styles/home"
import { Typography, ListItemButton, ListItemText, Divider, Box, Tooltip, IconButton, Link } from '@mui/material'
import ProjectCard from './ProjectCard'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ExperienceCard from './ExperienceCard'
import resume from '../static/resume.pdf'
import { useRef, useState } from "react";
import { useEffect } from "react";
import SendIcon from '@mui/icons-material/Send';

export default function Home(){
    const aboutRef = useRef(null);
    const experienceRef = useRef(null);
    const educationRef = useRef(null);
    const projectRef = useRef(null);
    const rightRef = useRef(null);
    const [contentHover, setContentHover] = useState(false);
    const [aboutMeFont, setAboutMeFont] = useState(18);
    const [experienceFont, setExperienceFont] = useState(18);
    const [educationFont, setEducationFont] = useState(18);
    const [projectFont, setProjectFont] = useState(18);

    const handleClick = (ref) => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    }

    useEffect(() => {
        const handleScrolling = (event) => {
            if (rightRef !== null) {
              if (contentHover === false) {
                rightRef.current.scrollTo({
                  top: rightRef.current.scrollTop + event.deltaY,
                  behavior: "auto",
                });
              }
            }
        };
        window.addEventListener("wheel", handleScrolling);
        return () => {
            window.removeEventListener("wheel", handleScrolling);
        }
    });

    const handleFontSizeChange =() => {
        if(rightRef.current.scrollTop >= 0 && rightRef.current.scrollTop < 300){
            setAboutMeFont(24);
            setExperienceFont(18);
        }else if(rightRef.current.scrollTop >= 300 && rightRef.current.scrollTop < 700){
            setAboutMeFont(18);
            setEducationFont(18);
            setExperienceFont(24);
        }else if(rightRef.current.scrollTop >= 700 && rightRef.current.scrollTop < 1000){
            setEducationFont(24);
            setExperienceFont(18);
            setProjectFont(18);
        }else if(rightRef.current.scrollTop >= 1000){
            setEducationFont(18);
            setProjectFont(24);
        }
    }


    const projects = [
        {
            name: 'Ecommerce',
            description: 'An Ecommerce site selling clothes. The purpose of this project was to learn Material UI and Responsive/Mobile First Design. Some features include user authentication and authorization, cart, wishlist and more.The project is deployed through AWS.',
            urlGit: 'https://github.com/stephen1521/ecommerce',
            urlApp: 'https://ecommerce.srwarnock.com/',
            skills: ['React', 'Material UI', 'Express', 'JavaScript', 'MongoDB', 'Node', 'Redux', 'Context', 'Mongoose', 'Axios', 'AWS', 'JWT', 'Bcryptjs']
        },
        {
            name: 'Project Management Application',
            description: 'I created a content management system focused on projects. This was my first Full Stack Application, so the whole application was a big learning experience. Features include the ability to create, assign, manage tasks assigned to users and more. The project will deployed through AWS soon.',
            urlGit: 'https://github.com/stephen1521/project-management_front-end',
            urlApp: '',
            skills: ['React', 'BootStrap', 'Express', 'JavaScript', 'MongoDB', 'Node', 'Mongoose', 'Axios', 'AWS', 'CSS', 'JWT', 'Bcryptjs'],
        },
        {
            name: 'Tetris Clone',
            description: 'This was my first project I created using HTML, CSS, and JavaScript. It is a Tetris clone, with features like fast drop, hard drop, levels, and score tracking. The project is deployed through github pages.',
            urlGit: 'https://github.com/stephen1521/final-project',
            urlApp: 'https://stephen1521.github.io/final-project/',
            skills: ['HTML', 'CSS', 'JavaScript'],
        },
    ];

    const renderProjects = projects.map((project, index) => (
        <ProjectCard key={index} name={project.name} desciption={project.description} urlGit={project.urlGit} urlApp={project.urlApp} skills={project.skills}/>
    ))

    const jobs = [
        {
            start: '2021',
            end: 'Present',
            jobTitle: 'MedScope',
            jobPosition: 'Medical Alert Device Delivery Specialist',
            description: 'I deliver medical alert devices to people who need them, I explain how to use and test them. The work is done on a contract bases with little oversight.'
        },
        {
            start: '2014',
            end: '2019',
            jobTitle: 'U.S. Army',
            jobPosition: 'Military Police',
            description: 'I joined the Military right out of High School, I served for 5 years as a Military Police Officer. My duties uncluded Law Enforcement and Base Security.'
        },
    ]

    const renderJobs = jobs.map((job, index) => (
        <ExperienceCard key={index} start={job.start} end={job.end} jobTitle={job.jobTitle} jobPosition={job.jobPosition} description={job.description}/>
    ))

    return (
        <HomeContainer>
            <LeftContainer>
                <Box>
                    <Typography variant="h2" sx={{padding: '10px'}}>Stephen Warnock</Typography>
                    <Typography variant="h4" sx={{padding: '10px'}}>Full Stack Developer</Typography>
                    <Typography sx={{padding: '10px', fontSize: 18}}>I build Full Stack Applications using the MERN Stack.</Typography>
                    <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
                        <Typography sx={{ padding: '10px', fontSize: 18, fontWeight: 'bold'}}>Get in touch</Typography>
                            <Link component='button' href="mailto:swarnock13662@gmail.com" sx={{fontSize: 18, fontWeight: 'bold', color: 'white', display: 'flex'  }} underline="hover">      
                                <SendIcon fontSize="medium" sx={{marginRight: '5px'}}/>
                                swarnock13662@gmail.com
                            </Link>
                    </Box>
                </Box>
                <AppBarContainer>
                        <ListItemButton onClick={() => handleClick(aboutRef)}>
                            <ListItemText primaryTypographyProps={{fontSize: aboutMeFont}}>About Me</ListItemText>
                        </ListItemButton>
                        <Divider orientation="horizontal" sx={{bgcolor: 'white'}}/>
                        <ListItemButton onClick={() => handleClick(experienceRef)}>
                            <ListItemText primaryTypographyProps={{fontSize: experienceFont}}>Experience</ListItemText>
                        </ListItemButton>
                        <Divider orientation="horizontal" sx={{bgcolor: 'white'}}/>
                        <ListItemButton onClick={() => handleClick(educationRef)}>
                            <ListItemText primaryTypographyProps={{fontSize: educationFont}}>Education</ListItemText>
                        </ListItemButton>
                        <Divider orientation="horizontal" sx={{bgcolor: 'white'}}/>
                        <ListItemButton onClick={() => handleClick(projectRef)}>
                            <ListItemText primaryTypographyProps={{fontSize: projectFont}}>Projects</ListItemText>
                        </ListItemButton>
                        <Divider orientation="horizontal" sx={{bgcolor: 'white'}}/>
                </AppBarContainer>
                <Box>
                    <Tooltip placement="top" title='View My Github'>
                        <IconButton sx={{color: 'white'}} size="large" onClick={() => window.open('https://github.com/stephen1521')}>
                            <GitHubIcon fontSize="inherit" />
                        </IconButton>
                    </Tooltip>
                    <Tooltip placement="top" title='View My LinkedIn'>
                        <IconButton sx={{color: 'white'}} size="large">
                            <LinkedInIcon fontSize="inherit"/>
                        </IconButton>
                    </Tooltip>
                </Box>
            </LeftContainer>
            <RightContainer ref={rightRef} onMouseEnter={() => setContentHover(true)} onMouseLeave={() => setContentHover(false)} onScroll={() => handleFontSizeChange()}>
                <Typography ref={aboutRef} sx={{padding: '15px', fontSize: 18}}>
                    I started coding in 2020 learning Java in my freetime, after about a year of self-teaching myself Java I started to get interested in web development. I did some research and thought why not attend a coding bootcamp. I attended Code Immeresives where I leaned the MERN Stack and AWS deployment.
                    <br /> 
                    <br /> 
                    My main focus right now is getting some experience under my belt, whether that be as a Full Stack Devoloper, or into something more specialized. In my free time I enjoy creating projects and challenging myself to learn more about web development.
                    <br />
                    <br /> 
                    When I'm not coding, I'm usually playing video games, hunting, or enjoying nature at my camp. If you would like to contact me please send me an email at swarnock13662@gmail.com.
                </Typography>
                <Divider orientation="horizontal" sx={{bgcolor: 'white', width: '65%'}}/>
                <ExperienceContainer ref={experienceRef}>
                    {renderJobs}
                </ExperienceContainer>
                <Divider orientation="horizontal" sx={{bgcolor: 'white', width: '65%', marginTop: '25px'}}/>
                <EducationContainer >
                    <Box ref={educationRef} sx={{marginLeft: '35px'}}>
                        <Typography variant="h5">Code Immersives Boot-Camp</Typography>
                        <Typography variant="h5" sx={{marginTop: '20px'}}>AWS Cloud Practitioner Certified</Typography>
                    </Box>
                </EducationContainer>
                <Box sx={{alignSelf: 'start', marginLeft: '40px', marginTop: '10px', display: 'flex', alignItems: 'center', "&:hover": {cursor: 'pointer'}}} onClick={() => {window.open(resume)}}>
                        <Tooltip placement="bottom" title='Open Résumé'>
                            <Typography variant="h6">View Full Résumé</Typography>
                        </Tooltip>
                        <ArrowForwardIcon sx={{marginLeft: '10px'}}/>
                </Box>
                <Divider orientation="horizontal" sx={{bgcolor: 'white', width: '65%', marginTop: '25px'}}/>
                <ProjectContainer ref={projectRef}>
                    {renderProjects}
                </ProjectContainer>
            </RightContainer>
        </HomeContainer>
    )
}
