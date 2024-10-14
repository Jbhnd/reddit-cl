function timeDiff(apiTime) {
    if(!apiTime) {
      return '';
    }
    
    var diff = (Date.now()) - apiTime * 1000;
    
    var seconds = Math.round(diff / 1000),
    minutes = Math.round(seconds / 60),
    hours   = Math.round(minutes / 60),
    days    = Math.round(hours / 24),
    months  = Math.round(days / 30),
    years   = Math.floor(days / 365);
    
    return (
        (years && {value: years, unit: 'yr.'}) ||
        (months && {value: months, unit: 'mo.'}) ||
        (days && {value: days, unit: 'd.'}) ||
        (hours && {value: hours, unit: 'hr.'}) ||
        (minutes && {value: minutes, unit: 'm'}) ||
        {value: seconds, unit: 's'}
      )
}

export default timeDiff;
