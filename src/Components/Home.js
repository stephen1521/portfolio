import { HomeContainer, LeftContainer, RightContainer, AppBarContainer, ProjectContainer, ExperienceContainer, EducationContainer } from "../styles/home"
import { Typography, ListItemButton, ListItemText, Divider, Box, Tooltip } from '@mui/material'
import ProjectCard from './ProjectCard'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ExperienceCard from './ExperienceCard'
import resume from '../static/resume.pdf'
import { useRef, useState } from "react";
import { useEffect } from "react";

export default function Home(){
    const aboutRef = useRef(null);
    const experienceRef = useRef(null);
    const educationRef = useRef(null);
    const projectRef = useRef(null);
    const rightRef = useRef(null);
    const [contentHover, setContentHover] = useState(false);

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
    })



    return (
        <HomeContainer>
            <LeftContainer>
                <Box>
                    <Typography variant="h2" sx={{padding: '10px'}}>Stephen Warnock</Typography>
                    <Typography variant="h4" sx={{padding: '10px'}}>Full Stack Devoloper</Typography>
                    <Typography sx={{padding: '10px', fontSize: 18}}>I build Full Stack Applications using the MERN Stack.</Typography>
                </Box>
                <AppBarContainer>
                        <ListItemButton onClick={() => handleClick(aboutRef)}>
                            <ListItemText primaryTypographyProps={{fontSize: 18}}>About Me</ListItemText>
                        </ListItemButton>
                        <Divider orientation="horizontal" sx={{bgcolor: 'white'}}/>
                        <ListItemButton onClick={() => handleClick(experienceRef)}>
                            <ListItemText primaryTypographyProps={{fontSize: 18}}>Experience</ListItemText>
                        </ListItemButton>
                        <Divider orientation="horizontal" sx={{bgcolor: 'white'}}/>
                        <ListItemButton onClick={() => handleClick(educationRef)}>
                            <ListItemText primaryTypographyProps={{fontSize: 18}}>Education</ListItemText>
                        </ListItemButton>
                        <Divider orientation="horizontal" sx={{bgcolor: 'white'}}/>
                        <ListItemButton onClick={() => handleClick(projectRef)}>
                            <ListItemText primaryTypographyProps={{fontSize: 18}}>Projects</ListItemText>
                        </ListItemButton>
                        <Divider orientation="horizontal" sx={{bgcolor: 'white'}}/>
                </AppBarContainer>
                <Box>
                    <Tooltip sx={{marginLeft: '20px', "&:hover": {cursor: 'pointer'}}} placement="top" title='View My Github'>
                        <GitHubIcon onClick={() => window.open('https://github.com/stephen1521')}/>
                    </Tooltip>
                    <Tooltip sx={{marginLeft: '10px', "&:hover": {cursor: 'pointer'}}} placement="top" title='View My LinkedIn'>
                        <LinkedInIcon />
                    </Tooltip>
                </Box>
            </LeftContainer>
            <RightContainer ref={rightRef} onMouseEnter={() => setContentHover(true)} onMouseLeave={() => setContentHover(false)}>
                <Typography ref={aboutRef} sx={{padding: '15px', fontSize: 18}}>
                    I started coding in 2020 learning Java in my freetime, after about a year of self-teaching myself Java I stared to get interested in web development. I started to do some research and thought why not attend a coding bootcamp. I attended Code Immeresives where I leaned the MERN Stack and AWS deployment.
                    <br /> 
                    <br /> 
                    My main focus right now is getting some experience under my belt, wether that be as a Full Stack Devoloper, or into something more specialized. In my free time I enjoy creating projects and challenging myself to learn more about web development than just the MERN stack.
                    <br />
                    <br /> 
                    When I'm not coding, I'm usually playing video games, hunting, or enjoying nature at my camp. If you would like to contact me please send me an email at swarnock13662@gmail.com.
                </Typography>
                <ExperienceContainer ref={experienceRef}>
                    <ExperienceCard start={'2021'} end={'Present'} jobTitle={'MedScope'} jobPosition={'Medical Currier'} description={'I deliver medical life saving devices to people who need them, I explain to them how to use and test them. The work is done on a contract bases with little oversight.'}/>
                    <ExperienceCard start={'2014'} end={'2019'} jobTitle={'U.S. Army'} jobPosition={'Military Police'} description={'I joined the Military fresh out of High School, I served for 5 years as a Military Police Officer. My duties uncludes Law Enforcement and Base Security.'}/>
                </ExperienceContainer>
                <EducationContainer ref={educationRef}>
                    <Typography variant="h5">Code Immersives Boot-Camp</Typography>
                    <Typography variant="h5" sx={{marginTop: '20px'}}>AWS Cloud Practitioner Certified</Typography>
                </EducationContainer>
                <Box sx={{alignSelf: 'start', marginLeft: '40px', marginTop: '45px', display: 'flex', alignItems: 'center', "&:hover": {cursor: 'pointer'}}} onClick={() => {window.open(resume)}}>
                        <Tooltip placement="bottom" title='Open Résumé'>
                            <Typography variant="h6">View Full Résumé</Typography>
                        </Tooltip>
                        <ArrowForwardIcon sx={{marginLeft: '10px'}}/>
                    </Box>
                <ProjectContainer ref={projectRef}>
                    <ProjectCard name={'Ecommerce'} desciption={'An Ecommerce site selling clothes, using the MERN Stack and Material UI. The purpose of this project was to learn Material UI and Responsive Design. Some features include user authenticationa and authorization, cart, and wishlist.The project is deployed through AWS.'} urlGit={'https://github.com/stephen1521/ecommerce'} urlApp={''} />
                    <ProjectCard name={'Project Management Application'} desciption={'I created a content management system focused on projects. This was my first Full Stack Application, so the whole application was a big learning experience. I used the MERN Stack and Bootstrap. Features include the ability to create, assign, manage tasks assigned to users and more. The project is deployed through AWS.'} urlGit={'https://github.com/stephen1521/project-management_front-end'} urlApp={''}/>
                    <ProjectCard name={'Tetris'} desciption={'This was my first project I created using HTML, CSS, and JavaScript. It is a Tetris clone, with features like fast drop, hard drop, levels, and score tracking. The app is deployed through github pages.'} urlGit={'https://github.com/stephen1521/final-project'} urlApp={'https://stephen1521.github.io/final-project/'}/>
                </ProjectContainer>
            </RightContainer>
        </HomeContainer>
    )
}