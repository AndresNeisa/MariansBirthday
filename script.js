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
        "Feliz feliz día chinita, te quiero mucho. Dios te ayude siempre.",
        new Array("01","02","14","08","18","14","06","15"),
        "RGB(40,126,158)"
    ),
    new familyMember(
        "Don C",
        "DonCarlosBW",
        "Mary, eres una mujer arriesgada y valiente, deseo que cumplas muchos años más y que todas tus expectativas se cumplan, te envío un fuerte abrazo.",
        new Array("23","23","19","08","03","05","18","21"),
        "RGB(179,52,108)"
    ),
    new familyMember(
        "Doña Diana",
        "DianaBW",
        "Marian, eres una persona muy tierna y especial, gracias por aguantarte al negrito, te quiero mucho... que viva el mestizaje.",
        new Array("04","21","23","21","18","03","02","02"),
        "RGB(40,126,158)"
    ),
    new familyMember(
        "Doña C",
        "TachaBW",
        "Feliz cumple gorda, que este día y todos los que Dios te regale esten llenos de mucho amor, paz, sabiduria y mil bendiciones, te quiero mucho, feliz día.",
        new Array("18","06","13","06","13","07","21","03"),
        "RGB(179,52,108)"
    ),
    new familyMember(
        "Katiecita",
        "KatieBW",
        "Marian! Happy birthday! I hope sometime in the near future we can meet because I know we will be amazing friends, keep being awesome!!!",
        new Array("18","06","13","06","13","07","21","03"),
        "RGB(40,126,158)"
    )
]

var familyTorres = [
    new familyMember(
        "La mami",
        "DorisBW",
        "Mi mami, millones de bendiciones en este nuevo año de vida. La quiero muchooooooo.",
        new Array("07","22","10","02","17","04","21","08"),
        "RGB(131,44,118)"
    ),
    new familyMember(
        "El papi",
        "JorgeBW",
        "Hola amor, feliz cumpleaños.",
        new Array("04","06","10","17","01","14","25","15"),
        "RGB(228,168,52)"
    ),
    new familyMember(
        "Estebis",
        "EstebanBW",
        "Hello mijita... feliz cumpleaños, la extraño y la quiero mucho. Un beso Lendy!",
        new Array("07","02","14","08","22","09","13","24"),
        "RGB(228,168,52)"
    ),
    new familyMember(
        "La Melis",
        "MelisBW",
        "Ya, feliz cumpleaños, que sean muchos más para hacer chocolate con pan. La quiero mucho.",
        new Array("02","13","16","07","17","25","06","15"),
        "RGB(131,44,118)"
    ),
    new familyMember(
        "La Tia",
        "MarlenBW",
        "Mi mona hermosa disfruta cada instante de la vida con el corazón pero sin olvidar la razón. Te quiere tu tía Lelén. FELIZ CUMPLEAÑOS. Dios te bendiga.",
        new Array("01","04","07","08","22","21","06","15"),
        "RGB(131,44,118)"
    )
]

var familyCopy = [
    new familyMember(
        "Doña Carmen",
        "CarmenBW",
        "Feliz feliz día chinita, te quiero mucho. Dios te ayude siempre.",
        new Array("01","02","14","08","18","14","06","15"),
        "RGB(40,126,158)"
    ),
    new familyMember(
        "Don C",
        "DonCarlosBW",
        "Mary, eres una mujer arriesgada y valiente, deseo que cumplas muchos años más y que todas tus expectativas se cumplan, te envío un fuerte abrazo.",
        new Array("23","23","19","08","03","05","18","21"),
        "RGB(179,52,108)"
    ),
    new familyMember(
        "Doña Diana",
        "DianaBW",
        "Marian, eres una persona muy tierna y especial, gracias por aguantarte al negrito, te quiero mucho... que viva el mestizaje.",
        new Array("04","21","23","21","18","03","02","02"),
        "RGB(40,126,158)"
    ),
    new familyMember(
        "Doña C",
        "TachaBW",
        "Feliz cumple gorda, que este día y todos los que Dios te regale esten llenos de mucho amor paz, sabiduria y mil bendiciones, te quiero mucho, feliz día.",
        new Array("18","06","13","06","13","07","21","03"),
        "RGB(179,52,108)"
    ),
    new familyMember(
        "Katiecita",
        "KatieBW",
        "Marian! Happy birthday! I hope sometime in the near future we can meet because I know we will be amazing friends, keep being awesome!!!",
        new Array("18","06","13","06","13","07","21","03"),
        "RGB(40,126,158)"
    )
]

