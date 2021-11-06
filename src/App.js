import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { GlobalStyle } from './styled-components/globalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' exact component={Login} />
        <Route path='/register' exact component={Register} />
      </Switch>
    </>
  );
}

export default App;
