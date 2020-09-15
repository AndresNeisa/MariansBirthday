// document.addEventListener("mousemove", parallax);

window.addEventListener("DOMContentLoaded",onLoad);

function onLoad(){
    
    var myDiv = document.querySelectorAll(".section");
    myDiv.forEach((element) => {
        element.addEventListener("mousemove", parallax)
    });
}

function parallax(e){
    this.querySelectorAll('.decoration').forEach(layer => {
        const speed = layer.getAttribute("data-speed");

        var rotate = "rotate(" + getAngle(layer) + "deg) ";

        var xMove = e.pageX < window.innerWidth/2 ? e.pageX : - e.pageX;

        const x = (window.innerWidth - e.pageX * speed)/100
        const y = (window.innerHeight - e.pageY * speed)/100
        layer.style.transform = rotate +  "translateX(" + x + "px) translateY(" + y + "px)";
    });
}


function getAngle(element){
    try{
        var st = window.getComputedStyle(element,null);
        var tr = st.getPropertyValue("-webkit-transform") ||
             st.getPropertyValue("-moz-transform") ||
             st.getPropertyValue("-ms-transform") ||
             st.getPropertyValue("-o-transform") ||
             st.getPropertyValue("transform") ||
             "Either no transform set, or browser doesn't do getComputedStyle";
    
        var values = tr.split('(')[1],
        values = values.split(')')[0],
        values = values.split(',');
    
        var a = values[0]; // 0.866025
        var b = values[1]; // 0.5
        var c = values[2]; // -0.5
        var d = values[3]; // 0.866025
    
        var angle = Math.round(Math.asin(b) * (180/Math.PI));
        return angle
    }
    catch{
        return 0;
    }
    
}