// Select mobiles-main-container, mini-search, search-btn

var mobilescontainermain = document.querySelector(".mobiles-container-main");
var minisearch = document.querySelector(".mini-search");
var mobilescontainer = mobilescontainermain.querySelectorAll("div");

// Function

 minisearch.addEventListener("keyup",function(event){
    
    var enteredvalue = event.target.value.toUpperCase();

    for(i=0;i<mobilescontainer.length;i=i+1){

        var mobileslist = mobilescontainer[i].querySelector("span.mobile-name").textContent;
        if(mobileslist.toUpperCase().indexOf(enteredvalue) < 0){
            mobilescontainer[i].style.display="none"
        }
        else{
            mobilescontainer[i].style.display="block"
        }
    }
 })