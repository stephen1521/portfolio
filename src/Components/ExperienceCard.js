import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function BasicCard({start, end, jobTitle, jobPosition, description}) {
  return (
    <Card sx={{ width: '90%', backgroundColor: 'transparent', color: 'white', display: 'flex' }}>
      <CardContent sx={{width: '300px'}}>
        <Typography sx={{ fontSize: 18 }}>
          {start} - {end}
        </Typography>
      </CardContent>
      <CardContent sx={{display: 'flex', flexDirection: 'column', width: '1000px'}}>
        <Typography sx={{fontWeight: 'bold', fontSize: 22}}>{jobTitle}</Typography>
        <Typography sx={{marginTop: '4px', fontSize: 18}}>{jobPosition}</Typography>
        <Typography sx={{marginTop: '15px', fontSize: 18}}>{description}</Typography>
      </CardContent>
    </Card>
  );
}