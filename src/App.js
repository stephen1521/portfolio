import { useMediaQuery } from '@mui/material';
import { useTheme } from "@mui/material/styles";
import './App.css';
import Home from './Components/Home';
import HomeMobile from './Components/HomeMobile';

function App() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'))
    return (
        <>
        {matches ? <HomeMobile /> : <Home />}
        </>
    )
}

export default App;
