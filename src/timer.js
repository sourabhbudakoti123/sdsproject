import React, {useEffect, useState} from "react"

export default function Timer(props){
    const [seconds, setSeconds] = useState(0);
        const [ontime, setOn] = useState(false);
        const [intervalid, setIntervalid] = useState(null);
        
    useEffect(()=>{
        
        if(ontime){
        const time = setInterval(()=>{
            setSeconds(prev => prev + 1);}
            ,1000);
            setIntervalid(time);
    }
        else
                {
            clearInterval(intervalid);
        }
    },[ontime])
    
    return (
        <>
        
        <div>
            <h1>{seconds} seconds</h1>
            <button className='btn btn-stop' onClick={() => setOn(false)}>Stop</button>
            <button className='btn btn-start' onClick={() => setOn(true)}>Start</button>
            <button className='btn btn-reset' onClick={() => setSeconds(0)}>Reset</button>

        </div>
        </>
    )
    }
    function minute(){
    <h1>(seconds/60)</h1>;
    }
    export {minute}

