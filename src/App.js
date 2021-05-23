import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Goldplus from './components/goldplus/Goldplus';
import ScrollToTop from './components/ScrollToTop';
import OxpanService from './components/OxpanService/OxpanService';
import Contact from './components/contact';
import Career from './components/company/career';

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
      <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Header} />
          {/* <Route path="/goldplus" component={Goldplus}/> */}
          <Route path="/product/:topic" component={Goldplus}/>
          <Route path="/service/:id" exact component={OxpanService}/>
          <Route path="/contact" exact component={Contact}/>
          <Route path="/career" exact component={Career}/>
        </Switch>
        <Footer />
      </Router> 
    </div>
  );
}

export default App;
