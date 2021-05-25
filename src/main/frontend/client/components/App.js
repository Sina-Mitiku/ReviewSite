import React from "react"
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom"
import "regenerator-runtime/runtime"
import TrailsList from "./TrailsList.js"
import NavBar from "./Navbar.js"
const App = props => {
  return (
   <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path = "/">
        <Redirect to="/trails" />
      </Route>
      <Route exact path = "/trails" component = {TrailsList} />
    </Switch>
   </BrowserRouter>
  )
}
export default App