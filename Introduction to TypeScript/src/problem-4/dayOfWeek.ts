enum DayOfWeek {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
};

function printDay(day: string): void {
    if (day === 'Monday') {
        console.log(DayOfWeek.Monday);
    } else if (day === 'Tuesday') {
        console.log(DayOfWeek.Tuesday);
    } else if (day === 'Wednesday') {
        console.log(DayOfWeek.Wednesday);
    } else if (day === 'Thursday') {
        console.log(DayOfWeek.Thursday);
    } else if (day === 'Friday') {
        console.log(DayOfWeek.Friday);
    } else if (day === 'Saturday') {
        console.log(DayOfWeek.Saturday);
    } else if (day === 'Sunday') {
        console.log(DayOfWeek.Sunday);
    } else {
        console.log('error');
    };
};