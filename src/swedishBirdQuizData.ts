import type { Question, QuizConfig } from './types';

// Swedish Garden Birds Quiz - 12 Most Common Species at Swedish Feeders
// Based on Birdlife Sverige research on feeder bird populations
// All images from Wikimedia Commons (CC-BY-SA or public domain)

export interface SwedishBird {
  swedishName: string;
  englishName: string;
  scientificName: string;
  fieldMarks: string[];
  status: string;
  habitat: string[];
  funFacts: string[];
  imageUrl: string;
  difficulty: 'easy' | 'medium' | 'hard';
  population?: string;
}

export const swedishGardenBirds: Record<string, SwedishBird> = {
  talgoxe: {
    swedishName: 'Talgoxe',
    englishName: 'Great Tit',
    scientificName: 'Parus major',
    fieldMarks: [
      'Black head with white cheeks',
      'Yellow belly with black central stripe',
      'Greenish back',
      'Black stripe down the chest',
    ],
    status: 'Most common feeder bird in Sweden (#1 at feeders)',
    habitat: ['Gardens', 'Woodlands', 'Parks', 'Urban areas'],
    funFacts: [
      'Can be taught to ring a bell for food',
      'One of the most widespread bird species in Europe',
      'Their song sounds like "teacher-teacher-teacher"',
      'Highly adaptable to urban environments',
    ],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Parus_major_-_01.jpg/640px-Parus_major_-_01.jpg',
    difficulty: 'easy',
  },
  blames: {
    swedishName: 'Blåmes',
    englishName: 'Eurasian Blue Tit',
    scientificName: 'Cyanistes caeruleus',
    fieldMarks: [
      'Blue cap and wings',
      'Yellow belly and chest',
      'Small size with round body',
      'Blue tail',
    ],
    status: '#2 most common at Swedish feeders',
    habitat: ['Gardens', 'Woodlands', 'Parks', 'Hedgerows'],
    funFacts: [
      'Very acrobatic feeders, often hanging upside down',
      'Will readily use nest boxes',
      'Eat insects, seeds, and nuts',
      'Population declining in some areas',
    ],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Eurasian_blue_tit_Lancashire.jpg/640px-Eurasian_blue_tit_Lancashire.jpg',
    difficulty: 'easy',
  },
  pilfink: {
    swedishName: 'Pilfink',
    englishName: 'House Sparrow',
    scientificName: 'Passer domesticus',
    fieldMarks: [
      'Grey cap (male)',
      'Chestnut back with black streaks',
      'Grey belly',
      'Black bib (male breeding)',
    ],
    status: '#3 most common at feeders, declining population',
    habitat: ['Gardens', 'Urban areas', 'Farmland', 'Villages'],
    funFacts: [
      'Once the most common bird in Sweden, now declining',
      'Highly social birds that live in colonies',
      'Males have a black bib that gets darker with better health',
      'Adapted to live closely with humans',
    ],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/House_Sparrow_RWD2.jpg/640px-House_Sparrow_RWD2.jpg',
    difficulty: 'easy',
    population: 'Unknown but declining',
  },
  koltrast: {
    swedishName: 'Koltrast',
    englishName: 'Eurasian Blackbird',
    scientificName: 'Turdus merula',
    fieldMarks: [
      'Males: All black with bright orange beak',
      'Females: Dark brown with duller beak',
      'Yellow eye-ring',
      'Medium-sized thrush',
    ],
    status: 'Sweden national bird, common year-round',
    habitat: ['Gardens', 'Woodlands', 'Parks', 'Urban areas'],
    funFacts: [
      'Voted as Sweden national bird in 1963',
      'Beautiful flute-like song, especially at dawn and dusk',
      'Can be very tame and approachable in gardens',
      'Famous for their melodious singing',
    ],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Common_Blackbird.jpg/640px-Common_Blackbird.jpg',
    difficulty: 'easy',
    population: '3-6 million pairs',
  },
  domherre: {
    swedishName: 'Domherre',
    englishName: 'Eurasian Bullfinch',
    scientificName: 'Pyrrhula pyrrhula',
    fieldMarks: [
      'Pink/red breast (male)',
      'Grey back',
      'Black cap',
      'Thick black bill',
    ],
    status: 'Population increasing, uncommon at feeders',
    habitat: ['Coniferous forests', 'Gardens with berry bushes', 'Woodlands'],
    funFacts: [
      'Males have beautiful pinkish-red breast',
      'Known for eating buds from fruit trees',
      'Population has been increasing in recent years',
      'Usually seen in pairs or small family groups',
    ],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Pyrrhula_pyrrhula_-_01.jpg/640px-Pyrrhula_pyrrhula_-_01.jpg',
    difficulty: 'medium',
  },
  grasiska: {
    swedishName: 'Gråsiska',
    englishName: 'Common Redpoll',
    scientificName: 'Acanthis flammea',
    fieldMarks: [
      'Red forehead patch',
      'Pink breast (male)',
      'Brown-streaked body',
      'Yellow bill',
    ],
    status: 'Invasion species, numbers vary dramatically',
    habitat: ['Birch forests', 'Gardens with birch trees', 'Woodlands'],
    funFacts: [
      'Called "invasion birds" as their numbers fluctuate yearly',
      'Come in large flocks some winters',
      'Love birch seeds and nyjer seeds at feeders',
      'Smaller than a sparrow with distinctive red cap',
    ],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Common_Redpoll.jpg/640px-Common_Redpoll.jpg',
    difficulty: 'medium',
  },
  rodhake: {
    swedishName: 'Rödhake',
    englishName: 'European Robin',
    scientificName: 'Erithacus rubecula',
    fieldMarks: [
      'Orange-red breast and face',
      'Brown back and wings',
      'White belly',
      'Distinctive round shape',
    ],
    status: '7.6 million pairs in Sweden, widespread',
    habitat: ['Gardens', 'Woodlands', 'Parks', 'Hedgerows'],
    funFacts: [
      '7.6 million pairs - one of the most numerous birds',
      'Very territorial, even fighting their own reflection',
      'Often follows gardeners looking for worms',
      'Sings nearly year-round, even at night under streetlights',
    ],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Erithacus_rubecula_%28cropped%29.jpg/640px-Erithacus_rubecula_%28cropped%29.jpg',
    difficulty: 'easy',
    population: '7.6 million pairs',
  },
  bofink: {
    swedishName: 'Bofink',
    englishName: 'Common Chaffinch',
    scientificName: 'Fringilla coelebs',
    fieldMarks: [
      'Pink breast (male)',
      'Blue-grey cap (male)',
      'White wing bars',
      'Forked tail',
    ],
    status: '16.8 million pairs - #2 most common Swedish bird',
    habitat: ['Woodlands', 'Gardens', 'Parks', 'Farmland'],
    funFacts: [
      '16.8 million pairs - second most common breeding bird in Sweden',
      'Males have beautiful pinkish breast and blue-grey head',
      'Females are dull brown for camouflage',
      "Famous for their descending song ending with 'pink pink'",
    ],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Fringilla_coelebs_-_01.jpg/640px-Fringilla_coelebs_-_01.jpg',
    difficulty: 'easy',
    population: '16.8 million pairs',
  },
  skata: {
    swedishName: 'Skata',
    englishName: 'Eurasian Magpie',
    scientificName: 'Pica pica',
    fieldMarks: [
      'Black and white plumage',
      'Iridescent blue-green wings',
      'Long tail',
      'Large size for a passerine',
    ],
    status: 'Common and widespread, intelligent',
    habitat: ['Gardens', 'Woodlands', 'Parks', 'Urban areas', 'Farmland'],
    funFacts: [
      'One of the most intelligent birds, can recognize themselves in mirrors',
      'Highly social with complex social structures',
      'Can live up to 20 years',
      'Omnivorous and opportunistic feeders',
    ],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Pica_pica_-_Compans_Caffarelli_-_2012-05-16.jpg/640px-Pica_pica_-_Compans_Caffarelli_-_2012-05-16.jpg',
    difficulty: 'easy',
  },
  kaja: {
    swedishName: 'Kaja',
    englishName: 'Western Jackdaw',
    scientificName: 'Coloeus monedula',
    fieldMarks: [
      'Small crow size',
      'Grey nape',
      'Pale eyes',
      'Black body',
    ],
    status: 'Common, often seen in flocks',
    habitat: ['Gardens', 'Urban areas', 'Villages', 'Farmland'],
    funFacts: [
      'Smallest member of the crow family in Sweden',
      'Known for their pale grey nape and bright eyes',
      'Highly intelligent and social',
      'Often seen following rooks and crows',
    ],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Coloeus_monedula_-Wroclaw%2C_Poland_-head-8a.jpg/640px-Coloeus_monedula_-Wroclaw%2C_Poland_-head-8a.jpg',
    difficulty: 'medium',
  },
  gulsparv: {
    swedishName: 'Gulsparv',
    englishName: 'Yellowhammer',
    scientificName: 'Emberiza citrinella',
    fieldMarks: [
      'Bright yellow head (male)',
      'Chestnut back',
      'Yellow underparts',
      'Rusty breast markings',
    ],
    status: 'Common farmland bird, declining',
    habitat: ['Farmland', 'Gardens', 'Hedgerows', 'Open woodlands'],
    funFacts: [
      'Famous for their "a-little-bit-of-bread-and-no-cheese" song',
      'Males have bright yellow heads in breeding season',
      'Population has declined with modern farming practices',
      'Ground feeders that prefer seeds',
    ],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Emberiza_citrinella_-_01.jpg/640px-Emberiza_citrinella_-_01.jpg',
    difficulty: 'medium',
  },
  steglits: {
    swedishName: 'Steglits',
    englishName: 'European Goldfinch',
    scientificName: 'Carduelis carduelis',
    fieldMarks: [
      'Red face patch',
      'Black and white head',
      'Yellow wing patch',
      'Brown body',
    ],
    status: 'Beautiful and common, loves thistle seeds',
    habitat: ['Gardens', 'Parks', 'Farmland', 'Open woodlands'],
    funFacts: [
      'One of the most colorful birds at Swedish feeders',
      'Specialized in eating thistle and teasel seeds',
      'Known for their musical twittering song',
      'Their Swedish name "Steglits" comes from their thistle diet',
    ],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Carduelis_carduelis_-_01.jpg/640px-Carduelis_carduelis_-_01.jpg',
    difficulty: 'easy',
  },
};

