import Header from "./Header";
import AddData from "./AddData";
import Data from "./Data";
import * as React from "react";
import {useEffect, useState} from "react";


const Homepage = () => {
    const [showAddData, setShowAddData] = useState
    (false)
    const [data, setData] = useState([])

    useEffect(() => {
        const getData = async () => {
            const dataFromServer = await fetchData()
            setData(dataFromServer)
        }
        getData()
    }, [])

    //fetching the data
    const fetchData = async () => {
        //await cause fetch returns promise
        const res = await fetch('http://localhost:5000/data')
        const data = await res.json()

        return data
    }

    //update data
    const updateData = async  () => {
        console.log("update");
        const updateAll = await fetchData()
        const res = await fetch('http://localhost:5000/data', {
            method:'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const updData = await res.json()

        return data

    }

    //Add Data
    const addData = async (datastream) => {
        //request response
        const res = await fetch('http://localhost:5000/data', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(datastream)
        })
        //new data that was just created
        const newData = await res.json()
        //add the new data
        setData([...data, newData])
        /*
                const id = Math.floor(Math.random() * 10000) +1
                console.log(datastream);
                const newData = {id, ...datastream }
                setData([... data, newData])
         */

    }

    //delete Data
    const  deleteData = async (id) => {
        await fetch(`http://localhost:5000/data/${id}`, {method: 'DELETE'})
        setData(data.filter((datastream) => datastream.id !== id))

    }

    //Toggle data
    const toggleData = (id) => {
        setData(data.map((datastream) =>
                datastream.id === id ? {...datastream, showData : !datastream.showData} : datastream
            )
        )
    }
    return (
        <div className="container">

            <Header onAdd={() =>setShowAddData
            (!showAddData)}
                    showAdd={showAddData} />
            {showAddData && <AddData onAdd={addData} />}
            {data.length > 0 ?
                <Data data={data} onDelete={deleteData}
                      onToggle={toggleData} onUpdate={updateData()}/>
                : <h3>'No Data available'</h3>}
        </div>
    )
}

export default Homepage