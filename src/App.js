import './App.css';
import {useState} from "react";
import RatingStar from "./components/Rating/RatingStar";


function App() {

    function useInput(initialValue) {

        const [value, setValue] = useState(initialValue);

        return [
            {value, onChange: (e) => setValue(e.target.value)},
            () => setValue(initialValue)];
    }


    const [titleProps, resetTitle] = useInput("черный");
    const [colorProps, resetColor] = useInput("#000000");

    const submit = (e) => {
        e.preventDefault(); //чтобы не перезагрузилась страница
        alert(`${titleProps.value}, ${colorProps.value}`);
        resetTitle();
        resetColor();

    }

    return (

        <>
            <div className="App">
                <p>1 Working with custom Hook</p>
                <form onSubmit={submit}>
                    <input
                        /*вместе значений почему то сделали там, по другому не работает при использование не хук нужно будет опредлить value и значение onChange */

                        // defaultValue={titleProps.value.toString()}
                        // onChange={(event) => (resetTitle())} так сделать нельзя
                        {...titleProps}
                        type="text" placeholder="type color"></input>

                    <input
                        {...colorProps}
                        type="color"></input>
                    <button>Submit</button>
                </form>
            </div>

            {/*RatingStars*/}
            <div className="App">
                <p>2 useState</p>
                <RatingStar totalStar={5}/>
                <RatingStar totalStar={10}/>
            </div>

            <div className="App">
                <p>3 useEffect</p>
            </div>
        </>
    );
}

export default App;
