import { HomeContainer, LeftContainer, RightContainer, AppBarContainer, ProjectContainer, ExperienceContainer, EducationContainer } from "../styles/home"
import { Typography, ListItemButton, ListItemText, Divider, Box, Tooltip } from '@mui/material'
import ProjectCard from './ProjectCard'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ExperienceCard from './ExperienceCard'
import resume from '../static/resume.pdf'
import { useRef } from "react";

export default function Home(){
    const aboutRef = useRef(null);
    const experienceRef = useRef(null);
    const educationRef = useRef(null);
    const projectRef = useRef(null);

    const handleClick = (ref) => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <HomeContainer>
            <LeftContainer>
                <Box>
                    <Typography variant="h2" sx={{padding: '10px'}}>Stephen Warnock</Typography>
                    <Typography variant="h4" sx={{padding: '10px'}}>Full Stack Devoloper</Typography>
                    <Typography variant="subtitle" sx={{padding: '10px'}}>I build Full Stack Applications using the MERN Stack.</Typography>
                </Box>
                <AppBarContainer>
                        <ListItemButton onClick={() => handleClick(aboutRef)}>
                            <ListItemText>About Me</ListItemText>
                        </ListItemButton>
                        <Divider orientation="horizontal" sx={{bgcolor: 'white'}}/>
                        <ListItemButton onClick={() => handleClick(experienceRef)}>
                            <ListItemText>Experience</ListItemText>
                        </ListItemButton>
                        <Divider orientation="horizontal" sx={{bgcolor: 'white'}}/>
                        <ListItemButton onClick={() => handleClick(educationRef)}>
                            <ListItemText>Education</ListItemText>
                        </ListItemButton>
                        <Divider orientation="horizontal" sx={{bgcolor: 'white'}}/>
                        <ListItemButton onClick={() => handleClick(projectRef)}>
                            <ListItemText>Projects</ListItemText>
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
            <RightContainer >
                <Typography ref={aboutRef}  variant="subtitle" sx={{padding: '15px'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    <br /> 
                    <br /> 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    <br />
                    <br /> 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Typography>
                <ExperienceContainer ref={experienceRef}>
                    <ExperienceCard start={'2021'} end={'Present'} jobTitle={'MedScope'} jobPosition={'Medical Currier'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
                    <ExperienceCard start={'2014'} end={'2019'} jobTitle={'U.S. Army'} jobPosition={'Military Police'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
                </ExperienceContainer>
                <EducationContainer ref={educationRef}>
                    <Typography variant="h5">Code Immersives Boot-Camp</Typography>
                    <Typography variant="h5" sx={{marginTop: '20px'}}>AWS Cloud Practitioner Certified</Typography>
                </EducationContainer>
                <Box sx={{alignSelf: 'start', marginLeft: '50px', marginTop: '45px', display: 'flex', alignItems: 'center', "&:hover": {cursor: 'pointer'}}} onClick={() => {window.open(resume)}}>
                        <Tooltip placement="bottom" title='Open Résumé'>
                            <Typography variant="h6">View Full Résumé</Typography>
                        </Tooltip>
                        <ArrowForwardIcon sx={{marginLeft: '10px'}}/>
                    </Box>
                <ProjectContainer ref={projectRef}>
                    <ProjectCard name={'Ecommerce'} desciption={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} urlGit={'https://github.com/stephen1521/ecommerce'} urlApp={''} />
                    <ProjectCard name={'Project Management Application'} desciption={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} urlGit={'https://github.com/stephen1521/project-management_front-end'} urlApp={''}/>
                    <ProjectCard name={'Tetris'} desciption={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} urlGit={'https://github.com/stephen1521/final-project'} urlApp={'https://stephen1521.github.io/final-project/'}/>
                </ProjectContainer>
            </RightContainer>
        </HomeContainer>
    )
}