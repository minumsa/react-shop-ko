function DayOrNight() {
  let date = new Date();
  let hour = date.getHours();
  let result;
  if (hour < 12) {
    result = "AM";
  } else {
    result = "PM";
  }
  return result;
}

export default DayOrNight;
