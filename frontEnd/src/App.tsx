import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import NewDelivery from "./pages/NewDelivery/NewDelivery";
import DeliveryDetails from "./pages/DeliveryDetails/DeliveryDetails";
import LoadingPage from "./pages/LoadingPage/LoadingPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/newDelivery"} component={NewDelivery} />
        <Route exact path={"/deliveryDetails/:id/:travelMode"} component={DeliveryDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
