import React, { useState, useEffect } from "react";

export const useFetch = function (url) {
    const [data, setData] = useState([]);

    useEffect(() => {
        let isCancelled = false;
        const getData = async function () {
            try {
                const response = await fetch(url);
                const data = await response.json();
                console.log(data);
                if (!isCancelled) setData(data);
            } catch (err) {
                console.error(err);
            }
        };
        getData();

        return () => {
            isCancelled = true;
        };
    }, [url]);

    return {
        data,
    };
};
