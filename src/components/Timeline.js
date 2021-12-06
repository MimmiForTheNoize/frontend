import React from "react";


import {
    XAxis,
    Tooltip, CartesianGrid, Area, AreaChart, YAxis, ResponsiveContainer
} from "recharts";
import useFetch from "./useFetch";



const Timeline = () => {
    const BASE_URL = 'http://localhost:9191/sensorrecords/findAllSensorrecords';
    const {data, loading, error} = useFetch(BASE_URL);

    if (loading) return <h1>LOADING...</h1>
    if (error) return console.log(error);

    return (

        //using recharts.
        <div>
            <h2>Charts</h2>
            <ResponsiveContainer>
            <div className='timelineContainer'>
                <h3 >Timeline Temperature</h3>
                    <AreaChart
                        width={800}
                        height={500}
                        data={data}
                        margin={{top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date"
                               allowDataOverflow={false}
                        />
                        <YAxis dataKey="temperature"
                               type="number"
                               domain={[-50, 50]}
                        />

                        <Tooltip />
                        <Area
                            type='monotone'
                            dataKey='temperature'
                            stroke='#156BB7'
                            fill='#1e88e5'
                        />
                    </AreaChart>
            </div>
            </ResponsiveContainer>


            <div className='timelineContainer'>
                <h3>Timeline Humidity</h3>
                <AreaChart
                    width={800}
                    height={500}
                    data={data}
                    margin={{top: 10, right: 30, left: 0, bottom: 0 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date"
                           interval="preserveStartEnd"/>
                    <YAxis dataKey="humidity" />

                    <Tooltip />
                    <Area
                        type='monotone'
                        dataKey='humidity'
                        stroke='#156BB7'
                        fill='#1e88e5'
                    />

                </AreaChart>
            </div>

        </div>
    )
};

export default Timeline