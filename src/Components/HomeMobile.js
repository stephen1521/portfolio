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
                    <Link component='a' href={"mailto:swarnock13662@gmail.com"} sx={{fontSize: 16, fontWeight: 'bold', color: 'white', display: 'flex', }} underline="hover">      
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
