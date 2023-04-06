import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";
import Header from "../components/Header";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { NotificationProvider } from "@web3uikit/core";

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: process.env.NEXT_PUBLIC_SUBGRAPH_URL,
});

function MyApp({ Component, pageProps }) {
    return (
        <MoralisProvider initializeOnMount={false}>
            <ApolloProvider client={client}>
                <NotificationProvider>
                    <Header />
                    <Component {...pageProps} />
                </NotificationProvider>
            </ApolloProvider>
        </MoralisProvider>
    );
}

export default MyApp;
