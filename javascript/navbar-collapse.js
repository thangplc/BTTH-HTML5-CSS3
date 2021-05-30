// define button id
document.getElementById("toolID").onclick = getidButton;
document.getElementById("vehicle").onclick = getidButton;
document.getElementById("ownerID").onclick = getidButton;
document.getElementById("exploreID").onclick = getidButton;
document.getElementById("navbarbtn").onclick = getidMobileBtn;

// mobile button navbar
function getidMobileBtn(clicked) {
    document.getElementById("navbarbtn").classList.toggle("hamburger__btnclick");
    document.getElementById("languageId").innerHTML = "Language";
    var element = document.getElementsByTagName("html");
    element[0].classList.toggle("submenu-opened")
    if (document.getElementById("navbarMenu").style.display === "block") {
        setTimeout(function () {
            document.getElementById("navbarMenu").style.display = "none";
        }, 1000);
    }
    else {
        document.getElementById("navbarMenu").style.display = "block";
    }
    setTimeout(function () {
        document.getElementById("navbarMenu").classList.toggle("secondary-nav");
    }, 300);
    // document.getElementById("menuList").classList.toggle("secondary-nav__opened")
}
// change Language
document.getElementById("EN").onclick = changeL;
document.getElementById("ES").onclick = changeL;
function changeL(clicked) {
    var enID = document.getElementById("EN");
    var esID = document.getElementById("ES");
    if (this.id == enID.id) {
        if (!enID.classList.contains("language__active")) {
            enID.classList.add("language__active");
            esID.classList.remove("language__active");
        }
    }
    if (this.id == esID.id) {
        if (!esID.classList.contains("language__active")) {
            esID.classList.add("language__active");
            enID.classList.remove("language__active");
        }
    }
}

// close sub-menu

document.getElementById("headerVehicleID").onclick = closeSubMenu;
document.getElementById("headerToolID").onclick = closeSubMenu;
document.getElementById("headerOwnerID").onclick = closeSubMenu;
document.getElementById("headerExploreID").onclick = closeSubMenu;
document.getElementById("headersubID").onclick=closeSubMenu;
document.getElementById("headercarID").onclick=closeSubMenu;
document.getElementById("headervantruckID").onclick=closeSubMenu;
document.getElementById("headerelectricedID").onclick=closeSubMenu;
function closeSubMenu(clicked) {
    switch (this.id) {
        case "headerVehicleID":
            document.getElementById("navVehicle").classList.remove("vehicleList-show");
            setTimeout(function(){
                document.getElementsByClassName("vehicleList__content")[0].classList.remove("vehicleList__content-showed");
            }, 600);
            break;
        case "headerToolID":
            document.getElementById("navtool").classList.remove("navdrop__show");
            break;
        case "headerOwnerID":
            document.getElementById("navowners").classList.remove("navdrop__show");
            break;
        case "headerExploreID":
            document.getElementById("navExplore").classList.remove("navdrop__show");
            break;
        case "headersubID":
            document.getElementsByClassName("vehicleList__carInfo")[0].classList.remove("vehicleList__carInfo-trans");
            setTimeout(function() {
                document.getElementsByClassName("vehicleList__carInfo")[0].classList.remove("vehicleList__carInfo-showed");
                document.getElementById("suvscross").classList.remove("vehicleList__carList-showed");
            }, 600);
        case "headercarID":
            document.getElementsByClassName("vehicleList__carInfo")[0].classList.remove("vehicleList__carInfo-trans");
            setTimeout(function() {
                document.getElementsByClassName("vehicleList__carInfo")[0].classList.remove("vehicleList__carInfo-showed");
                document.getElementById("cars-sedan").classList.remove("vehicleList__carList-showed");
                document.getElementById("cars-hachback").classList.remove("vehicleList__carList-showed");
            }, 600);
        case "headervantruckID":
            document.getElementsByClassName("vehicleList__carInfo")[0].classList.remove("vehicleList__carInfo-trans");
            setTimeout(function() {
                document.getElementsByClassName("vehicleList__carInfo")[0].classList.remove("vehicleList__carInfo-showed");
                document.getElementById("minivan-truck").classList.remove("vehicleList__carList-showed");
            }, 600);
        case "headerelectricedID":
            document.getElementsByClassName("vehicleList__carInfo")[0].classList.remove("vehicleList__carInfo-trans");
            setTimeout(function() {
                document.getElementsByClassName("vehicleList__carInfo")[0].classList.remove("vehicleList__carInfo-showed");
                document.getElementById("electrified").classList.remove("vehicleList__carList-showed");
            }, 600);
        }
        


}

