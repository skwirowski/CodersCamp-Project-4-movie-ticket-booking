import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import 'app/style.css';
import routes from 'static/routes';
import moviesThunk from 'redux/thunk/moviesThunk';
import Homepage from 'routes/Homepage';
import Details from 'routes/Details';
import DateSelection from 'routes/DateSelection';
import SeatingChoice from 'routes/SeatingChoice';
import Summary from 'routes/Summary';
import Ticket from 'routes/Ticket';
import Main from 'components/Main';

const App = () => {
  //* Redux operations
  const dispatch = useDispatch();
  const moviesStore = useSelector(state => state.movies);
  //*

  //* destructure object keys
  const {
    homepage,
    details,
    dateSelection,
    seatingChoice,
    summary,
    ticket,
  } = routes;
  const { moviesList, moviesListLoading } = moviesStore;
  //*

  //* Hooks
  const [moviesListState, setMoviesListState] = useState([]);

  useEffect(() => {
    dispatch(moviesThunk());
  }, [dispatch]);

  useEffect(() => {
    if (moviesList.length !== 0) setMoviesListState(moviesList);
  }, [moviesList]);
  //*

  return (
    <div className="container-fluid">
      {moviesListLoading ? (
        <h1>Loading...</h1>
      ) : (
        <Main>
          <Router>
            <Switch>
              <Route exact path={homepage}>
                <Homepage moviesList={moviesListState} />
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
        </Main>
      )}
    </div>
  );
};

export default App;
