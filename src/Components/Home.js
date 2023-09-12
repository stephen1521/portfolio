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
                            <Link component='button' href="mailto:swarnock13662@gmail.com" sx={{fontSize: 18, fontWeight: 'bold', color: 'white', display: 'flex'  }} underline="hover">      
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
                    I started coding in 2020 learning Java in my free time, after about a year of self-teaching myself Java. I began to get interested in web development. I did some research and thought why not attend a coding boot camp. I attended Code Immersives where I learned the MERN Stack and AWS deployment.
                    <br /> 
                    <br /> 
                    My main focus right now is getting some experience under my belt, whether that be as a Full Stack Developer, or into something more specialized. In my free time, I enjoy creating projects and challenging myself to learn more about web development.
                    <br />
                    <br /> 
                    When I'm not coding, I'm usually playing video games, hunting, or enjoying nature at my camp. If you would like to contact me, please send me an email at swarnock13662@gmail.com.
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
