import { Divider, Drawer, List, ListItemButton, ListItemText } from '@mui/material'

export default function AppDrawer({openDrawer, setOpenDrawer, aboutRef, educationRef, experienceRef, projectRef}){

    const handleClick = (ref) => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
        setOpenDrawer(false);
    }

    return (
        <Drawer open={openDrawer} PaperProps={{
            sx:{
                backgroundColor:'black',
                width: '140px'
            }
        }}
        onClose={ () => setOpenDrawer(false)}> 
            <List>
                <ListItemButton onClick={() => handleClick(aboutRef)}>
                    <ListItemText sx={{color: 'white'}}>About Me</ListItemText>
                </ListItemButton>
                <Divider variant='middle' sx={{bgcolor: 'white'}}/>
                <ListItemButton onClick={() => handleClick(experienceRef)}>
                    <ListItemText sx={{color: 'white'}}>Experience</ListItemText>
                </ListItemButton>
                <Divider variant='middle' sx={{bgcolor: 'white'}}/>
                <ListItemButton onClick={() => handleClick(educationRef)}>
                    <ListItemText sx={{color: 'white'}}>Education</ListItemText>
                </ListItemButton>
                <Divider variant='middle' sx={{bgcolor: 'white'}}/>
                <ListItemButton onClick={() => handleClick(projectRef)}>
                    <ListItemText sx={{color: 'white'}}>Projects</ListItemText>
                </ListItemButton>
                <Divider variant='middle' sx={{bgcolor: 'white'}}/>
            </List>
        </Drawer>
    )
}