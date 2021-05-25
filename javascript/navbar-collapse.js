document.getElementById("vehicle").onclick = getidButton;
document.getElementById("tool").onclick = getidButton;
document.getElementById("owner").onclick = getidButton;
document.getElementById("explore").onclick = getidButton;
document.getElementById("navbarbtn").onclick = getidMobileBtn;
function getidButton(clicked) {

    document.getElementById("vehicle").classList.remove("is-active");
    document.getElementById("tool").classList.remove("is-active");
    document.getElementById("owner").classList.remove("is-active");
    document.getElementById("explore").classList.remove("is-active");
    document.getElementsByClassName("vehicleList__content")[0].style.position = "relative";
    var idBtn = this.id;
    if (idBtn == "vehicle") {
        var element = document.getElementsByTagName("html");
        element[0].classList.toggle("submenu-opened")
        document.getElementById("navtool").classList.remove("navdrop__show");
        document.getElementById("navowners").classList.remove("navdrop__show");
        document.getElementById("navExplore").classList.remove("navdrop__show");
        document.getElementById("navVehicle").classList.toggle("vehicleList-show");
        if (document.getElementById("navVehicle").classList.contains("vehicleList-show")) {
            document.getElementById(idBtn).classList.toggle("is-active");
            // document.getElementsByClassName("vehicleList__content")[0].style.position="fixed";
        }
        else {
            document.getElementById(idBtn).classList.remove("is-active");
        }

    }
    if (idBtn == "tool") {
        document.getElementById("navVehicle").classList.remove("vehicleList-show");
        document.getElementById("navowners").classList.remove("navdrop__show");
        document.getElementById("navExplore").classList.remove("navdrop__show");
        document.getElementById("navtool").classList.toggle("navdrop__show");
        if (document.getElementById("navtool").classList.contains("navdrop__show")) {
            document.getElementById(idBtn).classList.toggle("is-active");
        }
        else {
            document.getElementById(idBtn).classList.remove("is-active");
        }
    }
    if (idBtn == "owner") {
        document.getElementById("navVehicle").classList.remove("vehicleList-show");
        document.getElementById("navtool").classList.remove("navdrop__show");
        document.getElementById("navExplore").classList.remove("navdrop__show");
        document.getElementById("navowners").classList.toggle("navdrop__show");
        if (document.getElementById("navowners").classList.contains("navdrop__show")) {
            document.getElementById(idBtn).classList.toggle("is-active");
        }
        else {
            document.getElementById(idBtn).classList.remove("is-active");
        }
    }
    if (idBtn == "explore") {
        document.getElementById("navVehicle").classList.remove("vehicleList-show");
        document.getElementById("navtool").classList.remove("navdrop__show");
        document.getElementById("navowners").classList.remove("navdrop__show");
        document.getElementById("navExplore").classList.toggle("navdrop__show");
        if (document.getElementById("navExplore").classList.contains("navdrop__show")) {
            document.getElementById(idBtn).classList.toggle("is-active");
        }
        else {
            document.getElementById(idBtn).classList.remove("is-active");
        }
    }
}
// mobile-first
function getidMobileBtn(clicked) {
    document.getElementById("navbarbtn").classList.toggle("hamburger__btnclick");
    if(document.getElementById("navbarMenu").style.display==="block"){
        setTimeout(function() {
            document.getElementById("navbarMenu").style.display="none";
        }, 1000);
    }
    else{
        document.getElementById("navbarMenu").style.display="block";
    }
    setTimeout(function(){
        document.getElementById("navbarMenu").classList.toggle("secondary-nav");
    }, 300);
    // document.getElementById("menuList").classList.toggle("secondary-nav__opened")
}