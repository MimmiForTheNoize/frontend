import Datastream from "./Datastream";
import React, {useState} from "react";

const  Data = ({ data, onDelete, onToggle, onUpdate }) => {




    var uniqueObj = [];

    var keyArr = [];

    for(var i = 0; i < data.length; i++) {
        if(uniqueObj.length !== 0) {
            for(var j = 0; j < uniqueObj.length; j++) {
                if(keyArr.includes(data[i].sensorId) && uniqueObj[j].sensorId === data[i].sensorId && data[i].timestamp > uniqueObj[j].timestamp) {
                    uniqueObj[j] = data[i];
                } else if(keyArr.includes(data[i].sensorId) === false) {
                    uniqueObj.push(data[i]);
                    keyArr.push(data[i].sensorId);
                }
            }
        } else {
            uniqueObj.push(data[i]);
            keyArr.push(data[i].sensorId);
        }

    }

    data = uniqueObj;

    const [searchTerm, setSearchTerm] = useState('')

   return(

       <div className='data_container'>
           <>
               <div className='container search_container'>
                   <i className='material-icons box search_icon'>search</i>
               <input className='box search_input' type="text" name='SearchSensorID' placeholder="Search all Sensor IDs..." onChange={
                   event => {setSearchTerm(event.target.value)}
               }/>
               </div>
               {data.filter((val) => {
                   if(searchTerm === "") {
                       //returns everything
                        return val;
                   } else if(val.sensorId.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val;
                   }
               }).map((datastream) =>
                   (<Datastream key={datastream.id}
                                datastream={datastream}
                                onDelete={onDelete}
                                onToggle={onToggle}
                                onUpdate={onToggle}
                   />))}
           </>
       </div>

   )
}

export default Data