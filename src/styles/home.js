import { Box } from "@mui/material"
import { styled } from '@mui/material/styles'

export const HomeContainer = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'row',
    height: '90vh',
    padding: '3% 12% 5% 12%'
}))

export const LeftContainer = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'start',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '50%',
    height: '95%',
    color: 'white'
}))

export const RightContainer = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '50%',
    height: '95%',
    overflow: 'auto',
    color: 'white',
    scrollbarWidth: 'none',
    '&::-webkit-scrollbar': {
        display: 'none',
    },
    '&-ms-overflow-style': 'none',
    gap: '5%'
}))

export const AppBarContainer = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    padding: '1%'
}))

export const ProjectContainer = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center'
}))

export const ExperienceContainer = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center'
}))

export const EducationContainer = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
}))

export const MobileHomeContainer = styled(Box)(() => ({
    display: 'flex',
    height: '90vh',
    padding: '5% 8% 1% 5%',
    color: 'white',
    gap: '2%',
    flexFlow: 'column nowrap',
}))

