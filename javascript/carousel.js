var winWidth;
var winHeight;
$(document).ready(function(){
    $(window).scroll(function(){
        var positionTop=$(document).scrollTop();
        console.log(positionTop);
    if(positionTop>=50){
        $(".newProduct__content").addClass("newProduct__content-showed");
    }
});
});
function windowWidth(){
    if(window.innerWidth !== undefined && window.innerHeight !== undefined) { 
      winWidth = window.innerWidth;
      winHeight = window.innerHeight;
    } else {  
      winWidth = document.documentElement.clientWidth;
      winHeight = document.documentElement.clientHeight;
    }
    changeNewproductElement();
  }

function changeNewproductElement(){
    if (winWidth<768){
        document.getElementById("newProduct-phoneID").appendChild(document.getElementById("newProduct-tabletID__main"));
        document.getElementById("newProduct-tabletID").classList.add("newProduct-tabletID-hidden");
    }
    if(winWidth>=768){
        document.getElementById("newProduct-phoneID").parentNode.removeChild(document.getElementById("newProduct-phoneID"));
        document.getElementById("newProduct-tabletID").classList.remove("newProduct-tabletID-hidden");
    }

}
