import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import NewDelivery from './pages/NewDelivery/NewDelivery';
import DeliveryDetails from './pages/DeliveryDetails/DeliveryDetails';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'} component={Home} />
        <Route exact path={'/newDelivery'} component={NewDelivery} />
        <Route exact path={'/deliveryDetails/:id'} component={DeliveryDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
