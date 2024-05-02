import React from 'react'
import './Chart.css'
import ChartBar from "../ChatBar/ChartBar";


const Chart = (props) => {

    const valueDatapoinsArray = props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMaxValue = Math.max(...valueDatapoinsArray);

    return (
        <div className='chart'>
            {console.log(props.dataPoints)}
            {props.dataPoints.map((datapoint) => (
                <ChartBar
                    key={datapoint.label}
                    value={datapoint.value}
                    maxValue={totalMaxValue}
                    label={datapoint.label}/>))

            }
        </div>
    )
}

export default Chart