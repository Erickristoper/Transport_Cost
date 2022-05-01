import { useEffect, useState } from "react";

const Body = (propsBody) => {
    const [distance, setDistance] = useState(propsBody.default);

    const distanceChangeHandler = (props) => {
        setDistance(props.target.value);
        propsBody.onChangeBodyData(distance);
    };

    useEffect( ()=> {
        propsBody.onChangeBodyData(distance);
    },[distance, propsBody]);
    
    return (
        <div className="card-body">
            <div className='d-flex'>
                <div>
                <label className='mb-0 p-1'>Distance </label>
                </div>
                <div className='ml-2'>
                <input type='number'  min='0.01' step='0.01' 
                        className='form-control form-control' 
                        value={distance} 
                        onChange={distanceChangeHandler}/>
                </div>
            </div>
        </div>
    );
};

export default Body;