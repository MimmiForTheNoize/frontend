import { useState } from "react";


const Selection = ({datastream}) => {

    if(datastream) {

    }



    return (
        <div className='row'>
            <div className='col s4'>
            <label>Browser Select</label>
            <select className="browser-default">
                <option value="" disabled selected>Choose your option</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
            </select>
            </div>
            <div className='col s4'>
            <label>Browser Select</label>
            <select className="browser-default">
                <option value="" disabled selected>Choose your option</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>

            </select>
            </div>
            <div className='col s4'>
            <label>Browser Select</label>
            <select className="browser-default">
                <option value="" disabled selected>Choose your option</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
            </select>
            </div>

        </div>
    )
}

export default Selection