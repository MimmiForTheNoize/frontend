import { FaTimes } from 'react-icons/fa'
import UpdateBtn from "./UpdateBtn";

const Datastream = ({datastream, onDelete, onToggle, onUpdate}) => {

    let date = new Date(parseInt(datastream.timestamp));
    let timeStr = date.getDate()+
        '/'+ date.getMonth()+
        '/'+date.getFullYear()+
        ' '+date.getHours()+
        ':'+ date.getMinutes() +
        ':'+date.getSeconds();


    /*
    const convertTime = (datastream.timestamp) => {
        if(!datastream.timestamp) {
            let date = new Date(datastream.timestamp);
            let timeStr = date.getDate()+
                '/'+ date.getMonth()+
                '/'+date.getFullYear()+
                ' '+date.getHours()+
                ':'+ date.getMinutes() +
                ':'+date.getSeconds();
            return timeStr;
        }
     */

return (

    <div className={`col s12 red lighten-4 datastream_div ${datastream.showData ? 'showData' : ''}`}
         onDoubleClick={() =>
             onToggle(datastream.id)}>
        <h4>
            <div><FaTimes style={{color: 'red', cursor: 'pointer'}}
                          onClick={() => {
                              if (window.confirm('Are you sure you want to delete sensor?')) {
                                  onDelete(datastream.id)
                              };
                          }}
            />
            </div>
            <div>
                <UpdateBtn className={'updateBtn'}  text='update' onClick={onUpdate}/>
                <button className={'waves-effect waves-light btn-large right showMoreBtn'}
                        onClick={() => onUpdate(datastream.id)}>ShowMore
                </button>
            </div>
        </h4>
        <h4>{"temperature: " + datastream.temperature}
        </h4>
        <p>Time of recording: <b>{datastream.timestamp ? timeStr : 'no timeslot available'}</b></p>
        <span>{datastream.showData === true ? 'humidity: ' + datastream.humidity : ''}</span>
    </div>
)

}

export default Datastream