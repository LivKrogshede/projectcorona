function myFunction() { //Lavet en funktion der sætter gang i processen
  var input, filter, ul, li, a, i, txtValue; //Får lavet og navngivet variablerne
  input = document.getElementById('searchBox'); //Giver variablerne værdi:
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  ul.style.display = "block";
  li = ul.getElementsByTagName('li');

  for (i = 0; i < li.length; i++) { //påbegynder koden der får searchbox til at virke
    a = li[i].getElementsByTagName('a')[0]; //Tager fat i 'a' tagget
    txtValue = a.textContent || a.innerText; //Sørger for at den kommer ind på HTML
    if (txtValue.toUpperCase().indexOf(filter) > -1) { //Hvis tekst er mere end 0 og matcher med de lister jeg har lavet
      li[i].style.display = ""; //Listen er synlig
    } else {
      li[i].style.display = "none"; //Hvis mindre end 1 så usynlig
    }
  }
}
