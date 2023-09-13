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

export default function Home({projects, jobs, aboutRef, educationRef, experienceRef, projectRef }){
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

    const renderProjects = projects.map((project, index) => (
        <ProjectCard key={index} name={project.name} desciption={project.description} urlGit={project.urlGit} urlApp={project.urlApp} skills={project.skills}/>
    ))

    const renderJobs = jobs.map((job, index) => (
        <ExperienceCard key={index} start={job.start} end={job.end} jobTitle={job.jobTitle} jobPosition={job.jobPosition} description={job.description}/>
    ))

    return (
        <HomeContainer >
            <LeftContainer >
                <Box>
                    <Typography variant="h2">Stephen Warnock</Typography>
                    <Typography variant="h4" sx={{padding: '1%'}}>Full Stack Developer</Typography>
                    <Typography sx={{padding: '1%', fontSize: 18}}>I build Full Stack Applications using the MERN Stack.</Typography>
                    <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
                        <Typography sx={{ padding: '1%', fontSize: 18, fontWeight: 'bold'}}>Get in touch</Typography>
                            <Link component='a' href={"mailto:swarnock13662@gmail.com"} sx={{fontSize: 18, fontWeight: 'bold', color: 'white', display: 'flex'  }} underline="hover">      
                                <SendIcon fontSize="medium" sx={{padding: '1%'}}/>
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
                <Typography ref={aboutRef} sx={{padding: '2%', fontSize: 18}}>
                    Hello, I am an enthusiastic Full Stack Developer who embarked on a coding journey through self-taught Java before formal education at Code Immersives. With a certificate in Full Stack Development and AWS Cloud Practitioner certification, I'm eager to make my mark in the tech world.
                    <br /> 
                    <br /> 
                    Despite my limited industry experience, I've created compelling projects, including two MERN full-stack applications—an e-commerce platform and a project management tool. I've also crafted a classic Tetris clone using vanilla HTML, CSS, and JavaScript. Explore my portfolio for more.
                    <br />
                    <br /> 
                    I'm passionate about joining a dynamic team of like-minded individuals committed to lifelong learning and innovation in web development. When I'm not coding, I enjoy video games, hunting, and camp life, which inspire my work and provide balance.
                    <br />
                    <br />
                    I am eager to connect with fellow developers, mentors, or anyone interested in web development. Reach me at swarnock13662@gmail.com or connect on LinkedIn. Thank you for visiting my portfolio. Let's embark on this exciting journey of growth and innovation together.
                </Typography>
                <Divider orientation="horizontal" sx={{bgcolor: 'white', width: '65%'}}/>
                <ExperienceContainer ref={experienceRef} sx={{padding: '2%'}}>
                    {renderJobs}
                </ExperienceContainer>
                <Divider orientation="horizontal" sx={{bgcolor: 'white', width: '65%', }}/>
                <EducationContainer sx={{padding: '2%'}}>
                    <Box ref={educationRef} sx={{padding: '2% 5%'}}>
                        <Typography variant="h5">Code Immersives Boot Camp</Typography>
                        <Typography variant="h5" sx={{paddingTop: '2%'}}>AWS Cloud Practitioner Certified</Typography>
                    </Box>
                </EducationContainer>
                <Box sx={{alignSelf: 'start', padding:'2% 5%', display: 'flex', alignItems: 'center', "&:hover": {cursor: 'pointer'}}} onClick={() => {window.open(resume)}}>
                    <Link component= 'button' variant= "h5" sx={{color: 'white'}} underline="hover">View Full Résumé</Link>
                    <ArrowForwardIcon />
                </Box>
                <Divider orientation="horizontal" sx={{bgcolor: 'white', width: '65%',}}/>
                <ProjectContainer sx={{padding: '2%'}} ref={projectRef}>
                    {renderProjects}
                </ProjectContainer>
            </RightContainer>
        </HomeContainer>
    )
}
