import './App.css';
import {useEffect, useReducer, useState} from "react";
import RatingStar from "./components/Rating/RatingStar";
import DataComponent from "./components/FetchData/DataComponent";

function App({login}) {

    function useInput(initialValue) {

        const [value, setValue] = useState(initialValue);

        return [
            //так как мы используем кастомный хук который использует прелести useState то мы должны возвращать массив
            // [0] первое в нем значение переменной
            // [1] второе как изменять переменную
            {
                value, onChange: (e) => setValue(e.target.value)
            }, //[0]
            () => setValue(initialValue) //[1] resetColor and resetTitle быдет это вызывать через useInput('default value')!
        ];
    }


    //titleProps и colorProps  будет содержать массив: из элемента и того как его менять!
    const [titleProps, resetTitle] = useInput("черный по умолчанию");
    const [colorProps, resetColor] = useInput("#000000");

    const submit = (e) => {
        e.preventDefault(); //чтобы не перезагрузилась страница
        alert(`${titleProps.value}, ${colorProps.value}`); //сообщение с кнопкой OK
        //далее сбрасываем на значения по умолчанию
        resetTitle(); //будет вызван useInput("черный по умолчанию"); так как resetTitle => на кастомный хук
        resetColor(); //useInput("#000000"); так как resetColor => на кастомный хук


    }
    const [users, setUsers] = useState([]);
    const [isError, setIsError] = useState(false);

    //[] - loading data only once in the first render
    //[variable] - loading on variable changing only
    // without  second parameter loading constantly

    useEffect(() => {
            const fetchData = async () => {
                try {
                    let response = await fetch(`https://api.github.com/users1`);
                    if (response.status === 200) {
                        let data = await response.json();
                        setUsers(data);
                    } else {
                        throw "Не удалось загрузить пользователей.";
                    }

                } catch (error) {
                    setIsError(true);
                    console.log("Сообщение в консоль: Не удалось загрузить пользователей")
                }
            }
            fetchData()
        }, []
    )


    const [userName, setUserName] = useState("Коля");
    const [admin, setAdmin] = useState(false);

    useEffect(() => {
        console.log({userName});
    }, [userName])

    useEffect(() => {
        console.log(`Права пользователя: ${admin ? "администратор" : "пользователь"}`);
    }, [userName]) //на что будет реакция React, чтобы вызвать эту часть кода

    const [number, setNumber] = useReducer(
        (number, newNumber) => number + newNumber,
        0)

    const [checked, toggle] = useReducer(
        (checked) => !checked,
        false
    );


    const initState = {
        message: "ПрИвЕт!"
    }

    const [state, dispatch] = useReducer(
        reducer,
        initState
    );

    //мы меняем первоначальное сообщение
    function reducer(state, action) {
        switch (action.type) {
            case "upper":
                return {message: `${state.message.toUpperCase()}`};
            case "lower" :
                return {message: `${state.message.toLowerCase()}`};
            case
            "cut":
                return {
                    message: `${state.message.substring(2, 4)}`
                }
        }
    }

    return (

        <>
            <div className="App">
                <p>1 Working with custom Hook</p>
                <form onSubmit={submit}>
                    <input
                        // defaultValue={titleProps.value.toString()}
                        // onChange={(event) => (resetTitle())} так сделать нельзя
                        {...titleProps} //потому что у нас тут массив c value and onChange!!!
                        type="text"
                        placeholder="type color"></input>

                    <input
                        {...colorProps}
                        type="color"></input>
                    <button>Submit</button>
                </form>
            </div>

            <div className="App">
                <p>2 useState</p>
                <RatingStar totalStar={5}/>
                <RatingStar totalStar={10}/>
            </div>

            <div className="App">
                <p>3 useEffect - loading data from api</p>
                {isError && <p>Пользователи не загружены</p>}
                <button onClick={() => setUsers([])}>Убрать пользователей</button>
                <ul>
                    {users.map(user => (<li key={user.id}>
                            {user.login}
                        </li>)
                    )}
                </ul>
            </div>

            <div className="App">
                <p>4 useEffect</p>
                <p>Привет {userName}, твои права в системе: {admin ? "админ" : "пользователь"} </p>
                <button onClick={() => setUserName("Ира")}>Изменить имя</button>
                <button onClick={() => setAdmin(true)}>Стать админом</button>

            </div>

            <div className="App">
                <p>5 Simple Reducer</p>
                <p onClick={() => setNumber(1)}>{number}</p>
            </div>

            <div className="App">
                <p>6 Complex Reducer</p>
                <input
                    type="checkbox"
                    value={checked.toString()}
                    onChange={toggle}
                />
                {checked ? "отмечено" : "не отмечено"}

            </div>

            <div className="App">
                <p>7 Complex Reducer with actions</p>

                <p>Сообщение: {state.message}</p>
                <button onClick={() => dispatch({type: "upper"})}>Заглавными</button>
                <button onClick={() => dispatch({type: "lower"})}>прописными</button>
                <button onClick={() => dispatch({type: "cut"})}>вынуть</button>
            </div>

            <div className="App">
                <p>8 using fetch component</p>
                {login}
                {/*<DataComponent uri='https://api.github.com/users/antipn'/>*/}
                <DataComponent uri={`https://api.github.com/users/${login}`}/>

            </div>

        </>
    );
}

export default App;
