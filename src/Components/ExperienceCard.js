import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function BasicCard({start, end, jobTitle, jobPosition, description}) {
  return (
    <Card sx={{ width: '90%', backgroundColor: 'transparent', color: 'white', display: 'flex' }}>
      <CardContent sx={{width: '220px'}}>
        <Typography sx={{ fontSize: 16 }}>
          {start} - {end}
        </Typography>
      </CardContent>
      <CardContent sx={{display: 'flex', flexDirection: 'column'}}>
        <Typography sx={{fontWeight: 'bold', fontSize: 18}}>{jobTitle}</Typography>
        <Typography sx={{marginTop: '4px'}}>{jobPosition}</Typography>
        <Typography sx={{marginTop: '15px'}}>{description}</Typography>
      </CardContent>
    </Card>
  );
}