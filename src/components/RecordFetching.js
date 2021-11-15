import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {



    const [records, setRecords] = useState([])
    let tempObj = [];



    useEffect(() => {


/*
        axios.get('http://localhost:5000/records')
            .then(res => {
                console.log(res)
                for (const recordObj of res.data) {
                    let myObj = {};
                    myObj.timestamp = recordObj.timestamp;
                    myObj.temperature = recordObj.temperature;
                    timestamp.push(parseInt(recordObj.timestamp))
                    temperature.push(parseInt(recordObj.temperature))
                    tempObj.push(myObj);

                    return records;
                }
            })
            .catch(err => {
                console.log(err);
            })
        console.log(tempObj);
        console.log(timestamp, temperature);
 */

    }, [])

    return (
        <div>
            <div >

            </div>

        </div>
    )
}

export default DataFetching

/*
     {records.map(records => (
                    <li key={records.id}>{"SensorID: " +  records.sensor_id + "\n" + "temperature: " + records.temperature}</li>
                ))}

*/