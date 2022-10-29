import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import BreedsDropdown from "./BreedsDropdown";
import InfoCard from "./InfoCard";

export default function App() {
    const [breedId, setBreedId] = useState("");

    const { data: breeds } = useFetch(
        `${process.env.REACT_APP_CAT_API_BASE_URL}/breeds?api_key=${process.env.REACT_APP_CAT_API_KEY}`
    );

    const selectedBreed = breeds.find((breed) => breed.id === breedId);

    useEffect(() => {
        if (breeds[0]?.id) setBreedId(breeds[0].id);
    }, [breeds[0]?.id]);

    return (
        <div className="App">
            <h1>Cat Breeds Explorer</h1>

            <BreedsDropdown
                breedId={breedId}
                setBreedId={setBreedId}
                breeds={breeds}
            />
            {selectedBreed && <InfoCard breedData={selectedBreed} />}
        </div>
    );
}
