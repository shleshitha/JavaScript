export function isWeekend(date){
    const day = date.format('dddd');
    if(day==='Saturday'||day==='Sunday')
    return true;
    return false;
}

export default isWeekend;