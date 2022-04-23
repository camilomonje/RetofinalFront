import Home from './components/Pages/Home'

import { ThemeProvider} from '@mui/material/styles';
import { theme } from './components/theme/theme';
import { ContainerForm } from './components/Forms/ContainerForm';


function App() {
  return (
    <ThemeProvider theme={theme} >
      <Home />
      <ContainerForm />
    </ThemeProvider>
    
  );
}

export default App;
