import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub'
import { Box, Tooltip, IconButton, Link } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { SkillBox } from '../styles/projectCard'


export default function ProjectCard({name, desciption, urlGit, urlApp, skills}) {
    // console.log(skills)
    const renderSkills = skills.map((skill, index) => (
        <SkillBox key={index}>{skill}</SkillBox>
    ))
    
    return (
        <Card sx={{ width: '90%', backgroundColor: 'transparent', color: 'white'}}>
            <CardContent>   
                <Link component='button' variant='h5' onClick={() => window.open(urlApp)} sx={{color: 'white'}} underline='hover'>
                    {name}
                    <ArrowOutwardIcon />
                </Link>
            <Typography sx={{fontSize: 18, paddingTop: '2%'}}>
                {desciption}
            </Typography>
            </CardContent>
            <CardContent>
                <Box display={'flex'} flexWrap={'wrap'} gap={'10px 8px'}>
                    {renderSkills}
                </Box>
            </CardContent>
            <CardActions>
                <Tooltip placement='bottom' title='View Github Repository'>
                    <IconButton sx={{color: 'white'}} size='large' onClick={() => window.open(urlGit)}>
                        <GitHubIcon fontSize='inherit' />
                    </IconButton>
                </Tooltip>
            </CardActions>
        </Card>
    );
}


