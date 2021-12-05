import React, {useEffect, useState} from 'react'
import MaterialTable, {MTableCell} from 'material-table'




 const Table = ()=>{



    const url = 'http://localhost:9191/sensorrecords/';

     const[data ,setData] = useState([])

     useEffect(() => {
         getData()
     }, [])

     const getData = () => {
         fetch(url + 'findAllSensorrecords').then(resp => resp.json())
             .then(resp => setData(resp))
     }

    const columns= [
        {
            title:'ID',field:'id',
            editable: "never"
        },
        {
            title:'Sensor ID', field: 'sensorId'
        },
        {
            title:'Timestamp', field: 'timestamp',
            editable: "never"
        },

        {
            title: 'Temperature', field:'temperature'
        },
        {
            title: 'Humidity', field: 'humidity'
        }
    ]

    return<div>

        <h2>Table of Records</h2>
       <MaterialTable
           className='recordsTable'
           title='Table of Records'
           data={data}
           columns={columns}

           editable={{

           onRowAdd:(newData)=>new Promise((resolve,reject)=>{
               newData.showData = false;
            fetch(url + 'addSensorrecord', {
                method:'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(newData)
            }).then(resp=>resp.json())
                .then(resp=>{getData()
                resolve()
                })
       }),
           onRowDelete: async (oldData) => {
               await fetch(`http://localhost:9191/sensorrecords/deleteSensorrecord/${oldData.id}`,
                   {method: 'DELETE'})
           },

           onRowUpdate: (newData, oldData) =>
               new Promise((resolve,reject)=>{
                   fetch(url + "updateSensorrecord/" + oldData.id, {
                       method:'PUT',
                       headers: {
                           'Content-type': 'application/json'
                       },
                       body: JSON.stringify(newData)
                   }).then(resp=>resp.json())
                       .then(resp=>{getData()
                           resolve()
                       })
               }),
       }}
           options={{
            actionsColumnIndex: -1, addRowPosition: "first"
           }}
       />
    </div>

}

export default Table