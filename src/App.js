import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Gallery from './components/Gallery/Gallery';
import Home from './components/Home/Home';
import Register from './components/Home/Register/Register';
import MoreService from './components/MoreService/MoreService';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import Login from './components/Shared/Login/Login';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/service">
              <MoreService></MoreService>
            </PrivateRoute>
            <PrivateRoute exact path="/serviceDetails/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <PrivateRoute exact path="/gallery">
              <Gallery></Gallery>
            </PrivateRoute>
            <PrivateRoute exact path="/blog">
              <Blog></Blog>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
