var myQuestions = [
    {
      question: "1. Du skal krysse et togspor og hører et tog i det fjerne. Hva gjør du?",
      answers: {
        a: 'Krysser togsporet umiddelbart, selv om toget nærmer seg.',
        b: 'Venter på toget for å passere og krysser toget etter at det har passert.',
      },
      correctAnswer: 'b'
    },
    {
      question: "2. Du blir utfordret til å utføre en basehopp fra en bro uten å ha erfaring eller riktig utstyr. Hva gjør du?",
      answers: {
        a: 'Utfører basehoppet uten å tenke på risikoen.',
        b: 'Avstår fra basehoppet og søker profesjonell opplæring og riktig utstyr først.',
      },
      correctAnswer: 'b'
    },
    {
        question: "3. Du kjører bil på en smal vei med mange svinger og en bratt klippe på den ene siden av veien. En annen bil kommer kjørende i motsatt retning. Hva gjør du?",
        answers: {
          a: 'Stanser bilen og venter til den andre bilen har passert.',
          b: 'Velger å kjøre langs den motsatte siden av veien, selv om det betyr at du må kjøre ut på kanten av veien som er nærmest klippen.',
        },
        correctAnswer: 'a'
      },
      {
        question: "4. Du har vært på fest og bilen din står utenfor. Du har tenkt til å dra hjem. Hva gjør du?",
        answers: {
          a: 'Kjører bilen din hjem.',
          b: 'Tar bussen.',
        },
        correctAnswer: 'b'
      }
  ];
  
  var quizContainer = document.getElementById('quiz');
  var resultsContainer = document.getElementById('results');
  var submitButton = document.getElementById('submit');
  
  function makeQuiz(){
      document.getElementById("spill").remove();
      generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
      submitButton.style.visibility = "visible";

  }
  
  
  function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
  
    function showQuestions(questions, quizContainer){
      // we'll need a place to store the output and the answer choices
      var output = [];
      var answers;
  
      // for each question...
      for(var i=0; i<questions.length; i++){
        
        // first reset the list of answers
        answers = [];
  
        // for each available answer...
        for(letter in questions[i].answers){
  
          // ...add an html radio button
          answers.push(
            '<label>'
              + '<input type="radio" name="question'+i+'" value="'+letter+'">'
              + letter + ': '
              + questions[i].answers[letter]
            + '</label><br>'
          );
        }
  
        // add this question and its answers to the output
        output.push(
          '<br><br><div class="question">' + questions[i].question + '</div>'
          + '<div class="answers">' + answers.join('') + '</div>'
        );
      }
  
      // finally combine our output list into one string of html and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
  
    function showResults(questions, quizContainer, resultsContainer){
      
      // gather answer containers from our quiz
      var answerContainers = quizContainer.querySelectorAll('.answers');
      
      // keep track of user's answers
      var userAnswer = '';
      var numCorrect = 0;
      
      // for each question...
      for(var i=0; i<questions.length; i++){
  
        // find selected answer
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
        
        // if answer is correct
        if(userAnswer===questions[i].correctAnswer){
          // add to the number of correct answers
          numCorrect++;
          
          // color the answers green
          answerContainers[i].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[i].style.color = 'red';
        }
      }
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = numCorrect + ' av ' + questions.length;
    }
  
    // show questions right away
    showQuestions(questions, quizContainer);
    
    // on submit, show results
    submitButton.onclick = function(){
      showResults(questions, quizContainer, resultsContainer);
    }
  
  }