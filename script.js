function mobileMenu() {
            document.getElementById("mobileMenu").classList.toggle("show");
}

//End of Responsive Menu

function dropCure() {
    var Up = document.getElementById("cure");
    var Drop = document.getElementById("cureDescription");
    var HideCare = document.getElementById("careDescription");
    var HideGrow = document.getElementById("growDescription");
	if (Up.classList.contains("drop-icons-animation-down")) {
        document.getElementById("cure").classList.toggle("drop-icons-animation-up")
        } else {
        document.getElementById("cure").classList.toggle("drop-icons-animation-down");
        }
    if (Drop.classList.contains("description-animation")) {
        document.getElementById("cureDescription").classList.toggle("description-animation-reverse")
        } else {
        		document.getElementById("cureDescription").classList.toggle("description-animation"); 
        }
    if ((HideCare.classList.contains("description-animation")) || (Up.classList.contains("drop-icons-animation-down"))) {
        document.getElementById("careDescription").className = "description";
        document.getElementById("care").className = "drop-icons";
        }
    if ((HideGrow.classList.contains("description-animation")) || (Up.classList.contains("drop-icons-animation-down"))) {
        document.getElementById("growDescription").className = "description";
        document.getElementById("grow").className = "drop-icons";
        }

}

function dropCare() {
    var Up = document.getElementById("care");
    var Drop = document.getElementById("careDescription");
    var HideCure = document.getElementById("cureDescription");
    var HideGrow = document.getElementById("growDescription");
	if (Up.classList.contains("drop-icons-animation-down")) {
        document.getElementById("care").classList.toggle("drop-icons-animation-up")
        } else {
        document.getElementById("care").classList.toggle("drop-icons-animation-down");
        }
    if (Drop.classList.contains("description-animation")) {
        document.getElementById("careDescription").classList.toggle("description-animation-reverse")
        } else {
        document.getElementById("careDescription").classList.toggle("description-animation"); 
        }
    if ((HideCure.classList.contains("description-animation")) || (Up.classList.contains("drop-icons-animation-down"))) {
        document.getElementById("cureDescription").className = "description";
        document.getElementById("cure").className = "drop-icons";
        }
    if ((HideGrow.classList.contains("description-animation")) || (Up.classList.contains("drop-icons-animation-down"))) {
        document.getElementById("growDescription").className = "description";
        document.getElementById("grow").className = "drop-icons";
        }

}

function dropGrow() {
    var Up = document.getElementById("grow");
    var Drop = document.getElementById("growDescription");
    var HideCure = document.getElementById("cureDescription");
    var HideCare = document.getElementById("careDescription");
	if (Up.classList.contains("drop-icons-animation-down")) {
        document.getElementById("grow").classList.toggle("drop-icons-animation-up")
        } else {
        document.getElementById("grow").classList.toggle("drop-icons-animation-down");
        }
    if (Drop.classList.contains("description-animation")) {
        document.getElementById("growDescription").classList.toggle("description-animation-reverse")
        } else {
        document.getElementById("growDescription").classList.toggle("description-animation"); 
        }
    if ((HideCure.classList.contains("description-animation")) || (Up.classList.contains("drop-icons-animation-down"))) {
        document.getElementById("cureDescription").className = "description";
        document.getElementById("cure").className = "drop-icons";
        }
    if ((HideCare.classList.contains("description-animation")) || (Up.classList.contains("drop-icons-animation-down"))) {
        document.getElementById("careDescription").className = "description";
        document.getElementById("care").className = "drop-icons";
        }

}

//End of Icons & Descriptions animations

function appendIcons(x) {

    if (x.matches) {
        var threeColumn = document.getElementById("three-column-tablet");
        var care = document.getElementById("append-care");
        var grow = document.getElementById("append-grow");
        var stayCare = document.getElementById("care");

        threeColumn.appendChild(care);
        threeColumn.appendChild(grow);
    } else {
        var care = document.getElementById("append-care");
        var grow = document.getElementById("append-grow");
        var mobileCare= document.getElementById("care-mobile");
        var mobileGrow= document.getElementById("grow-mobile");
        var stayCare = document.getElementById("care");

        mobileCare.appendChild(care);
        mobileGrow.appendChild(grow);
    }
}


var x = window.matchMedia("(min-width: 768px)")
appendIcons(x)
x.addListener(appendIcons)

//End of Responsive Icons

//Start of Hide Mobile Menu

function hideMenu(x) {

    if (x.matches) {
        
        document.getElementById("mobileMenu").classList.remove("show");

    }
}


var x = window.matchMedia("(min-width: 1024px)")
hideMenu(x)
x.addListener(hideMenu)

//End of Hide Mobile Menu