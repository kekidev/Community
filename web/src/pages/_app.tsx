import { ChakraProvider } from "@chakra-ui/react";
import { Provider, createClient } from "urql";

import "@fontsource/raleway/400.css";
import "@fontsource/open-sans/700.css";

import theme from "../theme";

const client = createClient({
  url: "http://localhost:4000/graphql",
  fetchOptions: { credentials: "include" },
});

function MyApp({ Component, pageProps }: any) {
  return (
    <Provider value={client}>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
