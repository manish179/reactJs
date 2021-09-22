import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Fifth from "./Fifth";
import Signin from "./pages/auth/SIgnin";
import Signup from "./pages/auth/Signup";
import Cart from "./pages/Cart";
import Deals from "./pages/Deals";

import Homepage from "./pages/Homepage";
import Second from "./Second";
import { Third, Fourth } from "./Third";

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/cart" component={Cart}/>
          <Route exact path="/deals" component={Deals}/>

          {/* <Route exact path="/hello" component={Fifth}/>
                <Route exact path="/second" component={Second}/> */}
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
