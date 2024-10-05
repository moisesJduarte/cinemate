import { useFetch } from "../hooks/useFetch";
import { Cards } from "../components";

export const MovieList = ({ apiPath }) => {
    const { data: movies, loading, error } = useFetch(apiPath);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <main>
            <section className="max-w-7xl mx-auto py-7">
                <div className="flex justify-start flex-wrap">
                    {Array.isArray(movies) && movies.length > 0 ? (
                        movies.map((movie) => (
                            <Cards key={movie.id} movie={movie} />
                        ))
                    ) : (
                        <p>No movies available</p>
                    )}
                </div>
            </section>
        </main>
    );
};
