import * as React from "react";

// Plugins
// import {
//   ApolloProvider,
//   ApolloClient,
//   NormalizedCacheObject,
// } from '@apollo/client'
import Layout from "./Layout";
// import StoreProvider from '$plugins/store'

// Typings
import { Props } from "$cmp/typings";

// Styles & icons
// import { IStoreHydration } from '$plugins/typings'

interface AppProps extends Props {
  // apolloClient?: ApolloClient<NormalizedCacheObject>
  // storeHydration?: IStoreHydration;
}

const App: React.FC<AppProps> = ({
  children,
  // apolloClient,
  // storeHydration,
}) => {
  // if (apolloClient) {
  //   return (
  //     <StoreProvider storeHydration={storeHydration}>
  //       <ApolloProvider client={apolloClient}>
  //         <Layout>{children}</Layout>
  //       </ApolloProvider>
  //     </StoreProvider>
  //   )
  // }
  return (
    // <StoreProvider storeHydration={storeHydration}>
    <Layout>{children}</Layout>
    // </StoreProvider>
  );
};

export default App;
