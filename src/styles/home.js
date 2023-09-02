import { Box, backdropClasses } from "@mui/material"
import { styled } from '@mui/material/styles'

export const HomeContainer = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'row',
    height: '90vh',
    padding: '0px 0px',
    margin: '2% 12% 12%',
    background: 'gray'
}))

export const LeftContainer = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'start',
    flexDirection: 'column',
    width: '50%',
    height: '95%',
    background: 'white',
    margin: '25px 25px 25px'
}))

export const RightContainer = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '50%',
    height: '95%',
    background: 'white',
    margin: '25px 25px 25px'
}))

export const AppBarContainer = styled(Box)(() => ({
    display: 'flex',
    marginTop: '15%',
    flexDirection: 'column',
    marginLeft: '10px'
}))


