export const DIESEL_DATA = {
    'price': 70,
    'consumption': 2
};
export const DISTANCE = 5;

export let ITEMIZED_COST = [
    {name: 'Diesel', percentage:'40', cost: 0},
    {name: 'Maintenance', percentage:'5', cost: 0},
    {name: 'Driver', percentage:'8', cost: 0},
    {name: 'Admin', percentage:'25', cost: 0},
    {name: 'Toll Fee', percentage:'6', cost: 0},
    {name: 'Sticker', percentage:'2', cost: 0},
    {name: 'Parking / Terminal', percentage:'4', cost: 0},
    {name: 'Profit', percentage:'10', cost: 0}
  ];

const compute = (dieselData, distance) => {  
    if (+distance === 0 || !distance || +dieselData.price === 0 || +dieselData.consumption === 0) {
        ITEMIZED_COST.map( item => item.cost = 0 );
        return [0, ITEMIZED_COST];
    }

    // Aside from the distance of origin to destination. There are other distances that are considered
    // the distance from and to the garage and allowance for detours.
    let allDistance = {
        distance: +distance, 
        garage: 5, 
        allowance:  (.05 * +distance)};
    const totalKM = +allDistance.distance + allDistance.garage + allDistance.allowance;
    
    ITEMIZED_COST[0].cost = totalKM * (1 / +dieselData.consumption) * +dieselData.price;
    
    const estimatedCost = (ITEMIZED_COST[0].cost * 100) / +ITEMIZED_COST[0].percentage;
    ITEMIZED_COST.map( item =>  item.cost = (estimatedCost * (item.percentage / 100)) );

    console.log(estimatedCost); console.log(ITEMIZED_COST);
    return [estimatedCost, ITEMIZED_COST];
};

export default compute;
