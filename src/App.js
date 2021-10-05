import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Courses from './Components/Courses/Courses';
import About from './Components/About/About';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NotFound from './Components/NotFound/NotFound';
import Header from './Components/Header/Header';
import CourseDetail from './Components/CourseDetail/CourseDetail';
import CourseReview from './Components/CourseReview/CourseReview';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">

      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/courses">
            <Courses></Courses>
          </Route>
          <Route path="/course/:courseId">
            <CourseDetail></CourseDetail>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route path="/review">
            <CourseReview></CourseReview>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;
