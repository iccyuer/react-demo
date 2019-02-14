import React from 'react'
import { Route, IndexRedirect } from 'react-router'

// import App from '../App'
// import Nav from '../components/nav'
import Home from '../components/home'
import Discover from '../components/discover'
import Me from '../components/me'
import notFountPage from '../components/notFountPage'

export default (
  <Route path="/">
    <IndexRedirect to="home"></IndexRedirect>
    <Route path="home" component={Home}></Route>
    <Route path="discover" component={Discover}></Route>
    <Route path="me" component={Me}></Route>
    <Route path="*" component={notFountPage}></Route>
  </Route>
);