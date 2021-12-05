module.exports.returnDate = returnDate;

function returnDate() {
  const date = new Date();
  const options = {
      weekday:'long',
      year:'numeric',
      month:'long',
      day:'numeric'
  }
  const day = date.toLocaleDateString("en-US",options);
  return day;
}
