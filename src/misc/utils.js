function sameYearAndMonth(d1,d2){
    return(d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth())
}

export function getDateString(time){
    if(!time) {
        return};
    const months = ['jan','feb','march','april','may','june','july','aug','sept','oct','nov','dec']
    const now = new Date(Date.now());
    const today = now.getDate();
    const time_today = time.getDate();
    if(sameYearAndMonth(time,now)){
        if(today === time_today){
            return "today"
        }
        if(today+1 === time_today){
            return "tommorow"
        }
        if(today+2 === time_today){
            return "day after tommorow"
        }
        if(today - 1 === time_today){
            return "yesterday"
        }
    }
    return `${time_today} ${months[time.getMonth()]}`;
}
