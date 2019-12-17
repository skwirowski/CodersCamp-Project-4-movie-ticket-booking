import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import routes from 'static/routes';
import Homepage from 'routes/Homepage';
import Details from 'routes/Details';
import DateSelection from 'routes/DateSelection';
import SeatingChoice from 'routes/SeatingChoice';
import Summary from 'routes/Summary';
import Ticket from 'routes/Ticket';

const App = () => {
  // destructure object keys
  const {
    homepage,
    details,
    dateSelection,
    seatingChoice,
    summary,
    ticket,
  } = routes;

  return (
    <div className="main-container">
      <Router>
        <Switch>
          <Route exact path={homepage}>
            <Homepage />
          </Route>
          <Route exact path={details(':id')}>
            <Details />
          </Route>
          <Route exact path={dateSelection(':id')}>
            <DateSelection />
          </Route>
          <Route exact path={seatingChoice(':id')}>
            <SeatingChoice />
          </Route>
          <Route exact path={summary(':id')}>
            <Summary />
          </Route>
          <Route exact path={ticket(':id')}>
            <Ticket />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
