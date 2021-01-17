import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import GameDetail from "./pages/GameDetail/GameDetail";
import Games from "./pages/GameBuilder/GameBuilder";
import ErrorPage from "./pages/ErrorPage";
import ThemeContext, { themes } from "./theme-context";
const queryClient = new QueryClient();

function App() {
  return (
    <ThemeContext.Provider value={themes}>
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
    </ThemeContext.Provider>
  );
}

export default App;
