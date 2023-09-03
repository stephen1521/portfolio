import { Box } from "@mui/material"
import { styled } from '@mui/material/styles'

export const HomeContainer = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'row',
    height: '90vh',
    padding: '0px 0px',
    margin: '2% 12% 12%'
}))

export const LeftContainer = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'start',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '50%',
    height: '95%',
    margin: '25px 25px 25px',
    color: 'white'

}))

export const RightContainer = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '50%',
    height: '95%',
    margin: '25px 25px 25px',
    overflow: 'auto',
    color: 'white',
    scrollbarWidth: 'none',
    '&::-webkit-scrollbar': {
        display: 'none',
    },
    '&-ms-overflow-style': 'none',
}))

export const AppBarContainer = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '10px'
}))

export const ProjectContainer = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    marginTop: '15%',
    width: '100%',
    alignItems: 'center'
}))

export const ExperienceContainer = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    marginTop: '15%',
    width: '100%',
    alignItems: 'center'
}))

export const EducationContainer = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    marginTop: '30px',
    width: '100%',
    marginLeft: '75px'
}))
