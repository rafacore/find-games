import React, { useContext, useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

import GameDetail from "./pages/GameDetail/GameDetail";
import Games from "./pages/GameBuilder/GameBuilder";
import ErrorPage from "./pages/ErrorPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Switch>
          <Route
            name="home"
            path="/"
            render={() => <Redirect to="/games" />}
            exact
          />
          <Route name="info" path="/game/:id" component={GameDetail} exact />
          <Route name="list" path="/games" component={Games} exact />
          <Route name="notfound" path="*" component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
