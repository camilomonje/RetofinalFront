import Home from './components/Pages/Home'

import { ThemeProvider} from '@mui/material/styles';
import { theme } from './components/theme/theme';
import { ContainerForm } from './components/Forms/ContainerForm';
import { Provider } from 'react-redux';
import store from './store'


function App() {
  return (
    <Provider store={store} >
    <ThemeProvider theme={theme} >
      <Home />
      <ContainerForm />
    </ThemeProvider>
    </Provider>
  );
}

export default App;
