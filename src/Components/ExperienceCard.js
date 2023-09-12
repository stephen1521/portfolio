import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function BasicCard({start, end, jobTitle, jobPosition, description}) {
  return (
    <Card sx={{ width: '90%', backgroundColor: 'transparent', color: 'white', display: 'flex' }}>
      <CardContent sx={{width: '40%'}}>
        <Typography sx={{ fontSize: 18 }}>
          {start} - {end}
        </Typography>
      </CardContent>
      <CardContent sx={{display: 'flex', flexDirection: 'column', width: '130%'}}>
        <Typography sx={{fontWeight: 'bold', fontSize: 22}}>{jobTitle}</Typography>
        <Typography sx={{fontSize: 18, paddingTop: '2%'}}>{jobPosition}</Typography>
        <Typography sx={{fontSize: 18, paddingTop: '2%'}}>{description}</Typography>
      </CardContent>
    </Card>
  );
}