import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import SearchBooks from "./components/SearchBooks";
import SavedBooks from "./components/SavedBooks";
import Navbar from "./components/Navbar";
import Signup from "./pages/SignupForm";
import Login from "./pages/LoginForm";
import NoMatch from "./pages/noMatch";

const httpLink = createHttpLink({
  uri: "/graphql",
});
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar />
          <Switch>
            <Route exact path="/" component={SearchBooks} />
            <Route path="/login" element={Login} />
            <Route path="/signup" element={Signup} />
            <Route exact path="/saved" component={SavedBooks} />
            <Route path="*" element={NoMatch} />
          </Switch>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
