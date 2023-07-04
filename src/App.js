import './App.css';
import {useState} from "react";

function App() {

    function useInput(initialValue) {

        const [value, setValue] = useState(initialValue);

        return [{value, onChange: (e) => setValue(e.target.value)}, () => setValue(initialValue)];
    }


    const [titleProps, resetTitle] = useInput("");
    const [colorProps, resetColor] = useInput("#999999");

    const submit = (e) => {
        e.preventDefault(); //чтобы не перезагрузилась страница
        alert(`${titleProps.value}, ${colorProps.value}`);
        resetTitle();
        resetColor();

    }

    return (


        <div className="App">
            <form onSubmit={submit}>
                <input
                    /*вместе значений почему то сделали там, по другому не работает при использование не хук нужно будет опредлить value и значение onChange */

                    // defaultValue={titleProps.value.toString()}
                    // onChange={(event) => (resetTitle())} так сделать нельзя
                    {...titleProps} //так как у нас отдается и value и onChange
                    type="text" placeholder="type color"></input>

                <input
                    {...colorProps}
                    type="color"></input>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default App;
