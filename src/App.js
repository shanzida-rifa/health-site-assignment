import './App.css';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import About from './Components/About/About';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NotFound from './Components/NotFound/NotFound';
import Header from './Components/Header/Header';
import ServiceReview from './Components/ServiceReview/ServiceReview';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">

      <AuthProvider>
        <Router>
          <Header></Header>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>

            <Route exact path="/about">
              <About></About>
            </Route>
            <Route path="/review">
              <ServiceReview></ServiceReview>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>


    </div>
  );
}

export default App;
