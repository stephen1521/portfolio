import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub'
import { Box, Tooltip } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'


export default function BasicCard({name, desciption, urlGit, urlApp}) {

    return (
        <Card sx={{ width: '90%', marginBottom: '20px'}}>
            <CardContent>
                    <Box sx={{display: 'flex', "&:hover": {cursor: 'pointer'}}}>
                        <Tooltip placement='top' title="View Application" onClick={() => window.open(urlApp)}>  
                            <Typography variant="h5">
                                {name}
                            </Typography>
                        </Tooltip> 
                        <ArrowOutwardIcon sx={{marginLeft: '10px'}}/>
                    </Box>
            <Typography variant="body2" sx={{marginTop: '15px'}}>
                {desciption}
            </Typography>
            </CardContent>
            <CardActions>
                <Tooltip placement='bottom' title='View Github Repository' sx={{marginLeft: '10px', "&:hover": {cursor: 'pointer'}}}>
                    <GitHubIcon onClick={() => window.open(urlGit)} />
                </Tooltip>
            </CardActions>
        </Card>
    );
}


