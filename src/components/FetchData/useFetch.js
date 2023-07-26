import {useEffect, useState} from "react";

export default function useFetch({uri}) {

    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {

        if (!uri) return;

        //можно так, мне больше нравится, больше контроля
        // const fetchData = async () => {
        //     try {
        //
        //         let response = await fetch(uri);
        //         if (response.status === 200) {
        //             let data = await response.json();
        //             setData(data);
        //             setLoading(false)
        //         } else {
        //             throw `Не удалось загрузить данные из ${uri}`;
        //
        //         }
        //
        //     } catch (error) {
        //         setError(error.message);
        //     }
        // }
        // fetchData();

//так не работало ошибка была в параметре входящем - неправильно объявлен
        //меньше контроля
        fetch(uri)
            .then((data) => data.json() )
            .then(setData)
            .then(() => setLoading(false))
            .catch(setError)

    }, [uri])


    return {loading, data, error};
}

