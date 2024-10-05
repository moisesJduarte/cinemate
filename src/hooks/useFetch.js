import { useState, useEffect } from "react";

export const useFetch = (apiPath, queryTerm = "") => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const url = `https://api.themoviedb.org/3/${apiPath}?${queryTerm ? `query=${queryTerm}` : ""}`;

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOGUwNTJiOTc0YzU1ODAzMDZhY2I2MWE2NDU1OTliNiIsIm5iZiI6MTcyNjE3MzYyMS45OTIzMywic3ViIjoiNjZkZjllOGQ2YWIzZTM1MjU4ZjFiMTVhIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.m5qmWfy8-cQ8WmtjtUW4JvhgG-tyrvyncrmG-76di2U'
            }
        };

        async function fetchMovies() {
            try {
                const response = await fetch(url, options);
                const json = await response.json();
                if (json.results && Array.isArray(json.results)) {
                    setData(json.results);
                } else {
                    setData([]);
                    console.error("No results found.");
                }
            } catch (error) {
                setError(error.message || "Something went wrong");
                console.error("Fetch error:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchMovies();
    }, [url]);

    return { data, loading, error };
};
