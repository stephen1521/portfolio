import { HomeContainer, LeftContainer, RightContainer, AppBarContainer } from "../styles/home"
import { Typography, ListItemButton, ListItemText, Divider } from '@mui/material'

export default function Home(){

    return (
        <HomeContainer>
            <LeftContainer>
                <Typography variant="h2" sx={{padding: '10px'}}>Stephen Warnock</Typography>
                <Typography variant="h4" sx={{padding: '10px'}}>Full Stack Devoloper</Typography>
                <Typography variant="subtitle" sx={{padding: '10px'}}>I build Full Stack Applications using the MERN Stack.</Typography>
                <AppBarContainer>
                        <ListItemButton>
                            <ListItemText>About Me</ListItemText>
                        </ListItemButton>
                        <Divider orientation="horizontal" sx={{bgcolor: 'black'}}/>
                        <ListItemButton>
                            <ListItemText>Projects</ListItemText>
                        </ListItemButton>
                        <Divider orientation="horizontal" sx={{bgcolor: 'black'}}/>
                </AppBarContainer>
            </LeftContainer>
            <RightContainer>
                <Typography className="about" variant="subtitle" sx={{padding: '15px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                <Typography variant="subtitle" sx={{padding: '15px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                <Typography variant="subtitle" sx={{padding: '15px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>

            </RightContainer>
        </HomeContainer>
    )
}