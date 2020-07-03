/**
 * Create a function named talkingCalendar that takes in a date string with the format YYYY/MM/DD, and returns a new human readable date that looks like December 2nd, 2017.

  Output:
  December 2nd, 2017
  November 11th, 2007
  August 24th, 1987
 */
const talkingCalendar = function (date) {

  let year = (date).slice(0, 4)
  let monthNumb = new Date(date)
  let monthName = month_name(monthNumb)
  let dayNumb = parseInt((date).slice(8), 10)
  let day = day_name(dayNumb)

  console.log(monthName, day + ",", year)
  return (monthName, day, ",", year)
};

var month_name = function (monthNumb) {
  const mlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return (mlist[monthNumb.getMonth()])
};

var day_name = function (dayNumb) {

  if (dayNumb === 1 || dayNumb === 21 || dayNumb === 31) {
    return dayNumb + 'st'

  } else if (dayNumb === 2 || dayNumb === 22) {
    return dayNumb + 'nd'

  } else if (dayNumb === 3 || dayNumb === 23) {
    return dayNumb + 'rd'

  } else {
    return dayNumb + 'th'
  }

}


console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));