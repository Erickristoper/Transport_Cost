
const Body = (propsBody) => {
    const distanceChangeHandler = (props) => {
        propsBody.onChangeBodyData(props.target.value)
    };

    return (
        <div className="card-body">
            <div className='d-flex'>
                <div>
                <label className='mb-0 p-1'>Distance </label>
                </div>
                <div className='ml-2'>
                <input type='number'  min='0.01' step='0.01' 
                        className='form-control form-control' 
                        value={propsBody.default} 
                        onChange={distanceChangeHandler}/>
                </div>
            </div>
        </div>
    );
};

export default Body;