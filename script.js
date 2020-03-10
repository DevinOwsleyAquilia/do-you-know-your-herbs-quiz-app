//step one: define functions and objects
const STORE = [
  {
      question: 'Click on the Rosemary',
      answers: [
        'rosemary_bunch.jpg',
        'oregano_plant_close_up.jpg',
        'thyme_bunch.jpg',
        'cilantro_bunch.jpg',
        'parsley_close_up_from_top.jpg',
        'mint_in_a_bowl_kitchen_sink.jpg',

      ],
      correctAnswer: 'rosemary_bunch.jpg'
    },
    {
      question: 'Click on the Parsley',
      answers: [
        'oregano_plant_close_up.jpg',
        'cilantro_bunch.jpg',
        'parsley_close_up_from_top.jpg',
        'lovage.jpg',
        'sage_bundle.jpg',
        'basil_plant_closeup.jpg',
      ],
      correctAnswer: 'parsley_close_up_from_top.jpg'
    },
    {
      question: 'Click on the Thyme',
      answers: [
        'fine_green_fennel.jpg',
        'thyme_bunch.jpg',
        'mint_in_a_bowl_kitchen_sink.jpg',
        'sage_bundle.jpg',
        'bunch_chives.jpg',
        'lavender.jpg'
      ],
      correctAnswer: 'thyme_bunch.jpg'
    },
    {
      question: 'Click on the Cilantro',
      answers: [
        'lovage.jpg',
        'oregano_plant_close_up.jpg',
        'thyme_bunch.jpg',
        'cilantro_bunch.jpg',
        'fine_green_fennel.jpg',
        'parsley_close_up_from_top.jpg',
      ],
      correctAnswer: 'cilantro_bunch.jpg'

    },
    {
      question: 'Click on the Oregano',
      answers: [
        'rosemary_bunch.jpg',
        'oregano_plant_close_up.jpg',
        'thyme_bunch.jpg',
        'mint_in_a_bowl_kitchen_sink.jpg',
        'basil_plant_closeup.jpg',
        'fine_green_fennel.jpg'
      ],
      correctAnswer: 'oregano_plant_close_up.jpg'
    },
    {
      question: 'Click on the Mint',
      answers: [
        'rosemary_bunch.jpg',
        'mint_in_a_bowl_kitchen_sink.jpg',
        'sage_bundle.jpg',
        'lovage.jpg',
        'thyme_bunch.jpg',
        'cilantro_bunch.jpg'
      ],
      correctAnswer: 'mint_in_a_bowl_kitchen_sink.jpg'
    },
    {
      question: 'Click on the Basil',
      answers: [
        'rosemary_bunch.jpg',
        'oregano_plant_close_up.jpg',
        'thyme_bunch.jpg',
        'cilantro_bunch.jpg',
        'basil_plant_closeup.jpg',
        'fine_green_fennel.jpg'
      ],
      correctAnswer: 'basil_plant_closeup.jpg'
    },
    {
      question: 'Click on the Lovage',
      answers: [
        'rosemary_bunch.jpg',
        'oregano_plant_close_up.jpg',
        'thyme_bunch.jpg',
        'cilantro_bunch.jpg',
        'sage_bundle.jpg',
        'lovage.jpg'
      ],
      correctAnswer: 'lovage.jpg'
    },
    {
      question: 'Click on the Sage',
      answers: [
        'sage_bundle.jpg',
        'oregano_plant_close_up.jpg',
        'lavender.jpg',
        'thyme_bunch.jpg',
        'cilantro_bunch.jpg',
        'fine_green_fennel.jpg'
      ],
      correctAnswer: 'sage_bundle.jpg'
    },
    {
      question: 'Click on the Chives',
      answers: [
        'oregano_plant_close_up.jpg',
        'lovage.jpg',
        'thyme_bunch.jpg',
        'bunch_chives.jpg',
        'cilantro_bunch.jpg',
        'rosemary_bunch.jpg'
      ],
      correctAnswer: 'bunch_chives.jpg'
    },
    {
      question: 'Click on the Fennel',
      answers: [
        'lavender.jpg',
        'oregano_plant_close_up.jpg',
        'parsley_close_up_from_top.jpg',
        'mint_in_a_bowl_kitchen_sink.jpg',
        'fine_green_fennel.jpg',
        'rosemary_bunch.jpg',
      ],
      correctAnswer: 'fine_green_fennel.jpg'
    },
    {
      question: 'Click on the Lavender',
      answers: [
        'rosemary_bunch.jpg',
        'lovage.jpg',
        'lavender.jpg',
        'basil_plant_closeup.jpg',
        'oregano_plant_close_up.jpg',
        'thyme_bunch.jpg'
      ],
      correctAnswer: 'lavender.jpg'
    },
  ];
//Step two: use functions and objects (triggers)

//variables to store the quiz score and question number information
let score = 0;
let questionNumber = 11;
let totalNumberOfQuestion = STORE.length;
let totalNumberOfCorrectAnswers = 0;

//template to generate each question
function questionDisplay() {
  //console.log(STORE[questionNumber].question);
  $('.question-text').text(STORE[questionNumber].question);

  $('.options').empty();

   let totalNumberOfChoices = STORE[questionNumber].answers.length;
    for(let i = 0; i < totalNumberOfChoices; i++) {
    let buildEachChoiceHTML = 
    `<li>
    <label class="options-label" for="0">
        <input class="radio" type="radio" id="0" value="0" name="answer" required="">
        <img src="herbs-photos/${STORE[questionNumber].answers[i]}" alt="select_img">
    </label>
    </li>`; 
    $('.options').append(buildEachChoiceHTML);
  }
  $('.totalQuestions').show();
 $('.questionNumber').text(questionNumber + 1)
}

//functions

$(document).ready(function (){
  //when the page loads, do this
  $('.results').hide();
  $('.questions').hide();
  $('.feedback').hide();
  $('.totalQuestions').hide();

  //start quiz
  $('.startButton').click(function () {
    $('.results').hide();
    $('.start-quiz-box').hide();
    $('.questions').show();
    $('#result_msg').empty();
    questionDisplay();
    });

  //show quiz questions
  $('.questions-form').on('submit', function (event) {
    event.preventDefault();
    let userAnswer = $("input[class='option']:checked").val();
    console.log(userAnswer);
    let correctAnswerChoice = STORE[questionNumber].correctAnswer;
    if (userAnswer == correctAnswerChoice){
      totalNumberOfCorrectAnswers++;
      //console.log(totalNumberOfCorrectAnswers);
    }
    $('.results').append("<h3>Q: " + STORE[questionNumber].questionText + "</h3>");
    $('.results').append("<h4>A: " + STORE[questionNumber].correctAnswer + "</h4>");

  //if quiz is finished, show results
  if ((currentQuestionNumber + 1) == totalNumberOfQuestion) {
    //show final score
    $('.results').text(totalNumberOfCorrectAnswers + "/ " + totalNumberOfQuestion);

    //hide other containers
    $('.questions').hide();
    $('.start-quiz-box').hide();
    $('.results').show();
    } else {
      questionNumber++;
      questionDisplay();
    }
  });

  //loading start section from result section
  $('.results').on('click', 'restartQuizButton', function () {
    $('.start-quiz-box').show();
    $('.questions').hide();
    $('.results').hide();
    questionNumber = 0;
    totalNumberOfCorrectAnswers = 0;
  });
});

