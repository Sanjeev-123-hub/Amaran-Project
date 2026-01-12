// Select dresses-main-container, mimni-search, search-btn

var dressescontainermain = document.querySelector(".dresses-container-main");
var minisearch = document.querySelector(".mini-search");
var dressescontainer = dressescontainermain.querySelectorAll("div");

// Function

 minisearch.addEventListener("keyup",function(event){
    
    var enteredvalue = event.target.value.toUpperCase();

    for(i=0;i<dressescontainer.length;i=i+1){

        var dresseslist = dressescontainer[i].querySelector("span.dress-name").textContent;
        if(dresseslist.toUpperCase().indexOf(enteredvalue) < 0){
            dressescontainer[i].style.display="none"
        }
        else{
            dressescontainer[i].style.display="block"
        }
    }
 })