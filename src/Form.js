import {useState} from "react";

const Form = (props) => {

    const [field1Value, setField1Value] = useState('empty');
    const [formValue, setFormValue] = useState('');


    const onSubmitForm = (event) => {

        event.preventDefault()
        // console.log("До измененией")
        // console.log("FiledValue =", field1Value, "!!! FormValue =", formValue)
        // console.log("Изменяем переменную formValue она сейчас = ", formValue, "должная стать ", field1Value)
        // setFormValue(field1Value)
        console.log("Переменная  formValue=", formValue)

        props.onSetBVlaue(formValue)
        // console.log("FiledValue =", field1Value, "FormValue =", formValue)
        //
        // console.log("end operation")
    }

    const onChangeFiled1Handler = (event) => {
        console.log("Field1Value =", event.target.value)
        setField1Value(event.target.value)
        setFormValue(event.target.value)
    }

    console.log('After init form', props.a)

    return (

        <div>
            <form onSubmit={onSubmitForm}>

                <label>Field1</label>
                <input
                    type="text"
                    value={field1Value}
                    //onFocus={()=>setField1Value('sds')}
                    onChange={onChangeFiled1Handler}></input>

                <button>Submit</button>
            </form>


        </div>
    )
}

export default Form;