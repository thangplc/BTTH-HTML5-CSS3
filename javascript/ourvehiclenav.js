var navtabsItem = document.getElementById("myTab");
document.getElementById("navtabsPre").onclick=selectNavtab;
document.getElementById("navtabsNext").onclick=selectNavtab;
// findnavtabitem();

function selectNavtab(clicked){
    var actived = findnavtabitem();
    navtabsItem.children[actived].children[0].classList.remove("active");
    if (this.id==="navtabsNext"){
        if(actived+1<=5){
            scrollItem(actived);
            navtabsItem.children[actived+1].children[0].click();
        }
        else{
            scrollItem(0);
            navtabsItem.children[0].children[0].click();
        }
    }
    if (this.id==="navtabsPre"){
        if(actived-1>=0){
            if(actived-2<0){
                scrollItem(0);
            }
            else{
                scrollItem(actived-2);
            }
            
            navtabsItem.children[actived-1].children[0].click();
        }
        else{
            scrollItem(5);
            navtabsItem.children[5].children[0].click();
        }
    }
}
function findnavtabitem(){
    var selectionCount =document.querySelectorAll("#myTab>.navtab-item").length;
    let activedID=0;
    for (i=0;i<selectionCount;i++){
        console.log(navtabsItem.children[i].children[0]);

        if (navtabsItem.children[i].children[0].classList.contains("active")){
            activedID=i;
            break;
        }
    }
    return activedID;
}

function scrollItem(varVal){
    if((winWidth>=768)&&(winWidth<=950)){
        navtabsItem.scrollLeft=navtabsItem.scrollWidth - navtabsItem.clientWidth;
    }
    if((winWidth<768)&&(winWidth>550)){
        if(varVal<2){
            navtabsItem.scrollLeft=0;
        }
        else{navtabsItem.scrollLeft= varVal*50;}
    }
    if(winWidth<550){
        navtabsItem.scrollLeft= varVal*200;
    }
    if(varVal===0){
        navtabsItem.scrollLeft=0;
    }
    if(varVal===5){
        navtabsItem.scrollLeft=navtabsItem.scrollWidth - navtabsItem.clientWidth;
    }
}