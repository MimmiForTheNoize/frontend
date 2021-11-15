
import Datastream from "./Datastream";


const  Data = ({ data, onDelete, onToggle, onUpdate }) => {
   return(

       <>
           {data.map((datastream) =>
               (<Datastream key={datastream.id}
                datastream={datastream}
               onDelete={onDelete}
                onToggle={onToggle}
                onUpdate={onToggle}
               />))}
       </>
   )
}

export default Data