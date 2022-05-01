import { useEffect, useState } from "react";

const Header = (propsHeader) => {
    const [newDieselData, setNewDieselData] = useState(propsHeader.default);

    const priceChangeHandler = (props) => {
        setNewDieselData( (prev) => { return {...prev, 'price': props.target.value} } ); 
    };
    const consumptionPriceHandler  = (props) => {
        setNewDieselData( (prev) => { return {...prev, 'consumption': props.target.value} } );   
    };

    useEffect( ()=> {
        propsHeader.onChangeHeaderData(newDieselData);
    },[newDieselData, propsHeader]);

    return (
        <div className="card-header">
            <div className='d-flex'>
                <div className='d-flex flex-fill'>
                    <div>
                    <label>Diesel Price PHP </label>
                    <input type='number'  min='0.01' step='0.01'
                        className='form-control form-control' 
                        value={newDieselData.price} maxLength={7} onChange={priceChangeHandler} />
                    </div>
                </div>
                <div className='d-flex flex-fill ml-2'>
                    <div>
                    <label>Vehicle Consumption L/km</label>
                    <input type='number'  min='0.01' step='0.01'
                        className='form-control form-control' 
                        value={newDieselData.consumption} onChange={consumptionPriceHandler}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;