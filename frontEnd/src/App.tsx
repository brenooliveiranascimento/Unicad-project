import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import NewDelivery from './pages/NewDelivery';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'} component={Home} />
        <Route exact path={'/newDelivery'} component={NewDelivery} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
