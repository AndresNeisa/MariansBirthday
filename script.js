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

var family = [new familyMember(
    "Doña Carmen",
    "CarmenBW",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique amet eaque sapiente numquam obcaecati iste.",
    new Array("01","02","14","08","18","14","06","15"),
    "green"
)]

window.addEventListener("DOMContentLoaded",onLoad);

function onLoad() {
    populate();
}

function populate(){
    var sections = document.getElementsByClassName("section");

    for(var i=1; i < sections.length;i++){
        sections[i].style.backgroundColor = family[i-1].background;
        
        sections[i].getElementsByClassName("name")[0].innerHTML = family[i-1].name;
        sections[i].querySelectorAll("img")[0].src = "./Images/FamilyPng/" + family[i-1].picture + ".png";
        sections[i].querySelectorAll("p")[0].innerHTML = family[i-1].message;
        var logos = sections[i].querySelectorAll("img");
        for(var im = 1; im < logos.length;im ++){
            logos[im].src = "./Images/Small/90sdesign-" + family[i-1].im1[im-1] + ".png";
        }
    }
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