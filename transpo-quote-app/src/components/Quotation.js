import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

import { useEffect, useState } from 'react';
import compute, { DIESEL_DATA, DISTANCE, ITEMIZED_COST } from  '../services/Compute';

const Quotation = () => {
    const [dieselData, setDieselData] = useState(DIESEL_DATA);
    const [distance, setDistance] = useState(DISTANCE);
    const [items, setItems] = useState(ITEMIZED_COST);
 
    const bodyDataChange = (newDistance) => {
        setDistance(newDistance);   
    };
    const headerDataChange = (newDieselData) => {
        setDieselData(newDieselData);   
    };

    compute(dieselData, distance);

    useEffect( () => { 
    //    compute(dieselData, distance);
    });

    return (
    <div className='container-fluid px-0'>
        <div className='header jumbotron text-left  py-4'>
            <h2>Transportation Cost Quotation</h2>
            <p>Estimate your transportation cost. At least know how much you're paying for diesel 😉 </p>
        </div>
        <div className='container'>
            <div className="card">
                <Header default={dieselData} onChangeHeaderData={headerDataChange}/>
                <Body default={distance} onChangeBodyData={bodyDataChange}/> 
                <Footer default={items} /> 
            </div>
        </div>
    </div>
    );
};

export default Quotation;
