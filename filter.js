function filterObjects(category){ 
    //find all boxes
    let allBoxes = document.querySelectorAll('.objects .box');
    // show all if cateogry is 'all'
    if(category == "all"){
        allBoxes.forEach(function(el){ //The forEach() method calls a function once for each element in an array, in order.
            el.style.display = 'block';
        });
    } else {
        // Else show category only.
        allBoxes.forEach(function(el){
            el.style.display = 'none';
        });

        let categoryBoxes = document.querySelectorAll('.objects .' + category);
        categoryBoxes.forEach(function(el){
            el.style.display = 'block'; 
        });
    }
}

function myFunction() {
    var x = document.getElementByClass("");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
