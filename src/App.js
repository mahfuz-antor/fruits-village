import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Admin from './Components/Admin/Admin';
import Login from './Components/Login/Login';
import Orders from './Components/Orders/Orders';
import Header from './Components/Header/Header';
import { createContext, useState } from 'react';
import Shipment from './Components/Shipment/Shipment';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
// import FruitDetails from './Components/FruitDetail/FruitDetail'
import Management from './Components/Management/Management';
import OrderDetails from './Components/OrderDetails/OrderDetails';
import AddFruit from './Components/AddFruit/AddFruit';

export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
    <h3>Email: {loggedInUser.email}</h3>
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/header">
          <Header></Header>
        </Route>
        <PrivateRoute path="/addFruit">
          <AddFruit></AddFruit>
        </PrivateRoute>
        <PrivateRoute path="/admin">
          <Admin></Admin>
        </PrivateRoute>
        <PrivateRoute path="/orders">
          <Orders></Orders>
        </PrivateRoute>
        <Route path="/login">
          <Login></Login>
        </Route>
        <PrivateRoute path="/orderDetails/:id">
          <OrderDetails></OrderDetails>
        </PrivateRoute>
        <Route path="/management">
          <Management></Management>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
