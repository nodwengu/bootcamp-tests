
function yearsAgo(year) {
    var now = new Date();
    var currentYear = now.getFullYear();

    if(isNaN(year)) {
        return 'Number required'
    }
    
    return (currentYear) - (year);
}

// var years = yearsAgo(2010);

// console.log(years);