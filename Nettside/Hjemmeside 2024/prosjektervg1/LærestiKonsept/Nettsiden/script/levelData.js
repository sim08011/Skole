var levelFremgang = localStorage.getItem("levelFremgang");
var quizFremgang = localStorage.getItem("quizFremgang");


function lastLevelFremgang(){

    if(levelFremgang > 0){
        document.getElementById('level1').style.borderColor = "#bfff00";
    }
    if(levelFremgang > 1){
        document.getElementById('level2').style.borderColor = "#bfff00";
    }
    if(levelFremgang > 2){
        document.getElementById('level3').style.borderColor = "#bfff00";
    }
    if(levelFremgang > 3){
        document.getElementById('level4').style.borderColor = "#bfff00";
    }
    if(levelFremgang > 4){
        document.getElementById('level5').style.borderColor = "#bfff00";
    }
    if(levelFremgang > 5){
        document.getElementById('level6').style.borderColor = "#bfff00";
    }
    if(levelFremgang > 6){
        document.getElementById('level7').style.borderColor = "#bfff00";
    }
    if(levelFremgang > 7){
        document.getElementById('level8').style.borderColor = "#bfff00";
    }
    if(levelFremgang > 8){
        document.getElementById('level9').style.borderColor = "#bfff00";
    }
    if(levelFremgang > 9){
        document.getElementById('level10').style.borderColor = "#bfff00";
    }
    if(levelFremgang > 10){
        document.getElementById('level11').style.borderColor = "#bfff00";
    } 

    if(quizFremgang > 0){
        document.getElementById('quiz1').style.borderColor = "#bfff00";
    }
    if(quizFremgang > 1){
        document.getElementById('quiz2').style.borderColor = "#bfff00";
    }
    if(quizFremgang > 2){
        document.getElementById('quiz3').style.borderColor = "#bfff00";
    }
    if(quizFremgang > 3){
        document.getElementById('quiz4').style.borderColor = "#bfff00";
    }
}

