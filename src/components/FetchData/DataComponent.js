import useFetch from "./useFetch";


export default function DataComponent(uri) {
    
    const {loading, data, error} = useFetch(uri);

    if (loading) return <h3>Данные загружаются</h3>;

    if (error) return (<pre>{JSON.stringify(error, null, 2)}</pre>);

    return (
        <div>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}