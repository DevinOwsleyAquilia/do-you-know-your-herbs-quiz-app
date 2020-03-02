//step one: define functions and objects
const STORE = [
  {
      question: 'Click on the Rosemary',
      answers: [
        'rosemary_bunch.jpg',
        'oregano_plant_close_up.jpg',
        'thyme_bunch.jpg',
        'cilantro_bunch.jpg',
        'parsley_close_up_from_top',
        'mint_in_a_bowl_kitchen_sink.jpg',

      ],
      correctAnswer: 'rosemary_bunch.jpg'
    },
    {
      question: 'Click on the Parsley',
      answers: [
        'oregano_plant_close_up.jpg',
        'cilantro_bunch.jpg',
        'parsley_close_up_from_top',
        'lovage.jpg',
        'sage_bundle.jpg',
        'basil_plant_closeup.jpg',
      ],
      correctAnswer: 'parsley_close_up_from_top'
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
        'parsley_close_up_from_top',
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
        'parsley_close_up_from_top',
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
let questionNumber = 0;

//template to generate each question
function generateQuestion() {
  if (questionNumber < STORE.length) {
    return createThing(questionNumber);
  } else {
    $('.questionBox').hide();
    finalScore();
    $('.questionNumber').text(10);
  }
}
