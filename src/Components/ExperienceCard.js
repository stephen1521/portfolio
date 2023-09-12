import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useMediaQuery } from '@mui/material';
import { useTheme } from "@mui/material/styles";


export default function BasicCard({start, end, jobTitle, jobPosition, description}) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('lg'))

  return (
    <Card sx={{ width: '90%', backgroundColor: 'transparent', color: 'white', display: 'flex' }}>
      <CardContent sx={{width: '40%'}}>
        {!matches && <Typography sx={{ fontSize: 18 }}>
          {start} - {end}
        </Typography>}
        {matches && <Typography sx={{ fontSize: 16 }}>
          {start} - {end}
        </Typography>}
      </CardContent>
      <CardContent sx={{display: 'flex', flexDirection: 'column', width: '130%'}}>
        {!matches &&
          <>
            <Typography sx={{fontWeight: 'bold', fontSize: 22}}>{jobTitle}</Typography>
            <Typography sx={{fontSize: 18, paddingTop: '2%'}}>{jobPosition}</Typography>
            <Typography sx={{fontSize: 18, paddingTop: '2%'}}>{description}</Typography>
          </>
        }
        {matches &&
          <>
            <Typography sx={{fontWeight: 'bold', fontSize: 18}}>{jobTitle}</Typography>
            <Typography sx={{fontSize: 17, paddingTop: '3%'}}>{jobPosition}</Typography>
            <Typography sx={{fontSize: 16, paddingTop: '3%'}}>{description}</Typography>
          </>
        }
      </CardContent>
    </Card>
  );
}