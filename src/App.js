import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import MovieDetails from './pages/MovieDetails';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import './App.css';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={ MovieList } />
          <Route path="/movies/new" component={ NewMovie } />
          <Route exact path="/movies/:id" component={ MovieDetails } />
          <Route path="/movies/:id/edit" component={ EditMovie } />
          <Route path="" component={ NotFound } />
        </Switch>
      </div>

    );
  }
}

export default App;
