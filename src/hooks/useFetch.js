import { useState, useEffect } from "react";

export default function useFetch(url, ...dependencies) {
    const [data, setData] = useState();

    const getData = async () => {
        const promise = await fetch(url);
        const data = await promise.json();
        setData(data);
    };


    useEffect(() => {
        getData();
    }, dependencies);
    return data;
}