import React from "react";

function BreedsDropdown({ breedId, setBreedId, breeds }) {
    const breedOptions = breeds
        .filter((breed) => breed.image)
        .map((breed) => {
            return (
                <option key={breed.id} value={breed.id}>
                    {breed.name}
                </option>
            );
        });

    const handleSelect = (event) => setBreedId(event.target.value);

    return (
        <>
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
                    {breedOptions}
                </select>
            </div>
        </>
    );
}

export default BreedsDropdown;
