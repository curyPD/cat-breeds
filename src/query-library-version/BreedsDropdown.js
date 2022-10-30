import React, { useEffect } from "react";
import { useQuery } from "react-query";

function BreedsDropdown({
    breedId,
    handleSelect,
    breeds,
    isLoading,
    isError,
    error,
}) {
    if (isLoading) {
        return (
            <div className="select-box">
                <label className="select-label" htmlFor="breed">
                    Breeds
                </label>
                <select name="breed" className="select-field"></select>
            </div>
        );
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
                {breeds
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
