import { useState } from "react";

const AddData = ({ onAdd }) => {
    const [temperature, setTemperature] = useState('')
    const [humidity, setHumidity] = useState('')
    //const[id, setId] = useState('')
    const showData = false;
    let timestamp = '';

    const onSubmit = (e) => {
        e.preventDefault()
        if(!temperature || !humidity) {
            alert('please add all the data! \n Temperature, id and humidity are mandatory!')
            return
        }

        onAdd({ timestamp, temperature, humidity, showData})
        //clear the form
        setTemperature('')
        setHumidity('')

    }

    return (
        <form className={'add-form'} onSubmit={onSubmit}>
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
                    timestamp = Date.now()}/>
            </div>


        </form>
    )
}

export default AddData