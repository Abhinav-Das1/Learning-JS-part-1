// Date Objects = Objects that contain values that represent dates and times
//                These date objects can be changed and formatted

// date(year, month, day, hour, minute, second, ms)
// const date = new Date(2024, 1, 3, 16, 22, 34);

// console.log(date);

// const date = new Date("2024-02-03T16:25:45Z");

// console.log(date);

// const date = new Date();

// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDate();
// const hour = date.getHours();
// const minutes = date.getMinutes();
// const seconds = date.getSeconds();
// const dayOfWeek = date.getDay();

// console.log(year);
// console.log(month);
// console.log(day);
// console.log(hour);
// console.log(minutes);
// console.log(seconds);
// console.log(dayOfWeek);

// const date = new Date();

// date.setFullYear(2024);
// date.setMonth(1);
// date.setDate(3);
// date.setHours(16);
// date.setMinutes(35);
// date.setSeconds(17);

// console.log(date);

const date1 = new Date("2023-12-31");
const date2 = new Date("2024-01-01");

if(date2 > date1){
    console.log("HAPPY NEW YAER!🎉🎊");
}