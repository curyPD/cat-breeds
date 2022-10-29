import React from "react";

function InfoCard({ breedData }) {
    return (
        <article className="cat-card">
            <img
                className="cat-image"
                src={breedData.image.url}
                alt={breedData.name}
            />
            <div className="country-tag">
                <div>
                    <img
                        src={`${process.env.REACT_APP_FLAGS_API_BASE_URL}/${
                            breedData.country_code === "SP"
                                ? "SGP"
                                : breedData.country_code
                        }`}
                        alt={`${breedData.origin} flag`}
                    />
                    <span>{breedData.origin}</span>
                </div>
            </div>
            <h2 className="cat-name">{breedData.name}</h2>
            <p className="cat-temperament">{breedData.temperament}</p>
            <p className="cat-description">{breedData.description}</p>
            <a
                href={breedData.wikipedia_url}
                className="wiki-link"
                target="_blank"
            >
                Wikipedia
            </a>
        </article>
    );
}

export default InfoCard;
