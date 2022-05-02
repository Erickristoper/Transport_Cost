const Header = (propsHeader) => {
    
    const priceChangeHandler = (props) => {
        propsHeader.onChangeHeaderData( (prev) => { return {...prev, 'price': props.target.value} } );
    };
    const consumptionPriceHandler  = (props) => {
        propsHeader.onChangeHeaderData( (prev) => { return {...prev, 'consumption': props.target.value} } ); 
    };

    return (
        <div className="card-header">
            <div className='d-flex'>
                <div className='d-flex flex-fill'>
                    <div>
                    <label>Diesel Price PHP </label>
                    <input type='number'  min='0.01' step='0.01'
                        className='form-control form-control' 
                        value={propsHeader.default.price} maxLength={7} onChange={priceChangeHandler} />
                    </div>
                </div>
                <div className='d-flex flex-fill ml-2'>
                    <div>
                    <label>Vehicle Consumption L/km</label>
                    <input type='number'  min='0.01' step='0.01'
                        className='form-control form-control' 
                        value={propsHeader.default.consumption} onChange={consumptionPriceHandler}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;