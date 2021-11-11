import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { theme } from "./constants/theme";
import { ThemeProvider } from "styled-components";

import { BrowserRouter, Redirect, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Homes } from "./pages/homes";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { AppStateProvider } from "./store/AppContext";

const API_URL = "https://fake-api.avantstay.dev/graphql";

const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <AppStateProvider>
          <Header />

          <BrowserRouter>
            <Switch>
              <Route exact path="/homes">
                <Homes />
              </Route>

              <Route exact path="/regions/:regionName">
                <Homes />
              </Route>

              <Redirect to="/homes" />
            </Switch>
          </BrowserRouter>
        </AppStateProvider>
      </ApolloProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
