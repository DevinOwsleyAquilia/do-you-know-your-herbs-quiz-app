//step one: define functions and objects
const STORE = [
    {
      question: 'How does the male Capuchin monkey attract a female partner?',
      answers: [
        'He hangs upside-down from a high tree branch and bellows loudly',
        'He gathers ripe fruit into a pile and repeatedly throws it up in the air while rapidly screeching',
        'He urinates in his hands and rubs it thoroughly into his fur',
        'He cruises around in the coolest looking car made from coconuts, bamboo, and greenery'
      ],
      correctAnswer:
        'He urinates in his hands and rubs it thoroughly into his fur'
    },
    {
      question:
        'What makes the female spider monkey different from all other primates?',
      answers: [
        'She has the meanest dance moves, often being cited as the inspiration to such dancers as Michael Jackson, Shakira, and even Justin Timberlake',
        'She has the longest tail, reaching up to three feet in length',
        'She has seven (and sometimes even eight) different colors on her face',
        'She eats the second born baby when she gives birth to twins'
      ],
      correctAnswer:
        'She has the longest tail, reaching up to three feet in length'
    },
    {
      question:
        'Out of all the New World monkeys, the owl monkey is the only one to:',
      answers: [
        'Stay up all night, having a nocturnal sleep schedule',
        'Consistently hoot as a mating call',
        'Have the ability to turn its head all the way around',
        'Throw the wildest and loudest parties'
      ],
      correctAnswer: 'Stay up all night, having a nocturnal sleep schedule'
    },
    {
      question: 'Which New World monkey is the most intelligent?',
      answers: [
        'The tamarin monkey',
        'The brass monkey (that funky monkey)',
        'The baboon monkey',
        'The capuchin monkey'
      ],
      correctAnswer: 'The capuchin monkey'
    },
    {
      question:
        'Picking out parasites and dirts from each others’ furs is a way for monkeys to:',
      answers: [
        'Show honor to their elders, respect for alpha males, and to prepare for the heat of summer',
        'Get rid of bugs and dirt cause all that stuff is yucky!',
        'Communicate, form social hierarchies, and strengthen family and friendship bonds',
        'Find a quick source of sustenance and show interest in mating'
      ],
      correctAnswer:
        'Communicate, form social hierarchies, and strengthen family and friendship bonds'
    },
    {
      question: 'The pygmy marmoset is:',
      answers: [
        'The world’s fastest monkey',
        'The world’s smallest monkey',
        'The galaxy’s most fashionable living being. Period.',
        'Allergic to bananas'
      ],
      correctAnswer: 'The world’s smallest monkey'
    },
    {
      question:
        'What is a prominent difference between Old and New World monkeys?',
      answers: [
        'New World monkeys build houses out of mud — Old World monkeys live in caves',
        'New World monkeys gonna’ love you long time — Old World monkeys would do anything for love (but they won’t do that…)',
        'New World monkeys have backward, non opposable thumbs — Old World monkeys have two opposable thumbs on each hand and foot',
        'New World monkeys have 36 teeth — Old World monkeys have 32 teeth'
      ],
      correctAnswer:
        'New World monkeys have 36 teeth — Old World monkeys have 32 teeth'
    },
    {
      question: 'The male howler monkey:',
      answers: [
        'Is the strongest New World monkey and can lift up to ten times his own weight',
        'Has the loudest call of any primate and is one of the loudest animals in the world',
        'Sleeps in the blood of its enemies',
        'Has the most beautiful singing voice that one might never hear'
      ],
      correctAnswer:
        'Has the loudest call of any primate and is one of the loudest animals in the world'
    },
    {
      question: 'What type of environments do New World monkeys live in?',
      answers: [
        'Mountain caves',
        'Country farmlands',
        'Tropical forests',
        'Bustling cities'
      ],
      correctAnswer: 'Tropical forests'
    },
    {
      question:
        'How do squirrel monkeys mark their path when they are moving through the treetops?',
      answers: [
        'They tie a spool of thread to the first tree they climb and let it unravel as they go',
        'They spread urine on their hands and feet',
        'They drop pieces of candy after every couple of yards',
        'They record their travel path using GPS location through a “running app” on their cell phones'
      ],
      correctAnswer: 'They spread urine on their hands and feet'
    }
  ];
//Step two: use functions and objects (triggers)
