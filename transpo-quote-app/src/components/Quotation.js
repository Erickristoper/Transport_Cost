import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

import { useState } from 'react';
import compute, { DIESEL_DATA, DISTANCE, ITEMIZED_COST } from  '../services/Compute';

const Quotation = () => {
    const [dieselData, setDieselData] = useState(DIESEL_DATA);
    const [distance, setDistance] = useState(DISTANCE);

    compute(dieselData, distance);

    return (
    <div className='container-fluid px-0'>
        <div className='container'>
            <div className="card"> 
                <Header default={dieselData} onChangeHeaderData={setDieselData}/>
                <Body default={distance} onChangeBodyData={setDistance}/> 
                <Footer default={ITEMIZED_COST} /> 
            </div>
        </div>
    </div>
    );
};

export default Quotation;
