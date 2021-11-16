import React, {Component} from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Profile from './pages/profile';
import Home from './pages/home';
import Cases from './pages/casesInterface';
import { Fragment } from 'react';

class App extends Component{
  render(){
    return (
        <Fragment>
          <BrowserRouter>
          <Routes>
            <Route path = '/' element={<Home />}></Route>
            <Route path = '/cases' element={<Cases/>}></Route>
            <Route path = '/profile' element={<Profile/>}></Route>
          </Routes>
          </BrowserRouter>
        </Fragment>
    )
  }
}
export default App;
