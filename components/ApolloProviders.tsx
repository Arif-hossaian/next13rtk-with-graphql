"use client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export const ApolloProviders = ({ children }: { children: React.ReactNode }) => {
	const client = new ApolloClient({
		uri: "https://graphql-pokemon2.vercel.app/",
		cache: new InMemoryCache(),
	});
	return <ApolloProvider client={client}>{children}</ApolloProvider>;
};