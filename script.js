new fullpage('#fullpage', {
    autoScrolling: true,
});

// var images = document.getElementsByTagName("img");

// images[1].addEventListener("click",hover);

// function hover(image){
//     image.src="./Images/png/Marian.png"
// }

// function hoverDown(image){
//     image.src="./Images/png/MarianBW.png"
// }

class familyMember {
    constructor(name,picture,message,im1,background){
        this.name = name;
        this.picture = picture;
        this.message = message;
        this.im1 = im1;
        this.background = background;
    }
}

var family = [
    new familyMember(
        "Doña Carmen",
        "CarmenBW",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique amet eaque sapiente numquam obcaecati iste.",
        new Array("01","02","14","08","18","14","06","15"),
        "RGB(40,126,158)"
    ),
    new familyMember(
        "Don C",
        "DonCarlosBW",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique amet eaque sapiente numquam obcaecati iste.",
        new Array("01","02","14","08","18","14","06","15"),
        "RGB(179,52,108)"
    ),
    new familyMember(
        "Doña Diana",
        "DianaBW",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique amet eaque sapiente numquam obcaecati iste.",
        new Array("01","02","14","08","18","14","06","15"),
        "RGB(40,126,158)"
    ),
    new familyMember(
        "Doña C",
        "TachaBW",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique amet eaque sapiente numquam obcaecati iste.",
        new Array("01","02","14","08","18","14","06","15"),
        "RGB(179,52,108)"
    )
]

var familyTorres = [
    new familyMember(
        "La mami",
        "DorisBW",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique amet eaque sapiente numquam obcaecati iste.",
        new Array("01","02","14","08","18","14","06","15"),
        "RGB(131,44,118)"
    ),
    new familyMember(
        "El papi",
        "JorgeBW",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique amet eaque sapiente numquam obcaecati iste.",
        new Array("01","02","14","08","18","14","06","15"),
        "RGB(228,168,52)"
    ),
    new familyMember(
        "Estebis",
        "EstebanBW",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique amet eaque sapiente numquam obcaecati iste.",
        new Array("01","02","14","08","18","14","06","15"),
        "RGB(228,168,52)"
    ),
    new familyMember(
        "La Melis",
        "MelisBW",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique amet eaque sapiente numquam obcaecati iste.",
        new Array("01","02","14","08","18","14","06","15"),
        "RGB(131,44,118)"
    ),
    new familyMember(
        "La Tia",
        "MarlenBW",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique amet eaque sapiente numquam obcaecati iste.",
        new Array("01","02","14","08","18","14","06","15"),
        "RGB(131,44,118)"
    )
]

window.addEventListener("DOMContentLoaded",onLoad);

function onLoad() {
    populate();
}

function populate(){
    var sections = document.getElementsByClassName("section");

    for(var i=1; i < sections.length;i++){
        var member = i % 2 == 0 ? getRandom(family) : getRandom(familyTorres);

        sections[i].style.backgroundColor = member.background;
        sections[i].classList.add(member.picture)
        
        sections[i].getElementsByClassName("name")[0].innerHTML = member.name;
        sections[i].querySelectorAll("img")[0].src = "./Images/FamilyPng/" + member.picture + ".png";
        sections[i].querySelectorAll("p")[0].innerHTML = member.message;
        var logos = sections[i].querySelectorAll("img");
        for(var im = 1; im < logos.length;im ++){
            logos[im].src = "./Images/Small/90sdesign-" + member.im1[im-1] + ".png";
        }
    }
}

function getRandom(myArray){
    var index = Math.floor(Math.random() * (myArray.length));
    console.log(index);
    var temporaryMember = myArray[index];
    console.log(temporaryMember);
    myArray.splice(index, 1);
    console.log(myArray);
    return temporaryMember;
}



// set up text to print, each item in array is new line
var aText = new Array(
    "There are only 10 types of people in the world: Those who understand binary, and those who don't"
);
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
    
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
     
function typewriter()
{
    sContents =  ' ';
    iRow = Math.max(0, iIndex-iScrollAt);
    var destination = document.getElementById("test");
    
    while ( iRow < iIndex ) {
    sContents += aText[iRow++] + '<br />';
    }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
    if ( iTextPos++ == iArrLength ) {
    iTextPos = 0;
    iIndex++;
    if ( iIndex != aText.length ) {
    iArrLength = aText[iIndex].length;
    setTimeout("typewriter()", 500);
    }
    } else {
    setTimeout("typewriter()", iSpeed);
    }
}
    
    
typewriter();

