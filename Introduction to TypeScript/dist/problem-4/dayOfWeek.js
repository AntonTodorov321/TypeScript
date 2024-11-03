var DayOfWeek;
(function (DayOfWeek) {
    DayOfWeek[DayOfWeek["Monday"] = 1] = "Monday";
    DayOfWeek[DayOfWeek["Tuesday"] = 2] = "Tuesday";
    DayOfWeek[DayOfWeek["Wednesday"] = 3] = "Wednesday";
    DayOfWeek[DayOfWeek["Thursday"] = 4] = "Thursday";
    DayOfWeek[DayOfWeek["Friday"] = 5] = "Friday";
    DayOfWeek[DayOfWeek["Saturday"] = 6] = "Saturday";
    DayOfWeek[DayOfWeek["Sunday"] = 7] = "Sunday";
})(DayOfWeek || (DayOfWeek = {}));
;
function printDay(day) {
    if (day === 'Monday') {
        console.log(DayOfWeek.Monday);
    }
    else if (day === 'Tuesday') {
        console.log(DayOfWeek.Tuesday);
    }
    else if (day === 'Wednesday') {
        console.log(DayOfWeek.Wednesday);
    }
    else if (day === 'Thursday') {
        console.log(DayOfWeek.Thursday);
    }
    else if (day === 'Friday') {
        console.log(DayOfWeek.Friday);
    }
    else if (day === 'Saturday') {
        console.log(DayOfWeek.Saturday);
    }
    else if (day === 'Sunday') {
        console.log(DayOfWeek.Sunday);
    }
    else {
        console.log('error');
    }
    ;
}
;
printDay('Monday');
printDay('Friday');
printDay('Fridayw');
