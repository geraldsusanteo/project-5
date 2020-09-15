
function myFunction() {
  // Declare variables
  var input, filter, div, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  div = document.getElementByclass("div");
  a = div.getElementsByTagName('data-caption');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < a.length; i++) {
    b = li[i].getElementsByTagName("b")[0];
    txtValue = b.textContent || b.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}
