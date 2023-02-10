import styles from './App.module.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import NewDelivery from './pages/NewDelivery/NewDelivery';
import DeliveryDetails from './pages/DeliveryDetails/DeliveryDetails';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <main className={styles.main_container}>
      <Sidebar/>
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route exact path={'/newDelivery'} component={NewDelivery} />
          <Route exact path={'/deliveryDetails'} component={DeliveryDetails} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
