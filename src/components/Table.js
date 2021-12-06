import React, {useEffect, useState} from 'react'
import MaterialTable from 'material-table'




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

     let checkSaveData = true;

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
               if(!newData.temperature || !newData.humidity || !newData.sensorId ||
                   !newData.temperature.match(/^\-*(?!0\d)\d*(\.\d+)?$/) ||
                   !newData.humidity.match(/^(?!0\d)\d*(\.\d+)?$/)) {
                   alert('Please add all the data! \n Temperature, Sensor ID and humidity are mandatory! \n ' +
                       'Keep in Mind: Only numbers are accepted.' + '\n ' +
                       'Exept Sensor ID. Allows the value of the Sensor ID')
                   checkSaveData = false;
               }
               if(checkSaveData === true) {
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
           } else {
                   reject()
                   console.log("wrong data");
               }
           }),
           onRowDelete: async (oldData) => {
               await fetch(`http://localhost:9191/sensorrecords/deleteSensorrecord/${oldData.id}`,
                   {method: 'DELETE'})
                   .then(resp=>{getData()})
           },

           onRowUpdate: (newData, oldData) =>
               new Promise((resolve,reject)=>{
                   if(!newData.temperature || !newData.humidity || !newData.sensorId ||
                       !newData.temperature.match(/^\-*(?!0\d)\d*(\.\d+)?$/) ||
                       !newData.humidity.match(/^(?!0\d)\d*(\.\d+)?$/)) {
                       alert('Please add all the data! \n Temperature, Sensor ID and humidity are mandatory! \n ' +
                           'Keep in Mind: Only numbers are accepted.' + '\n ' +
                           'Exept Sensor ID. Allows the value of the Sensor ID')
                       checkSaveData = false;
                   }
                   if(checkSaveData === true) {
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
                   } else {
                       reject()
                   }
               }),
       }}
           options={{
            actionsColumnIndex: -1, addRowPosition: "first"
           }}
       />
    </div>

}

export default Table