var nySirkel;

nySirkel = setInterval(lagSirkel, 1)
/*
function plasserSirkel(){
    var sirkel = document.getElementById("sirkel");
    sirkel.style.height = Math.floor(Math.random() * 400) + 1 + "px";
    sirkel.style.width = Math.floor(Math.random() * 650) + 1 + "px";
    document.getElementById("sirkelContainer").innerHTML += "<div id=sirkel></div>";
}*/

function lagSirkel() {
  var minsteStorrelse = 20;
  var maksStorrelse = 100;
  var container = document.getElementById("sirkelContainer");


  var storrelse = tilfeldigTall(minsteStorrelse, maksStorrelse);
  var div = document.createElement("div");
  div.classList.add("aDiv");
  div.style.width = storrelse + 'px';
  div.style.height = storrelse + 'px';
  var farge = tilfeldigFarge();
  div.style.backgroundColor = 'hsl(' + farge.hue + ',' + farge.saturation + '%,' + farge.lightness + '%)';
  div.style.borderRadius = 50 + "%";
  div.style.position = "absolute";
  div.style.left = Math.floor(Math.random() * 96) +1 + "%";
  div.style.top = Math.floor(Math.random() * 96) +1 + "%";
  container.appendChild(div);
}


function tilfeldigFarge() {
  var hueCenter = 50;
  var hueRange = 100;
  var saturationCenter = 50;
  var saturationRange = 15;
  var lightnessCenter = 50;
  var lightnessRange = 20;
  var hue = tilfeldigTall(hueCenter - hueRange, hueCenter + hueRange);
  var saturation = tilfeldigTall(saturationCenter - saturationRange, saturationCenter + saturationRange);
  var lightness = tilfeldigTall(lightnessCenter - lightnessRange, lightnessCenter + lightnessRange);
  return {
    hue: hue,
    saturation: saturation,
    lightness: lightness
  };

}


function tilfeldigTall(min, maks) {
  // Returns a random integer between min and max. 
  return Math.floor(Math.random() * (maks - min + 1)) + min;
}