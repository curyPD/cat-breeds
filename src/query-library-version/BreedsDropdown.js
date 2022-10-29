import React, { useEffect } from "react";
import { useQuery } from "react-query";

function BreedsDropdown({ breedId, setBreedId }) {
    const { isLoading, isError, data, error } = useQuery("breeds", fetchBreeds);

    useEffect(() => {
        if (!data) return;
        setBreedId(data[0].id);
    }, [data]);

    async function fetchBreeds() {
        const response = await fetch(
            `${process.env.REACT_APP_CAT_API_BASE_URL}/breeds?api_key=${process.env.REACT_APP_CAT_API_KEY}`
        );
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    }

    const handleSelect = (event) => setBreedId(event.target.value);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="select-box">
            <label className="select-label" htmlFor="breed">
                Breeds
            </label>
            <select
                name="breed"
                value={breedId}
                onChange={handleSelect}
                className="select-field"
            >
                {data
                    .filter((breed) => breed.image)
                    .map((breed) => {
                        return (
                            <option key={breed.id} value={breed.id}>
                                {breed.name}
                            </option>
                        );
                    })}
            </select>
        </div>
    );
}

export default BreedsDropdown;
