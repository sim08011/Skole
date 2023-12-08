var quiz = 4; // Hvilket nummer quizen er
var quizFremgang = localStorage.getItem("quizFremgang"); // Sjekker fremgangen til brukeren

function lagreQuizFremgang(){
    if(quizFremgang < quiz){ // Hvis brukeren sin quizFremgang er mindre enn quizen de har kommet til, lagrer den quizNummeret til quizFremgang på 
        localStorage.setItem("quizFremgang", quiz);
    }
}



var mineSporsmal = [
    {
      sporsmal: "Spørsmål 1: Hvor mange siffer er det i det binære tallsystem?",
      svar: {
        a: '10',
        b: '2',
        c: '1'
      },
      correctAnswer: 'b'
    },
    {
      sporsmal: "Spørsmål 2: Hvor mange bits er i en byte?",
      svar: {
        a: '10',
        b: '2',
        c: '8'
      },
      correctAnswer: 'c'
    },
    {
        sporsmal: "Spørsmål 3: Hva er en IP?",
        svar: {
          a: 'En adresse for nettverksenheter',
          b: 'En nettverksenhet',
          c: 'En formkake'
        },
        correctAnswer: 'a'
      }
  ];
  
  var quizBeholder = document.getElementById('quiz');
  var resultater = document.getElementById('resultater');
  var sjekkKnapp = document.getElementById('sjekk');
  
  lagQuiz(mineSporsmal, quizBeholder, resultater, sjekkKnapp);
  
  function lagQuiz(sporsmal, quizBeholder, resultater, sjekkKnapp){
  
    function visSporsmal(sporsmal, quizBeholder){
      // we'll need a place to store the output and the answer choices
      var output = [];
      var svar;
  
      // for each sporsmal...
      for(var i=0; i<sporsmal.length; i++){
        
        // first reset the list of svar
        svar = [];
  
        // for each available answer...
        for(letter in sporsmal[i].svar){
  
          // ...add an html radio button
          svar.push(
            '<label>'
              + '<input type="radio" name="sporsmal'+i+'" value="'+letter+'">'
              + letter + ': '
              + sporsmal[i].svar[letter]
            + '</label><br>'
          );
        }
  
        // add this sporsmal and its svar to the output
        output.push(
          '<div class="sporsmal">' + sporsmal[i].sporsmal + '</div>'
          + '<div class="svar">' + svar.join('') + '</div>'
        );
      }
  
      // finally combine our output list into one string of html and put it on the page
      quizBeholder.innerHTML = output.join('');
    }
  
  
    function visResultater(sporsmal, quizBeholder, resultater){
      
      // gather answer containers from our quiz
      var answerContainers = quizBeholder.querySelectorAll('.svar');
      
      // keep track of user's svar
      var userAnswer = '';
      var numCorrect = 0;
      
      // for each sporsmal...
      for(var i=0; i<sporsmal.length; i++){
  
        // find selected answer
        userAnswer = (answerContainers[i].querySelector('input[name=sporsmal'+i+']:checked')||{}).value;
        
        // if answer is correct
        if(userAnswer===sporsmal[i].correctAnswer){
          // add to the number of correct svar
          numCorrect++;
          
          // color the svar green
          answerContainers[i].style.color = '#008004';
        }
        // if answer is wrong or blank
        else{
          // color the svar red
          answerContainers[i].style.color = 'red';
        }
      }
  
      // show number of correct svar out of total
      resultater.innerHTML = numCorrect + ' av ' + sporsmal.length + " er riktige.";
    }
  
    // show sporsmal right away
    visSporsmal(sporsmal, quizBeholder);
    
    // on submit, show results
    sjekkKnapp.onclick = function(){
      visResultater(sporsmal, quizBeholder, resultater);
    }
  
  }