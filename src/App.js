import React from 'react';

import NavBar from './components/NavBar'
import Homepage from './components/Homepage';
import CategoryPage from './components/CategoryPage';
import ItemList from './components/ItemList';
import {Switch,Route} from 'react-router-dom';




import './styles.css'







function App() {

 

  return (
    
    <div>
      <h2>E-SHOP</h2>
      <NavBar />

      <Switch >
      <Route path="/CategoryPage" component={CategoryPage} />
    <Route path="/" exact component={Homepage} />
    <Route path="/items" component={ItemList} />
    
      </Switch>
      
      
     
      
    </div>
  )
    
  }

export default App;
