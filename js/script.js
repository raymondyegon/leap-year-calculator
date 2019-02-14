function leapYear() {
  var x ;
  x = document.getElementById("year").value;
  if ((0 == x%4) && (0 !== x % 100) || (0 == x % 400) ) {
    alert ( x + " is a leap year")
  }
  else {
    alert(x + " is not a leap year")
  }
}
