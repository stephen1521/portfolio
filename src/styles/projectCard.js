import { Box } from "@mui/material"
import { styled } from '@mui/material/styles'


export const SkillBox = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'white solid 2px',
    borderRadius: '15px',
    backgroundColor: 'black',
    opacity: '0.5',
    padding: '1%',
}))