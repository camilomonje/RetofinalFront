import { ThemeProvider} from '@mui/material/styles';
import { theme } from './components/theme/theme';
import Navegacion from './components/Navbar/Navegacion';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={ theme } >
      <div className="container">
        <Navegacion/>
        <Outlet/>
      </div>
    </ThemeProvider>
  );
}

export default App;
