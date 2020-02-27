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
          'basil_plant_closeup.jpg',
          'fine_green_fennel.jpg',
          'sage_bundle.jpg'
        ],
        correctAnswer: 'rosemary_bunch.jpg'
      },
    {
      question: 'Mint',
      answers: [
        'tarragon_bunch_1.jpg',
        'mint_in_a_bowl_kitchen_sink.jpg',
        'garlic_scapes_up_close.jpg',
        'basil_plant_closeup.jpg',
        'flat_leaf_parsley.jpg',
        'sage_bundle.jpg'
      ],
      correctAnswer: 'mint_in_a_bowl_kitchen_sink.jpg'   
    },
    {
      question:
        'Tarragon',
      answers: [
        'tarragon_3.jpg',
        'cilantro_closeup_on_white_background.jpg',
        'sprig_of_fennel.jpg',
        'sage_fan_display.jpg',
        'basil_on_black_background.jpg',
        'fresh_lemongrass.jpg'    
      ],
      correctAnswer: 'tarragon_3.jpg'
    },
    {
      question: 'Sage',
      answers: [
        'mint_bundle.jpg',
        'sage_bundle.jpg',
        'wild_tarragon_2_stems.jpg',
        'oregano_wild_bunch.jpg',
        'parsley_close_up_from_top.jpg',
        'fresh_thyme_front_view_closeup.jpg',
      ],
      correctAnswer: 'sage_bundle.jpg'
    },
    {
        question: 'Oregano', 
        answers: [
          'sage_bundle.jpg',
          'wild_tarragon_2_stems.jpg',
          'mint_bundle.jpg',
          'oregano_plant.jpg',
          'garlic_scapes_on_black_table.jpg',
          'thyme_bush.jpg',
        ],
        correctAnswer: 'oregano_plant.jpg'
      }, 
      {
        question: 'Parsley',
        answers: [
          'bunch_chives.jpg',
          'flat_leaf_parsley.jpg',
          'tarragon_3.jpg',
          'oregano_wild_bunch.jpg',
          'garlic_scapes_on_black_table.jpg',
          'fresh_thyme_front_view_closeup.jpg',
        ],
          correctAnswer: 'flat_leaf_parsley.jpg'
      }, 
      {
        question: 'Basil',
        answers: [
          'oregano_wild_bunch.jpg',
          'fresh_lemongrass.jpg',
          'wild_tarragon_2_stems.jpg',
          'thyme_bundle_white_background.jpg',
          'basil_on_black_background.jpg',
          'mint_bundle.jpg'
        ],
        correctAnswer: 'basil_on_black_background.jpg'
      },
      {
        question: 'Cilantro',
        answers: [
          'cilantro_closeup.jpg',
          'wild_sage_plant.jpg',
          'mint_in_a_bowl_kitchen_sink.jpg',
          'oregano_plant.jpg',
          'parsley_close_up_from_top.jpg',
          'fresh_thyme_front_view_closeup.jpg',
        ],
        correctAnswer: 'cilantro_closeup.jpg'
      }, 
      {
        question: 'Fennel',
        answers: [
          'cilantro_cut_up.jpg',
          'fresh_thyme_front_view_closeup.jpg',
          'sage_bundle.jpg',
          'fennel.jpg',
          'oregano_plant.jpg',
          'basil_bush.jpg' 
        ],
          correctAnswer: 'fennel.jpg'

        },
        {
            question: 'Scapes',
            answers: [
              'oregano_wild_bunch.jpg',
              'fresh_lemongrass.jpg',
              'wild_tarragon_2_stems.jpg',
              'garlic_scapes.jpg',
              'mint_bundle.jpg',
              'thyme_bush.jpg',
            ],
            correctAnswer: 'garlic_scapes.jpg'
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
