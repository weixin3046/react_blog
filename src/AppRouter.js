import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Index from './Pages/Index'
import Login from './Pages/Login'
import Register from './Pages/Register'

function AppRouter() {
  return (
    <Router>
        <Route path="/" exact component={Index} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
    </Router>
  );
}
export default AppRouter;
