import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// import App from "./App";
import App from "./query-library-version/App";

import { QueryClientProvider, QueryClient, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <QueryClientProvider client={queryClient}>
        {/* <React.StrictMode> */}
        <App />
        {/* </React.StrictMode> */}
        <ReactQueryDevtools />
    </QueryClientProvider>
);
