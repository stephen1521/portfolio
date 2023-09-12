import { Box, Typography, Link, IconButton, Divider } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { MobileHomeContainer, ProjectContainer, EducationContainer, ExperienceContainer} from "../styles/home";
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import resume from '../static/resume.pdf'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ProjectCard from './ProjectCard'
import ExperienceCard from './ExperienceCard'
import MenuIcon from '@mui/icons-material/Menu'

export default function HomeMobile ({projects, jobs, setOpenDrawer, aboutRef, educationRef, experienceRef, projectRef}){
    
    const renderProjects = projects.map((project, index) => (
        <ProjectCard key={index} name={project.name} desciption={project.description} urlGit={project.urlGit} urlApp={project.urlApp} skills={project.skills}/>
    ))

    const renderJobs = jobs.map((job, index) => (
        <ExperienceCard key={index} start={job.start} end={job.end} jobTitle={job.jobTitle} jobPosition={job.jobPosition} description={job.description}/>
    ))
    
return (
    <MobileHomeContainer >
            <IconButton onClick={() => setOpenDrawer(true)} sx={{display: 'flex', alignSelf: 'end', position: 'fixed', color: 'white'}}>
                <MenuIcon fontSize="medium"/>
            </IconButton>
            <Box display={'flex'} flexDirection={'column'} gap={'15px'}>
                <Typography variant="h4">Stephen Warnock</Typography>
                <Typography variant="h5">Full Stack Developer</Typography>
                <Typography sx={{fontSize: 16}}>I build Full Stack Applications using the MERN Stack.</Typography>
            </Box>
            <Box display={'flex'} flexDirection={'column'} gap={'5px'} justifyContent={'center'}>
                <Typography sx={{fontSize: 16, fontWeight: 'bold'}}>Get in touch</Typography>
                    <Link component='button' href="mailto:swarnock13662@gmail.com" sx={{fontSize: 16, fontWeight: 'bold', color: 'white', display: 'flex', }} underline="hover">      
                        <SendIcon fontSize="medium" sx={{paddingRight: '5px'}}/>
                        swarnock13662@gmail.com
                    </Link>
            </Box>
            <Box display={'flex'}>
                <IconButton sx={{color: 'white'}} size="medium" onClick={() => window.open('https://github.com/stephen1521')}>
                    <GitHubIcon fontSize="inherit" />
                </IconButton>
                <IconButton sx={{color: 'white'}} size="medium">
                    <LinkedInIcon fontSize="inherit"/>
                </IconButton>
            </Box>
            <Typography ref={aboutRef} sx={{fontSize: 16}}>
                    I started coding in 2020 learning Java in my free time, after about a year of self-teaching myself Java. I began to get interested in web development. I did some research and thought why not attend a coding boot camp. I attended Code Immersives where I learned the MERN Stack and AWS deployment.
                    <br /> 
                    <br /> 
                    My main focus right now is getting some experience under my belt, whether that be as a Full Stack Developer, or into something more specialized. In my free time, I enjoy creating projects and challenging myself to learn more about web development.
                    <br />
                    <br /> 
                    When I'm not coding, I'm usually playing video games, hunting, or enjoying nature at my camp. If you would like to contact me, please send me an email at swarnock13662@gmail.com.
            </Typography>
            <Box display={'flex'} justifyContent={'center'} padding={'8%'}>
                <Divider orientation="horizontal" sx={{bgcolor: 'white', width: '65%'}}/>
            </Box>
            <ExperienceContainer ref={experienceRef}>
                {renderJobs}
            </ExperienceContainer>
            <Box display={'flex'} justifyContent={'center'} padding={'8%'}>
                <Divider orientation="horizontal" sx={{bgcolor: 'white', width: '65%'}}/>
            </Box>
            <EducationContainer >
                <Box ref={educationRef} display={'flex'} flexDirection={'column'} gap={'10px'}>
                    <Typography variant="h6">Code Immersives Boot Camp</Typography>
                    <Typography variant="h6">AWS Cloud Practitioner Certified</Typography>
                </Box>
            </EducationContainer>
            <Box sx={{ display: 'flex', alignItems: 'center', "&:hover": {cursor: 'pointer'}}} onClick={() => {window.open(resume)}}>
                <Link component= 'button' variant= "h6" sx={{color: 'white'}} underline="hover">View Full Résumé</Link>
                <ArrowForwardIcon />
            </Box>
            <Box display={'flex'} justifyContent={'center'} padding={'8%'}>
                <Divider orientation="horizontal" sx={{bgcolor: 'white', width: '65%'}}/>
            </Box>
            <ProjectContainer ref={projectRef}>
                {renderProjects}
            </ProjectContainer>
    </MobileHomeContainer>
)

}
