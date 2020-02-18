import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import {SubscriptionClient} from 'subscriptions-transport-ws';
import ApolloClient from 'apollo-client';


const WSClient = new SubscriptionClient(`ws://gambilife.com/graphql`, {
    reconnect: true,
});

const GraphQLClient = new ApolloClient({
    link: WSClient,
    cache: new InMemoryCache()
});

ReactDOM.render(
    <ApolloProvider client={GraphQLClient}>
        <App />
    </ApolloProvider>,
    document.getElementById('root'));