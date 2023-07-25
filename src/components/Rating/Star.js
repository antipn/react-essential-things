import {FaStar} from "react-icons/fa";

export default function Star({selected = false, onSelect}){

    return <FaStar color={selected ? "black" : "gray"} onClick={onSelect}/>
}

//у звезды есть параметр - закрашена она или нет по умолчанию не закрашена!
//также мы передаем что делается при клике на нее
