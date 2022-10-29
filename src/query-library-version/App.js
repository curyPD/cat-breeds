import React, { useState } from "react";
import { QueryClientProvider, QueryClient, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import BreedsDropdown from "./BreedsDropdown";

const queryClient = new QueryClient();

function App() {
    const [breedId, setBreedId] = useState("");

    return (
        <QueryClientProvider client={queryClient}>
            <div className="App">
                <h1>Cat Breed Explorer</h1>
                <BreedsDropdown breedId={breedId} setBreedId={setBreedId} />
            </div>
            <ReactQueryDevtools />
        </QueryClientProvider>
    );
}

export default App;
