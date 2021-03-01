var list = document.getElementById("myUL");
function myFunction() {
   txtValue;
   var input = document.getElementById('search');
   var filter = input.value.toUpperCase();
   var li = ul.getElementsByTagName('li');

   for (i = 0; i < li.length; i++) {
     a = li[i].getElementsByTagName('a')[0];
     txtValue = a.textContent || a.innerText;
     if (txtValue.toUpperCase().indexOf(filter) > -1) {
       li[i].style.display = "";
     } else {
       li[i].style.display = "none";
     }
   }
}

function menuHidden() {
  if (list.style.display == "block") {
    list.style.display = "none";
  } else {
    list.style.display = "block";
  }
}