// Helper function to get a random bird excluding a specific one
function getRandomBirds(excludeBird: SwedishBird, count: number): SwedishBird[] {
  const allBirds = Object.values(swedishGardenBirds);
  const filtered = allBirds.filter(bird => bird.englishName !== excludeBird.englishName);
  const shuffled = [...filtered].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

// Generate Photo Identification Questions (Type 1)
function generatePhotoQuestions(): Question[] {
  const birds = Object.values(swedishGardenBirds);
  return birds.slice(0, 3).map((bird, index) => {
    const distractors = getRandomBirds(bird, 3);
    return {
      id: index + 1,
      type: 'image-identification',
      questionText: `Identify this bird (${bird.swedishName}):`,
      imageUrl: bird.imageUrl,
      options: [bird.englishName, ...distractors.map(b => b.englishName)],
      correctAnswer: bird.englishName,
      category: 'Photo Identification',
      difficulty: bird.difficulty,
      fact: `${bird.swedishName} - ${bird.status}. ${bird.funFacts[0]}`,
      breedName: bird.englishName,
    };
  });
}

// Generate Swedish Name Matching Questions (Type 2)
function generateSwedishNameQuestions(): Question[] {
  const birds = Object.values(swedishGardenBirds);
  return birds.slice(3, 6).map((bird, index) => {
    const distractors = getRandomBirds(bird, 3);
    return {
      id: index + 4,
      type: 'fact-multiple-choice',
      questionText: `What is the English name for "${bird.swedishName}"?`,
      options: [bird.englishName, ...distractors.map(b => b.englishName)],
      correctAnswer: bird.englishName,
      category: 'Swedish Names',
      difficulty: bird.difficulty,
      fact: `${bird.swedishName} means "${bird.englishName}" in English. ${bird.status}`,
      breedName: bird.englishName,
    };
  });
}

// Generate Scientific Name Questions (Type 3)
function generateScientificNameQuestions(): Question[] {
  const birds = Object.values(swedishGardenBirds);
  return birds.slice(6, 9).map((bird, index) => {
    const distractors = getRandomBirds(bird, 3);
    return {
      id: index + 7,
      type: 'fact-multiple-choice',
      questionText: `What is the scientific name for the ${bird.englishName}?`,
      options: [bird.scientificName, ...distractors.map(b => b.scientificName)],
      correctAnswer: bird.scientificName,
      category: 'Scientific Names',
      difficulty: 'hard',
      fact: `${bird.englishName} (${bird.swedishName}) is known scientifically as ${bird.scientificName}.`,
      breedName: bird.englishName,
    };
  });
}

// Generate Field Mark Identification Questions (Type 4)
function generateFieldMarkQuestions(): Question[] {
  const fieldMarkData = [
    { bird: swedishGardenBirds.talgoxe, mark: 'black head with white cheeks and yellow belly' },
    { bird: swedishGardenBirds.blames, mark: 'blue cap and yellow belly' },
    { bird: swedishGardenBirds.domherre, mark: 'pink/red breast and black cap' },
  ];

  return fieldMarkData.map((data, index) => {
    const distractors = getRandomBirds(data.bird, 3);
    return {
      id: index + 10,
      type: 'characteristic-match',
      questionText: `Which bird has ${data.mark}?`,
      options: [data.bird.englishName, ...distractors.map(b => b.englishName)],
      correctAnswer: data.bird.englishName,
      category: 'Field Marks',
      difficulty: data.bird.difficulty,
      fact: `${data.bird.englishName} (${data.bird.swedishName}): ${data.bird.fieldMarks.join(', ')}`,
      breedName: data.bird.englishName,
    };
  });
}

// Generate Habitat Matching Questions (Type 5)
function generateHabitatQuestions(): Question[] {
  const habitatData = [
    { bird: swedishGardenBirds.koltrast, habitat: 'Sweden national bird, commonly found in gardens and parks' },
    { bird: swedishGardenBirds.rodhake, habitat: 'gardens and woodlands with 7.6 million pairs in Sweden' },
    { bird: swedishGardenBirds.bofink, habitat: 'woodlands and gardens, the #2 most common bird with 16.8 million pairs' },
  ];

  return habitatData.map((data, index) => {
    const distractors = getRandomBirds(data.bird, 3);
    return {
      id: index + 13,
      type: 'fact-multiple-choice',
      questionText: `Which bird is commonly found in ${data.habitat}?`,
      options: [data.bird.englishName, ...distractors.map(b => b.englishName)],
      correctAnswer: data.bird.englishName,
      category: 'Habitat & Distribution',
      difficulty: 'medium',
      fact: `${data.bird.englishName} (${data.bird.swedishName}): ${data.bird.habitat.join(', ')}. ${data.bird.status}`,
      breedName: data.bird.englishName,
    };
  });
}

// Generate True/False Questions (Type 6)
function generateTrueFalseQuestions(): Question[] {
  return [
    {
      id: 16,
      type: 'true-false',
      questionText: 'True or False: The Koltrast (Eurasian Blackbird) is Sweden\'s national bird.',
      options: ['True', 'False'],
      correctAnswer: 'True',
      category: 'Bird Facts',
      difficulty: 'easy',
      fact: 'The Koltrast was voted as Sweden\'s national bird in 1963. It is famous for its melodious flute-like song.',
      breedName: swedishGardenBirds.koltrast.englishName,
    },
    {
      id: 17,
      type: 'true-false',
      questionText: 'True or False: The Bofink (Chaffinch) is the #2 most common bird in Sweden with 16.8 million pairs.',
      options: ['True', 'False'],
      correctAnswer: 'True',
      category: 'Population Facts',
      difficulty: 'medium',
      fact: 'The Bofink (Common Chaffinch) has 16.8 million breeding pairs in Sweden, making it the second most common bird after the Willow Warbler.',
      breedName: swedishGardenBirds.bofink.englishName,
    },
    {
      id: 18,
      type: 'true-false',
      questionText: 'True or False: The Talgoxe (Great Tit) is the #2 most common bird at Swedish feeders.',
      options: ['True', 'False'],
      correctAnswer: 'False',
      category: 'Feeder Facts',
      difficulty: 'medium',
      fact: 'The Talgoxe (Great Tit) is actually the #1 most common bird at Swedish feeders, not #2. The Blåmes (Blue Tit) is #2.',
      breedName: swedishGardenBirds.talgoxe.englishName,
    },
  ];
}

// Generate Additional Photo ID Questions (Type 7)
function generateAdditionalPhotoQuestions(): Question[] {
  const photoBirds = [
    swedishGardenBirds.steglits,
    swedishGardenBirds.grasiska,
    swedishGardenBirds.kaja,
  ];

  return photoBirds.map((bird, index) => {
    const distractors = getRandomBirds(bird, 3);
    return {
      id: index + 19,
      type: 'image-identification',
      questionText: `Identify this bird:`,
      imageUrl: bird.imageUrl,
      options: [bird.englishName, ...distractors.map(b => b.englishName)],
      correctAnswer: bird.englishName,
      category: 'Photo Identification',
      difficulty: bird.difficulty,
      fact: `${bird.swedishName} (${bird.englishName}): ${bird.funFacts[0]}`,
      breedName: bird.englishName,
    };
  });
}

// Combine all questions
export const swedishBirdQuestions: Question[] = [
  ...generatePhotoQuestions(),
  ...generateSwedishNameQuestions(),
  ...generateScientificNameQuestions(),
  ...generateFieldMarkQuestions(),
  ...generateHabitatQuestions(),
  ...generateTrueFalseQuestions(),
  ...generateAdditionalPhotoQuestions(),
];

// Quiz configuration
export const swedishBirdQuizConfig: QuizConfig = {
  questions: swedishBirdQuestions,
  title: 'Swedish Garden Birds Quiz',
  description: 'Test your knowledge of the 12 most common Swedish garden birds! Learn to identify them by sight, name, and field marks.',
  timePerQuestion: 35,
  theme: {
    name: 'Nordic Forest',
    primaryColor: '#166534', // green-700
    secondaryColor: '#14532d', // green-800
    backgroundColor: '#f0fdf4', // green-50
    textColor: '#14532d', // green-800
    accentColor: '#22c55e', // green-500
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
};

// Helper functions for tests
export function getAllBirds(): SwedishBird[] {
  return Object.values(swedishGardenBirds);
}

export function getBirdBySwedishName(name: string): SwedishBird | undefined {
  return Object.values(swedishGardenBirds).find(bird => bird.swedishName.toLowerCase() === name.toLowerCase());
}

export function getBirdByEnglishName(name: string): SwedishBird | undefined {
  return Object.values(swedishGardenBirds).find(bird => bird.englishName.toLowerCase() === name.toLowerCase());
}

export function getBirdByScientificName(name: string): SwedishBird | undefined {
  return Object.values(swedishGardenBirds).find(bird => bird.scientificName.toLowerCase() === name.toLowerCase());
}

export function validateBirdData(bird: SwedishBird): string[] {
  const errors: string[] = [];
  
  if (!bird.swedishName) errors.push('Missing swedishName');
  if (!bird.englishName) errors.push('Missing englishName');
  if (!bird.scientificName) errors.push('Missing scientificName');
  if (!bird.fieldMarks || bird.fieldMarks.length === 0) errors.push('Missing fieldMarks');
  if (!bird.status) errors.push('Missing status');
  if (!bird.habitat || bird.habitat.length === 0) errors.push('Missing habitat');
  if (!bird.funFacts || bird.funFacts.length === 0) errors.push('Missing funFacts');
  if (!bird.imageUrl) errors.push('Missing imageUrl');
  if (!bird.difficulty) errors.push('Missing difficulty');
  if (bird.imageUrl && !bird.imageUrl.includes('wikimedia.org')) {
    errors.push('Image URL must be from Wikimedia Commons');
  }
  
  return errors;
}

export function validateAllBirds(): { valid: boolean; errors: Record<string, string[]> } {
  const allBirds = getAllBirds();
  const errors: Record<string, string[]> = {};
  
  allBirds.forEach(bird => {
    const birdErrors = validateBirdData(bird);
    if (birdErrors.length > 0) {
      errors[bird.englishName || 'Unknown'] = birdErrors;
    }
  });
  
  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export function getQuestionsByType(type: Question['type']): Question[] {
  return swedishBirdQuestions.filter(q => q.type === type);
}

export function validateQuizQuestions(): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  const questions = swedishBirdQuestions;
  
  if (questions.length === 0) {
    errors.push('No questions defined');
  }
  
  questions.forEach((q) => {
    if (!q.options.includes(q.correctAnswer)) {
      errors.push(`Question ${q.id}: Correct answer not in options`);
    }
    if (q.options.length !== 4 && q.options.length !== 2) {
      errors.push(`Question ${q.id}: Should have 4 options (or 2 for true/false)`);
    }
    if (q.type === 'image-identification' && !q.imageUrl) {
      errors.push(`Question ${q.id}: Image identification missing imageUrl`);
    }
  });
  
  // Check that we have enough questions
  if (questions.length < 12) {
    errors.push(`Only ${questions.length} questions, need at least 12`);
  }
  
  return {
    valid: errors.length === 0,
    errors,
  };
}
