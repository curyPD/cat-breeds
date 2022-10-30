import React from "react";

function InfoCard({ breedData, images, isLoading, isError, error }) {
    return (
        <article className="cat-card">
            <div className="image-grid">
                {isLoading ? (
                    <>
                        <div className="placeholder-rectangle"></div>
                        <div className="placeholder-rectangle"></div>
                        <div className="placeholder-rectangle"></div>
                        <div className="placeholder-rectangle"></div>
                    </>
                ) : (
                    images.map((image) => (
                        <div key={image.id} className="grid-cell">
                            <img
                                src={image.url}
                                alt=""
                                className="grid-image"
                            />
                        </div>
                    ))
                )}
            </div>
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
