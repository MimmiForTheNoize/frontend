import { useState } from "react";

const AddData = ({ onAdd }) => {
    const [temperature, setTemperature] = useState('')
    const [humidity, setHumidity] = useState('')
    const [sensorId, setSensorId] = useState('')
    const showData = false;
    let timestamp = '';
    let id = Math.random().toString(36).slice(2);



    const onSubmit = (e) => {
        e.preventDefault()

        if(!temperature || !humidity || !sensorId ||
            !temperature.match(/^(?!0\d)\d*(\.\d+)?$/) ||
            !humidity.match(/^(?!0\d)\d*(\.\d+)?$/)) {
            alert('Please add all the data! \n Temperature, Sensor ID and humidity are mandatory! \n ' +
                'Keep in Mind: Only numbers are accepted.')
            return
        }

        onAdd({ id, sensorId, timestamp, temperature, humidity, showData})
        //clear the form
        setTemperature('')
        setHumidity('')
        setSensorId('')

    }

    return (
        <form className={'add-form'} onSubmit={onSubmit}>
            <div className={'form-control'}>
                <label>Sensor ID*</label>
                <input type='text' placeholder= 'Add your Sensor ID' value={sensorId} onChange={(e) =>
                    setSensorId(e.target.value)}/>
            </div>
            <div className={'form-control'}>
                <label>Temperature*</label>
                <input type='text' placeholder= 'Add your temperature' value={temperature} onChange={(e) =>
                setTemperature(e.target.value)}/>
            </div>
            <div className={'form-control'}>
                <label>Humidity*</label>
                <input type='text' placeholder= 'Add your humidity' value={humidity} onChange={(e) =>
                setHumidity(e.target.value)}/>
            </div>

            <div>
                <input className={'waves-effect waves-light btn-large'} type='submit' value='Save Data' onClick={() =>
                    timestamp = Date.now()
                }/>
            </div>


        </form>
    )
}

export default AddData
