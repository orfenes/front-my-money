import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Dashborad from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'

export default props => (
  <Router history={hashHistory}>
    <Route path='/' component={Dashborad} />
    <Route path='/billingCycles' component={BillingCycle} />
    <Redirect from='*' to='/' />
  </Router>
)