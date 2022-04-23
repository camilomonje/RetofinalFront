import Home from './components/Pages/Home'

import { ThemeProvider} from '@mui/material/styles';
import { theme } from './components/theme/theme';


function App() {
  return (
    <ThemeProvider theme={theme} >
      <Home />
    </ThemeProvider>
    
  );
}

export default App;
