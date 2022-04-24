import { ThemeProvider} from '@mui/material/styles';
import { theme } from './components/theme/theme';import { ContainerForm } from './components/Forms/ContainerForm';
import { Provider } from 'react-redux';
import store from './store'
import CustomizedDialogs from './components/Forms/Dialog';
import Navegacion from './components/Navbar/Navegacion';
import { Outlet } from "react-router-dom";

function App() {
  return (<Provider store={store} >
    <ThemeProvider theme={ theme } >
      <div className="container">
      <Navegacion/>
        <Outlet/>
      <CustomizedDialogs>
        <ContainerForm />
      </CustomizedDialogs>
      </div>
    </ThemeProvider>
  </Provider>
  );
}

export default App;
