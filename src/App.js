import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavBar from './Components/Navbar';
import Home from './Components/Home';
import ProductList from './Components/ProductList';
import NotFound from './Components/NotFound';

function App() {
  return (
    <Router>
      <div>
      <NavBar />
      <Switch>
      <Route exact path='/' >
          <Home/> 
        </Route>
        <Route path='/products/:categoryName' >
          <ProductList/>
        </Route>
        <Route path='/not-found' >
          <NotFound/>
        </Route>
      </Switch>  
    </div>
    </Router>
    
  );
}

export default App;
