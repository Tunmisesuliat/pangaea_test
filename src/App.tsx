import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import LandingPage from "./pages/LandingPage";

const client = new ApolloClient({
  uri: "https://pangaea-interviews.now.sh/api/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <LandingPage />
    </ApolloProvider>
  );
}

export default App;
