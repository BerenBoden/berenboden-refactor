import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';
import Default from './pages/default/Default';
import Project from './components/project/Project';
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/:project_id" component={Project}/>
        <Route component={Default} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;