import { useState, useEffect } from "react";
import axios from "axios";

function useFetch(url) {
    const [gameList, setGameList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function fetchData() {
        try {
            const { data: responseData } = await axios.get(url);
            setGameList(responseData);
            setLoading(false);
        }
        catch (err) {
            setError(err);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return { gameList, loading, error };
}
export default useFetch;