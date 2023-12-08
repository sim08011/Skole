var gifContainer = document.getElementById("gifContainer");
var startButton = document.getElementById("startButton");
var questionNumber = 0;

var gameContainer = document.getElementById("spill");


const questions = [
    "Skal Teodor på fest?",
    "Bør Teodor kjøre til denne festen med motorsykkelen sin? Festen er 10km unna.",
    "Bør Teodor drikke en form for alkohol?",
    "Hvordan skal Teodor komme seg hjem?"
  ];
  

  const userAnswers = {};
  const questionContainer = document.querySelector(".question-container");
  

  function displayQuestions() {
    document.getElementById("spillTekst").innerHTML = "";
    
    if (questionNumber < questions.length) {
      console.log("Hei sann!");
      const question = questions[questionNumber];
      const questionDiv = document.createElement("div");
      questionDiv.classList.add("question");
      questionDiv.innerHTML = `
        <h3>${question}</h3>
        <label>
          <input type="radio" name="answer-${questionNumber}" value="yes"> Ja
        </label>
        <label>
          <input type="radio" name="answer-${questionNumber}" value="no"> Nei
        </label>
      `;
      questionContainer.appendChild(questionDiv);
    }
    questionContainer.innerHTML += '<button onclick="nextQuestion()">Neste</button>';
  }
  
  function nextQuestion(){
    questionContainer.innerHTML = "";
    questionNumber++;
    console.log(userAnswers);
    displayQuestions();
  }

  // Define a function to handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    for (let i = 0; i < questions.length; i++) {
      const yesRadio = form.elements[`answer-${i}`][0];
      const noRadio = form.elements[`answer-${i}`][1];
      const answer = yesRadio.checked ? yesRadio.value : noRadio.value;
      userAnswers[`answer-${i}`] = answer;
    }
    displayStory();
  }
  
  // Define a function to display the story based on the user's answers
  function displayStory() {
    const storyContainer = document.querySelector(".story-container");
    let story = "";
    if (userAnswers["answer-0"] === "yes") {
      story += "You answered yes to Question 1. ";
    } else {
      story += "You answered no to Question 1. ";
    }
    if (userAnswers["answer-1"] === "yes") {
      story += "You answered yes to Question 2. ";
    } else {
      story += "You answered no to Question 2. ";
    }
    if (userAnswers["answer-2"] === "yes") {
      story += "You answered yes to Question 3. ";
    } else {
      story += "You answered no to Question 3. ";
    }
    if (userAnswers["answer-3"] === "yes") {
      story += "You answered yes to Question 4. ";
    } else {
      story += "You answered no to Question 4. ";
    }
    storyContainer.textContent = story;
  }
  
  // Add event listeners
  const form = document.querySelector(".question-form");
  form.addEventListener("submit", handleSubmit);
  

  function startGame(){
    gameContainer.style.backgroundImage = "url('img/spill/Sporsmalside.png')";
    displayQuestions();
    startButton.remove();
  }