// collapse Menu
function getidButton(clicked) {
    document.getElementById("vehicle").classList.remove("is-active");
    document.getElementById("toolID").classList.remove("is-active");
    document.getElementById("ownerID").classList.remove("is-active");
    document.getElementById("exploreID").classList.remove("is-active");
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
            document.getElementsByClassName("vehicleList__content")[0].classList.add("vehicleList__content-showed");
        }
        else {
            document.getElementById(idBtn).classList.remove("is-active");
        }

    }
    if (idBtn == "toolID") {
        document.getElementById("navVehicle").classList.remove("vehicleList-show");
        document.getElementById("navowners").classList.remove("navdrop__show");
        document.getElementById("navExplore").classList.remove("navdrop__show");
        document.getElementById("navtool").classList.toggle("navdrop__show");
        if (document.getElementById("navtool").classList.contains("navdrop__show")) {
            document.getElementById("tool").classList.toggle("is-active");
        }
        else {
            document.getElementById("tool").classList.remove("is-active");
        }
    }
    if (idBtn == "ownerID") {
        document.getElementById("navVehicle").classList.remove("vehicleList-show");
        document.getElementById("navtool").classList.remove("navdrop__show");
        document.getElementById("navExplore").classList.remove("navdrop__show");
        document.getElementById("navowners").classList.toggle("navdrop__show");
        if (document.getElementById("navowners").classList.contains("navdrop__show")) {
            document.getElementById("owner").classList.toggle("is-active");
        }
        else {
            document.getElementById("owner").classList.remove("is-active");
        }
    }
    if (idBtn == "exploreID") {
        document.getElementById("navVehicle").classList.remove("vehicleList-show");
        document.getElementById("navtool").classList.remove("navdrop__show");
        document.getElementById("navowners").classList.remove("navdrop__show");
        document.getElementById("navExplore").classList.toggle("navdrop__show");
        if (document.getElementById("navExplore").classList.contains("navdrop__show")) {
            document.getElementById("explore").classList.toggle("is-active");
        }
        else {
            document.getElementById("explore").classList.remove("is-active");
        }
    }
}

// display vehicle list
document.getElementById("suvID").onclick=VehicleListShow;
document.getElementById("carsID").onclick=VehicleListShow;
document.getElementById("van-truckID").onclick=VehicleListShow;
document.getElementById("electricID").onclick=VehicleListShow;

function VehicleListShow(clicked){
    switch(this.id){
        case "suvID":
            document.getElementsByClassName("vehicleList__carInfo")[0].classList.toggle("vehicleList__carInfo-showed");
            document.getElementById("suvscross").classList.toggle("vehicleList__carList-showed");
            setTimeout(function(){
                document.getElementsByClassName("vehicleList__carInfo")[0].classList.toggle("vehicleList__carInfo-trans"); 
            }, 200);
            break;
        case "carsID":
            document.getElementsByClassName("vehicleList__carInfo")[0].classList.toggle("vehicleList__carInfo-showed");
            document.getElementById("cars-sedan").classList.toggle("vehicleList__carList-showed");
            document.getElementById("cars-hachback").classList.toggle("vehicleList__carList-showed");
            setTimeout(function(){
                document.getElementsByClassName("vehicleList__carInfo")[0].classList.toggle("vehicleList__carInfo-trans"); 
            }, 200);
            break;
        case "van-truckID":
            document.getElementsByClassName("vehicleList__carInfo")[0].classList.toggle("vehicleList__carInfo-showed");
            document.getElementById("minivan-truck").classList.toggle("vehicleList__carList-showed");
            setTimeout(function(){
                document.getElementsByClassName("vehicleList__carInfo")[0].classList.toggle("vehicleList__carInfo-trans");
            }, 200);
            break;
        case "electricID":
            document.getElementsByClassName("vehicleList__carInfo")[0].classList.toggle("vehicleList__carInfo-showed");
            document.getElementById("electrified").classList.toggle("vehicleList__carList-showed");
            setTimeout(function(){
                document.getElementsByClassName("vehicleList__carInfo")[0].classList.toggle("vehicleList__carInfo-trans");
            }, 200);
            break;
    }
}
