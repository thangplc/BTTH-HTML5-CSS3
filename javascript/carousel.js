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
        document.getElementById("newProduct-phoneID").innerHTML="";
        document.getElementById("newProduct-tabletID").classList.remove("newProduct-tabletID-hidden");
    }

}
var i = 0;
function runFunc(){
    if(document.getElementsByClassName("btnPlay__icon")[0].children[0].classList.contains("icon-show")){
        document.getElementsByClassName("btnPlay__icon")[0].children[1].classList.add("icon-show")
        document.getElementsByClassName("btnPlay__icon")[0].children[0].classList.remove("icon-show")
        i=0;
    }
    else{
        document.getElementsByClassName("btnPlay__icon")[0].children[0].classList.add("icon-show")
        document.getElementsByClassName("btnPlay__icon")[0].children[1].classList.remove("icon-show")
        i=1;
    }
        document.getElementsByClassName("shape")[0].classList.add("run");
        myLoop();               
}
function myLoop() {
    setTimeout(function() {               
      if (document.getElementsByClassName("shape")[0].classList.contains("run")) {
        document.getElementsByClassName("shape")[0].classList.remove("run");
        document.getElementsByClassName("carsel-next")[0].click(); 
      } 
    //   else {
    //     document.getElementsByClassName("shape")[0].classList.add("run");
    //   }
      if (i === 0){   
        document.getElementsByClassName("shape")[0].classList.add("run");     
        myLoop();           
      }                       
    }, 10000)
}

