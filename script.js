//step one: define functions and objects
const STORE = [
    {
      question: 'Rosemary',
      answers: [
        '<img src="746002739_ea1e309466_o.jpg" alt="Lemongrass on woven wicker mat" width="500" height="600"></img>',
        '<img src="thyme-2854035_1920.jpg alt="Thyme bunch" width="500" height="600"></img>',
        '<img src="cilantro-1287301_1920.jpg" alt="Cilantro bunch close up" width="500" height="600"></img>',
        '<img src="fine-green-fennel.jpg" alt="fine green fennel" width="500" height="600"></img>',
        '<img src="rosemary-74365_1280.jpg" alt="Rosemary bunch" width="500" height="600"></img>',
        '<img src="oregano-790702_1920.jpg" alt="Oregano plant close up" width="500" height="600"></img>'

      ],
      correctAnswer:
      '<img src="rosemary-74365_1280.jpg" alt="Rosemary bunch" width="500" height="600"></img>'
    },
    {
      question: 'Mint',
      answers: [
        '<img src="tarragon-74234_640.jpg" alt="Tarragon bunch" width="500" height="600"></img>',
        '<img src="1676377622_bc60a434c9_b.jpg" alt="Mint in a bowl in kitchen sink" width="500" height="600"></img>',
        '<img src="2590108006_3a716331e3_b.jpg" alt="garlic scape bunch close up" width="500" height="600"></img>',
        '<img src="4534777750_c33586422e_k.jpg" alt="Basil plant close up" width="500" height="600"></img>',
        '<img src="flat-leaf-parsley.jpg" alt="flat leaf parsley" width="500" height="600"></img>',
        '<img src="sage-4367048_1920.jpg" alt="wild sage bunch" width="500" height="600"></img>'
      ],
      correctAnswer:
      '<img src="1676377622_bc60a434c9_b.jpg" alt="Mint in a bowl in kitchen sink" width="500" height="600"></img>'
    },
    {
      question:
        'Tarragon',
      answers: [
        '<img src="tarragon-115368_1920.jpg" alt="Tarragon wild" width="500" height="600"></img>',
        '<img src="5620131626_64f1c38015_k.jpg" alt="Cilantro on a white background" width="500" height="600"></img>',
        '<img src="sprig-of-fennel.jpg" alt="Sprig of fennel" width="500" height="600"></img>',
        '<img src="pxfuel.com.jpg" alt="Sage fan displayed" width="500" height="600"></img>',
        '<img src="basil-3532424_1920.jpg" alt="Basil on black background" width="500" height="600"></img>',
        '<img src="lemongrass-4479786_1920.jpg" alt="fresh lemongrass" width="500" height="600"></img>'    
      ],
      correctAnswer: '<img src="tarragon-115368_1920.jpg" alt="Tarragon wild" width="500" height="600"></img>'
    },
    {
      question: 'Sage',
      answers: [
        '<img src="mint-2202496_1920.jpg" alt="bunch of mint" width="500" height="600"></img>',
        '<img src="sage-4367048_1920.jpg" alt="wild sage bunch" width="500" height="600"></img>',
        '<img src="tarragon-115368_1920.jpg" alt="Tarragon wild" width="500" height="600"></img>',
        '<img src="oregano-3506914_1920.jpg" alt="Oregano bunch" width="500" height="600"></img>',
        '<img src="30936352597_64958374a4_k.jpg" alt="Parsely close up" width="500" height="600"></img>',
        '<img src="thyme-2854035_1920.jpg" alt="fresh thyme" width="500" height="600"></img>',
      ],
      correctAnswer: '<img src="sage-4367048_1920.jpg" alt="wild sage bunch" width="500" height="600"></img>'
    },
    {
        question: 'Oregano', //START AGAIN HERE
        answers: [
          '<img src="sage-4367048_1920.jpg" alt="wild sage bunch" width="500" height="600"></img>',
          '<img src="tarragon-115368_1920.jpg" alt="Tarragon wild" width="500" height="600"></img>',
          '<img src="mint-2202496_1920.jpg" alt="bunch of mint" width="500" height="600"></img>',
          '<img src="oregano-790702_1920.jpg" alt="Wild Oregano" width="500" height="600"></img>',
          '<img src="2590108006_3a716331e3_b.jpg" alt="scapes bunch" width="500" height="600"></img>',
          '<img src="thyme-341930_1920.jpg" alt="fresh thyme" width="500" height="600"></img>',
        ],
        correctAnswer: '<img src="oregano-790702_1920.jpg" alt="Wild Oregano" width="500" height="600"></img>'
      }, 
      {
        question: 'Parsely',
        answers: [
          '<img src="7717620242_f68959c31d_k.jpg" alt="fresh cut chives" width="500" height="600"></img>',
          '<img src="flat-leaf-parsley.jpg" alt="wild parsley" width="500" height="600"></img>',
          '<img src="tarragon-115368_1920.jpg" alt="Tarragon wild" width="500" height="600"></img>',
          '<img src="oregano-790702_1920.jpg" alt="Wild Oregano" width="500" height="600"></img>',
          '<img src="30936352597_64958374a4_k.jpg" alt="Parsely close up" width="500" height="600"></img>',
          '<img src="thyme-2854035_1920.jpg" alt="fresh thyme" width="500" height="600"></img>',
        ],
          correctAnswer: 
          '<img src="flat-leaf-parsley.jpg" alt="wild parsley" width="500" height="600"></img>'
      }, 
      {
        question: 'Basil',
        answers: [
          '<img src="oregano-790702_1920.jpg" alt="bunch of oregano" width="500" height="600"></img>',
          '<img src="lemongrass-4479786_1920.jpg" alt="fresh lemongrass" width="500" height="600"></img>',
          '<img src="tarragon-115368_1920.jpg" alt="Tarragon wild" width="500" height="600"></img>',
          '<img src="32427867677_64da1e1f82_k.jpg" alt="fresh thyme" width="500" height="600"></img>',
          '<img src="basil-3532424_1920.jpg" alt="Basil on black background" width="500" height="600"></img>',
          '<img src="mint-2202496_1920.jpg" alt="mint bunch" width="500" height="600"></img>'
        ],
        correctAnswer: '<img src="basil-3532424_1920.jpg" alt="Basil on black background" width="500" height="600"></img>'
      },
      {
        question: 'Cilantro',
        answers: [
          '<img src="cilantro-1287301_1920.jpg" alt="bunch of Cilantro" width="500" height="600"></img>',
          '<img src="sage-leaves-background.jpg" alt="wild sage background" width="500" height="600"></img>',
          '<img src="1676377622_bc60a434c9_b.jpg" mint" width="500" height="600"></img>',
          '<img src="oregano-790702_1920.jpg" alt="Wild Oregano" width="500" height="600"></img>',
          '<img src="30936352597_64958374a4_k.jpg" alt="Parsely close up" width="500" height="600"></img>',
          '<img src="thyme-2854035_1920.jpg" alt="fresh thyme" width="500" height="600"></img>',
        ],
        correctAnswer: '<img src="cilantro-1287301_1920.jpg" alt="bunch of Cilantro" width="500" height="600"></img>'
      }, 
      {
        question: 'Fennel',
        answers: [
          '<img src="9031346136_08e079f996_k.jpg" alt="Cut Cilantro" width="500" height="600"></img>',
          '<img src="thyme-2854035_1920.jpg" alt="fresh thyme" width="500" height="600"></img>',
          '<img src="sage-4367048_1920.jpg" alt="wild sage bunch" width="500" height="600"></img>',
          '<img src="fennel-3946005_1920.jpg" alt="Fennel in the ground" width="500" height="600"></img>',
          '<img src="oregano-790702_1920.jpg" alt="Wild Oregano" width="500" height="600"></img>',
          '<img src="basil-2919560_1920.jpg" alt="Basil" width="500" height="600"></img>',
          
        ],
          correctAnswer: '<img src="fennel-3946005_1920.jpg" alt="Fennel in the ground" width="500" height="600"></img>'

        },
        {
            question: 'Scapes',
            answers: [
              '<img src="oregano-790702_1920.jpg" alt="bunch of oregano" width="500" height="600"></img>',
              '<img src="lemongrass-4479786_1920.jpg" alt="fresh lemongrass" width="500" height="600"></img>',
              '<img src="tarragon-115368_1920.jpg" alt="Tarragon wild" width="500" height="600"></img>',
              '<img src="2590108006_3a716331e3_b.jpg" alt="Scapes" width="500" height="600"></img>',
              '<img src="mint-2202496_1920.jpg" alt="mint bunch" width="500" height="600"></img>',
              '<img src="thyme-341930_1920.jpg" alt="fresh thyme" width="500" height="600"></img>',
            ],
            correctAnswer: '<img src="2590108006_3a716331e3_b.jpg" alt="Scapes" width="500" height="600"></img>'
          },
  ];
//Step two: use functions and objects (triggers)
