import React, { useState, useEffect } from "react";
import BreedsDropdown from "./BreedsDropdown";
import InfoCard from "./InfoCard";
import { useQuery } from "react-query";

function App() {
    const [breedId, setBreedId] = useState("");
    const breedsQuery = useQuery(
        "breeds",
        () =>
            fetchData(
                `${process.env.REACT_APP_CAT_API_BASE_URL}/breeds?api_key=${process.env.REACT_APP_CAT_API_KEY}`
            ),
        { enabled: !breedId }
    );

    const selectedBreed = breedsQuery.data?.find(
        (breed) => breed.id === breedId
    );

    const imagesQuery = useQuery(
        ["images", breedId],
        () =>
            fetchData(
                `${process.env.REACT_APP_CAT_API_BASE_URL}/images/search?limit=4&breed_ids=${breedId}&api_key=${process.env.REACT_APP_CAT_API_KEY}`
            ),
        { enabled: !!selectedBreed }
    );

    useEffect(() => {
        if (!breedsQuery.data?.[0].id) return;
        setBreedId(breedsQuery.data[0].id);
    }, [breedsQuery.data?.[0].id]);

    async function fetchData(url) {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    }

    const handleSelect = (event) => setBreedId(event.target.value);

    return (
        <div className="App">
            <h1>Cat Breed Explorer</h1>
            <BreedsDropdown
                breedId={breedId}
                handleSelect={handleSelect}
                breeds={breedsQuery.data}
                isLoading={breedsQuery.isLoading}
                isError={breedsQuery.isError}
                error={breedsQuery.error}
            />
            {selectedBreed && (
                <InfoCard
                    breedData={selectedBreed}
                    images={imagesQuery.data}
                    isLoading={imagesQuery.isLoading}
                    isError={imagesQuery.isError}
                    error={imagesQuery.error}
                />
            )}
        </div>
    );
}

export default App;