var familyTorresCopy = [
    new familyMember(
        "La mami",
        "DorisBW",
        "Mi mami, millones de bendiciones en este nuevo año de vida. La quiero muchooooooo.",
        new Array("07","22","10","02","17","04","21","08"),
        "RGB(131,44,118)"
    ),
    new familyMember(
        "El papi",
        "JorgeBW",
        "Hola amor, feliz cumpleaños.",
        new Array("04","06","10","17","01","14","25","15"),
        "RGB(228,168,52)"
    ),
    new familyMember(
        "Estebis",
        "EstebanBW",
        "Hello mijita... feliz cumpleaños, la extraño y la quiero mucho. Un beso Lendy!",
        new Array("07","02","14","08","22","09","13","24"),
        "RGB(228,168,52)"
    ),
    new familyMember(
        "La Melis",
        "MelisBW",
        "Ya, feliz cumpleaños, que sean muchos más para hacer chocolate con pan. La quiero mucho.",
        new Array("02","13","16","07","17","25","06","15"),
        "RGB(131,44,118)"
    ),
    new familyMember(
        "La Tia",
        "MarlenBW",
        "Mi mona hermosa disfruta cada instante de la vida con el corazón pero sin olvidar la razón. Te quiere tu tía Lelén. FELIZ CUMPLEAÑOS. Dios te bendiga.",
        new Array("01","04","07","08","22","21","06","15"),
        "RGB(131,44,118)"
    )
]

new fullpage('#fullpage', {
    autoScrolling: true,
    onLeave: (origin, destination, direction) => {
        const section = destination.item;

        if (destination.index > 0 && destination.index < 11){
            const text = section.querySelector("p");
            var name = section.querySelector(".name").innerHTML;
            console.log(name);
            var message = "";

            for (index = 0; index < familyTorresCopy.length; ++index){
                console.log(familyTorresCopy[index].name);
                if(familyTorresCopy[index].name == name){
                    message = familyTorresCopy[index].message;
                }
            }

            for (index = 0; index < familyCopy.length; ++index){
                if(familyCopy[index].name == name){
                    message = familyCopy[index].message;
                }
            }

            startType(message,text);
        }
        
    }
});

// var images = document.getElementsByTagName("img");

// images[1].addEventListener("click",hover);

// function hover(image){
//     image.src="./Images/png/Marian.png"
// }

// function hoverDown(image){
//     image.src="./Images/png/MarianBW.png"
// }



window.addEventListener("DOMContentLoaded",onLoad);

function onLoad() {
    populate();
}

function populate(){
    var sections = document.getElementsByClassName("section");

    for(var i=1; i < sections.length -1;i++){
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
    var temporaryMember = myArray[index];
    myArray.splice(index, 1);
    return temporaryMember;
}

var aText;
var sContents;
var iTextPos;
var iRow;
var iSpeed = 100; // time delay of print out
var iIndex;  // start printing array at this posision
var iArrLength;  // the length of the text array
var iScrollAt;
var running = 0;


function startType(mytext = "ASDFASFSDFASDFASDFASDFas",destination){
    // set up text to print, each item in array is new line
    console.log("Fire");
    aText = new Array(
        mytext
    );
    sContents = ''; // initialise contents variable
    
    iTextPos = 0; // initialise text position
        
    iRow; // initialise current row
    running = 1;

    typewriter(destination);
}
    
    
    

     
function typewriter(destination)
{
    if(running == 0){
        return;
    }
    else {
        iSpeed = 100; // time delay of print out
        iIndex = 0; // start printing array at this posision
        iArrLength = aText[0].length; // the length of the text array
        iScrollAt = 20; // start scrolling up at this many lines
        
    
        sContents =  ' ';
        iRow = Math.max(0, iIndex-iScrollAt);
        
        destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
        if ( iTextPos++ == iArrLength ) {
        iTextPos = 0;
        iIndex++;
        running = 0;
        if ( iIndex != aText.length ) {
        iArrLength = aText[iIndex].length;
        setTimeout(function(){typewriter(destination)}, 500);
        }
        } else {
        setTimeout(function(){typewriter(destination)}, iSpeed);
        }
        console.log(running);
    }
}
    


