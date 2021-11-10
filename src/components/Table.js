import React, {useState} from 'react'
import MaterialTable from 'material-table'

export const Table = ()=>{


    const records=[
        {
            id: "sdsl334455",
            sensor_id: "6",
            temperature: "7",
            humidity: "15",
            showData: false
        },
        {
            id: "888sjsjsjsj",
            sensor_id: "18",
            temperature: "19",
            humidity: "16",
            showData: false
        },
        {
            id: "ttosll94563",
            sensor_id: "7",
            temperature: "8",
            humidity: "17",
            showData: false
        },
        {
            id: "288hd9839",
            sensor_id: "20",
            temperature: "21",
            humidity: "18",
            showData: false
        },
        {
            id: "77sjw999",
            sensor_id: "2",
            temperature: "3",
            humidity: "19",
            showData: false
        },
        {
            id: "2983uehfjskj",
            sensor_id: "9",
            temperature: "10",
            humidity: "20",
            showData: false
        },
        {
            id: "2ojfdbh4444",
            sensor_id: "11",
            temperature: "12",
            humidity: "21",
            showData: false
        }
    ]

    const[records,setRecords] = useState(records)
    const columns= [
        {
            title:'ID',field:'id'
        },
        {
            title:'Sensor ID', field: 'sensor_id'
        },
        {
            title: 'Temperature', field:'temperature'
        },
        {
            title: 'Humidity', field: 'humidity'
        }
    ]


    return<div>
       <MaterialTable className='myTable' title='Table of Records'
       data={records}
       columns={columns}
       editable={{
           onRowAdd:()=>(newRow)=>new Promise((resolve,reject)=>{
               const updatedRows=[...records,newRow]
              setTimeout(()=>{
                  setRecords(updatedRows)
                  resolve()
              }, 2000)
               resolve()
               console.log(newRow)
       }),
           onRowDelete:()=>(newdata)=>null,
           onRowUpdate:()=>(newdata)=>null,
       }}
       />
    </div>

}