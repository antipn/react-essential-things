import Star from "./Star";
import {useState} from "react";

export default function RatingStar({totalStar = 4}) {

    const starArray = ({totalStar}) => [...Array(totalStar)];

    const [selectedStars, setSelectedStars] = useState(0);

    return (
        <>
            <p>Кол-во звезд в рейтинге: {totalStar} выбрано {selectedStars}</p>
            {starArray({totalStar}).map((item, i) => (

                     <Star key={i}
                              selected={selectedStars > i} //условие закраски true or false
                    // тут мы передаем закрашена звезда или нет по условию что номер закрашенной
                    // звезды больше текущего индекса
                    // магии нет, есть просто интересный прием что текущий номер звезды, если больше что у нас лежит в значениях то мы получим false
                    //например рейтинг 3 а у нас 5 звезд = значит на 4 звезде (индекс 2) получим условие 3 > 4 = false и т.д.
                              onSelect={() => setSelectedStars(i + 1)}
                    //обновляем позицию +1 закрашенной звезды

                />

             ))}
            <p>
                <button onClick={() => setSelectedStars(0)}>Reset Rating</button>
            </p>
        </>
    )

}