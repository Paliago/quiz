import type { Question, QuizConfig } from './types';

// Svenska Trädgårdsfåglar Quiz - 12 Vanligaste Arterna vid Svenska Fågelbord
// Baserat på Birdlife Sveriges forskning om fågelbordspopulationer
// Alla bilder från Wikimedia Commons (CC-BY-SA eller public domain)

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
      'Svart huvud med vita kinder',
      'Gul mage med svart mittstreck',
      'Grönaktig rygg',
      'Svart streck ner över bröstet',
    ],
    status: 'Vanligaste fågeln vid fågelbord i Sverige (#1 vid fågelbord)',
    habitat: ['Trädgårdar', 'Skogar', 'Parker', 'Stadsområden'],
    funFacts: [
      'Kan lära sig att ringa i en bjällra för mat',
      'En av de mest utbredda fågelarterna i Europa',
      'Deras sång låter som "lärare-lärare-lärare"',
      'Mycket anpassningsbar till stadsmiljöer',
    ],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Parus_major_-_01.jpg/640px-Parus_major_-_01.jpg',
    difficulty: 'easy',
  },
  blames: {
    swedishName: 'Blåmes',
    englishName: 'Eurasian Blue Tit',
    scientificName: 'Cyanistes caeruleus',
    fieldMarks: [
      'Blå hjässa och vingar',
      'Gul mage och bröst',
      'Liten storlek med rund kropp',
      'Blå stjärt',
    ],
    status: '#2 vanligaste vid svenska fågelbord',
    habitat: ['Trädgårdar', 'Skogar', 'Parker', 'Häckar'],
    funFacts: [
      'Mycket akrobatiska vid matning, hänger ofta upp och ner',
      'Använder gärna fågelholkar',
      'Äter insekter, frön och nötter',
      'Populationen minskar i vissa områden',
    ],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Eurasian_blue_tit_Lancashire.jpg/640px-Eurasian_blue_tit_Lancashire.jpg',
    difficulty: 'easy',
  },
  pilfink: {
    swedishName: 'Pilfink',
    englishName: 'House Sparrow',
    scientificName: 'Passer domesticus',
    fieldMarks: [
      'Grå hjässa (hane)',
      'Kastanjefärgad rygg med svarta streck',
      'Grå mage',
      'Svart haklapp (hane i häckningsdräkt)',
    ],
    status: '#3 vanligaste vid fågelbord, minskande population',
    habitat: ['Trädgårdar', 'Stadsområden', 'Jordbruksmark', 'Byar'],
    funFacts: [
      'En gång den vanligaste fågeln i Sverige, nu minskande',
      'Mycket sociala fåglar som lever i kolonier',
      'Hanar har en svart haklapp som blir mörkare med bättre hälsa',
      'Anpassade att leva nära människor',
    ],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/House_Sparrow_RWD2.jpg/640px-House_Sparrow_RWD2.jpg',
    difficulty: 'easy',
    population: 'Okänd men minskande',
  },
  koltrast: {
    swedishName: 'Koltrast',
    englishName: 'Eurasian Blackbird',
    scientificName: 'Turdus merula',
    fieldMarks: [
      'Hane: Heligt svart med lysorange näbb',
      'Hona: Mörkbrun med mattare näbb',
      'Gul ögonring',
      'Medelstor trast',
    ],
    status: 'Sveriges nationalfågel, vanlig året runt',
    habitat: ['Trädgårdar', 'Skogar', 'Parker', 'Stadsområden'],
    funFacts: [
      'Röstades fram som Sveriges nationalfågel 1963',
      'Vacker flöjtliknande sång, särskilt i gryning och skymning',
      'Kan vara mycket tam och tillgänglig i trädgårdar',
      'Känd för sin melodiska sång',
    ],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Common_Blackbird.jpg/640px-Common_Blackbird.jpg',
    difficulty: 'easy',
    population: '3-6 miljoner par',
  },
  domherre: {
    swedishName: 'Domherre',
    englishName: 'Eurasian Bullfinch',
    scientificName: 'Pyrrhula pyrrhula',
    fieldMarks: [
      'Rosa/rött bröst (hane)',
      'Grå rygg',
      'Svart hjässa',
      'Tjock svart näbb',
    ],
    status: 'Population ökar, ovanlig vid fågelbord',
    habitat: ['Barrskogar', 'Trädgårdar med bärbuskar', 'Skogar'],
    funFacts: [
      'Hanar har vackert rosa-rött bröst',
      'Känd för att äta knoppar från fruktträd',
      'Populationen har ökat under de senaste åren',
      'Ses vanligtvis i par eller små familjegrupper',
    ],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Pyrrhula_pyrrhula_-_01.jpg/640px-Pyrrhula_pyrrhula_-_01.jpg',
    difficulty: 'medium',
  },
  grasiska: {
    swedishName: 'Gråsiska',
    englishName: 'Common Redpoll',
    scientificName: 'Acanthis flammea',
    fieldMarks: [
      'Rött pannband',
      'Rosa bröst (hane)',
      'Brunstreckad kropp',
      'Gul näbb',
    ],
    status: 'Invasionsart, antalen varierar dramatiskt',
    habitat: ['Björkskogar', 'Trädgårdar med björkar', 'Skogar'],
    funFacts: [
      'Kallas "invasionsfåglar" eftersom deras antal varierar årligen',
      'Kommer i stora flockar vissa vintrar',
      'Älskar björkfrön och nigerfrön vid fågelbord',
      'Mindre än en sparv med distinkt röd hjässa',
    ],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Common_Redpoll.jpg/640px-Common_Redpoll.jpg',
    difficulty: 'medium',
  },
  rodhake: {
    swedishName: 'Rödhake',
    englishName: 'European Robin',
    scientificName: 'Erithacus rubecula',
    fieldMarks: [
      'Orange-rött bröst och ansikte',
      'Brun rygg och vingar',
      'Vit mage',
      'Distinkt rund form',
    ],
    status: '7,6 miljoner par i Sverige, utbredd',
    habitat: ['Trädgårdar', 'Skogar', 'Parker', 'Häckar'],
    funFacts: [
      '7,6 miljoner par - en av de mest talrika fåglarna',
      'Mycket revirhävdande, slåss till och med mot sin egen spegelbild',
      'Följer ofta trädgårdsarbetare på jakt efter maskar',
      'Sjunger nästan året runt, till och med på natten under gatlyktor',
    ],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Erithacus_rubecula_%28cropped%29.jpg/640px-Erithacus_rubecula_%28cropped%29.jpg',
    difficulty: 'easy',
    population: '7,6 miljoner par',
  },
  bofink: {
    swedishName: 'Bofink',
    englishName: 'Common Chaffinch',
    scientificName: 'Fringilla coelebs',
    fieldMarks: [
      'Rosa bröst (hane)',
      'Blågrå hjässa (hane)',
      'Vita vingband',
      'Gafflad stjärt',
    ],
    status: '16,8 miljoner par - #2 vanligaste fågeln i Sverige',
    habitat: ['Skogar', 'Trädgårdar', 'Parker', 'Jordbruksmark'],
    funFacts: [
      '16,8 miljoner par - näst vanligaste häckfågeln i Sverige',
      'Hanar har vackert rosa bröst och blågrått huvud',
      'Honor är matta bruna för kamouflage',
      'Känd för sin fallande sång som slutar med "pink pink"',
    ],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Fringilla_coelebs_-_01.jpg/640px-Fringilla_coelebs_-_01.jpg',
    difficulty: 'easy',
    population: '16,8 miljoner par',
  },
  skata: {
    swedishName: 'Skata',
    englishName: 'Eurasian Magpie',
    scientificName: 'Pica pica',
    fieldMarks: [
      'Svart och vit fjäderdräkt',
      'Iriserande blågröna vingar',
      'Lång stjärt',
      'Stor storlek för en tätting',
    ],
    status: 'Vanlig och utbredd, intelligent',
    habitat: ['Trädgårdar', 'Skogar', 'Parker', 'Stadsområden', 'Jordbruksmark'],
    funFacts: [
      'En av de mest intelligenta fåglarna, kan känna igen sig själv i speglar',
      'Mycket social med komplexa sociala strukturer',
      'Kan leva upp till 20 år',
      'Allätare och opportunistiska matare',
    ],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Pica_pica_-_Compans_Caffarelli_-_2012-05-16.jpg/640px-Pica_pica_-_Compans_Caffarelli_-_2012-05-16.jpg',
    difficulty: 'easy',
  },
  kaja: {
    swedishName: 'Kaja',
    englishName: 'Western Jackdaw',
    scientificName: 'Coloeus monedula',
    fieldMarks: [
      'Liten kråkstorlek',
      'Grå nacke',
      'Ljusa ögon',
      'Svart kropp',
    ],
    status: 'Vanlig, ses ofta i flockar',
    habitat: ['Trädgårdar', 'Stadsområden', 'Byar', 'Jordbruksmark'],
    funFacts: [
      'Minsta medlemmen av kråkfamiljen i Sverige',
      'Känd för sin ljusgrå nacke och lysande ögon',
      'Mycket intelligent och social',
      'Ses ofta följa efter rokor och kråkor',
    ],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Coloeus_monedula_-Wroclaw%2C_Poland_-head-8a.jpg/640px-Coloeus_monedula_-Wroclaw%2C_Poland_-head-8a.jpg',
    difficulty: 'medium',
  },
  gulsparv: {
    swedishName: 'Gulsparv',
    englishName: 'Yellowhammer',
    scientificName: 'Emberiza citrinella',
    fieldMarks: [
      'Ljusgult huvud (hane)',
      'Kastanjefärgad rygg',
      'Gul undersida',
      'Rostiga bröstteckningar',
    ],
    status: 'Vanlig jordbruksfågel, minskande',
    habitat: ['Jordbruksmark', 'Trädgårdar', 'Häckar', 'Öppna skogar'],
    funFacts: [
      'Känd för sin "lite-bröd-och-ingen-ost"-sång',
      'Hanar har ljusgult huvud i häckningsdräkt',
      'Populationen har minskat med moderna jordbruksmetoder',
      'Markmatande fåglar som föredrar frön',
    ],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Emberiza_citrinella_-_01.jpg/640px-Emberiza_citrinella_-_01.jpg',
    difficulty: 'medium',
  },
  steglits: {
    swedishName: 'Steglits',
    englishName: 'European Goldfinch',
    scientificName: 'Carduelis carduelis',
    fieldMarks: [
      'Rött ansikte',
      'Svart och vitt huvud',
      'Gult vingband',
      'Brun kropp',
    ],
    status: 'Vacker och vanlig, älskar tistelfrön',
    habitat: ['Trädgårdar', 'Parker', 'Jordbruksmark', 'Öppna skogar'],
    funFacts: [
      'En av de mest färggranna fåglarna vid svenska fågelbord',
      'Specialiserad på att äta tistel- och kardborrefrön',
      'Känd för sin musikaliska kvittrande sång',
      'Deras svenska namn "Steglits" kommer från deras tisteldiet',
    ],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Carduelis_carduelis_-_01.jpg/640px-Carduelis_carduelis_-_01.jpg',
    difficulty: 'easy',
  },
};

// Hjälpfunktion för att få slumpmässiga fåglar exklusive en specifik
function getRandomBirds(excludeBird: SwedishBird, count: number): SwedishBird[] {
  const allBirds = Object.values(swedishGardenBirds);
  const filtered = allBirds.filter(bird => bird.englishName !== excludeBird.englishName);
  const shuffled = [...filtered].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

// Generera fotoidentifieringsfrågor (Typ 1)
function generatePhotoQuestions(): Question[] {
  const birds = Object.values(swedishGardenBirds);
  return birds.slice(0, 3).map((bird, index) => {
    const distractors = getRandomBirds(bird, 3);
    return {
      id: index + 1,
      type: 'image-identification',
      questionText: `Identifiera denna fågel (${bird.swedishName}):`,
      imageUrl: bird.imageUrl,
      options: [bird.swedishName, ...distractors.map(b => b.swedishName)],
      correctAnswer: bird.swedishName,
      category: 'Fotoidentifiering',
      difficulty: bird.difficulty,
      fact: `${bird.swedishName} - ${bird.status}. ${bird.funFacts[0]}`,
      breedName: bird.swedishName,
    };
  });
}

// Generera svenska namnmatchningsfrågor (Typ 2)
function generateSwedishNameQuestions(): Question[] {
  const birds = Object.values(swedishGardenBirds);
  return birds.slice(3, 6).map((bird, index) => {
    const distractors = getRandomBirds(bird, 3);
    return {
      id: index + 4,
      type: 'fact-multiple-choice',
      questionText: `Vilket svenskt namn motsvarar "${bird.englishName}"?`,
      options: [bird.swedishName, ...distractors.map(b => b.swedishName)],
      correctAnswer: bird.swedishName,
      category: 'Svenska Namn',
      difficulty: bird.difficulty,
      fact: `"${bird.swedishName}" är det svenska namnet för "${bird.englishName}" på engelska. ${bird.status}`,
      breedName: bird.swedishName,
    };
  });
}

// Generera vetenskapliga namnfrågor (Typ 3)
function generateScientificNameQuestions(): Question[] {
  const birds = Object.values(swedishGardenBirds);
  return birds.slice(6, 9).map((bird, index) => {
    const distractors = getRandomBirds(bird, 3);
    return {
      id: index + 7,
      type: 'fact-multiple-choice',
      questionText: `Vad är det vetenskapliga namnet för ${bird.swedishName}?`,
      options: [bird.scientificName, ...distractors.map(b => b.scientificName)],
      correctAnswer: bird.scientificName,
      category: 'Vetenskapliga Namn',
      difficulty: 'hard',
      fact: `${bird.swedishName} är vetenskapligt känd som ${bird.scientificName}.`,
      breedName: bird.swedishName,
    };
  });
}

// Generera fältkänneteckenfrågor (Typ 4)
function generateFieldMarkQuestions(): Question[] {
  const fieldMarkData = [
    { bird: swedishGardenBirds.talgoxe, mark: 'svart huvud med vita kinder och gul mage' },
    { bird: swedishGardenBirds.blames, mark: 'blå hjässa och gul mage' },
    { bird: swedishGardenBirds.domherre, mark: 'rosa/rött bröst och svart hjässa' },
  ];

  return fieldMarkData.map((data, index) => {
    const distractors = getRandomBirds(data.bird, 3);
    return {
      id: index + 10,
      type: 'characteristic-match',
      questionText: `Vilken fågel har ${data.mark}?`,
      options: [data.bird.swedishName, ...distractors.map(b => b.swedishName)],
      correctAnswer: data.bird.swedishName,
      category: 'Fältkännetecken',
      difficulty: data.bird.difficulty,
      fact: `${data.bird.swedishName}: ${data.bird.fieldMarks.join(', ')}`,
      breedName: data.bird.swedishName,
    };
  });
}

// Generera habitatmatchningsfrågor (Typ 5)
function generateHabitatQuestions(): Question[] {
  const habitatData = [
    { bird: swedishGardenBirds.koltrast, habitat: 'Sveriges nationalfågel, vanligtvis i trädgårdar och parker' },
    { bird: swedishGardenBirds.rodhake, habitat: 'trädgårdar och skogar med 7,6 miljoner par i Sverige' },
    { bird: swedishGardenBirds.bofink, habitat: 'skogar och trädgårdar, den #2 vanligaste fågeln med 16,8 miljoner par' },
  ];

  return habitatData.map((data, index) => {
    const distractors = getRandomBirds(data.bird, 3);
    return {
      id: index + 13,
      type: 'fact-multiple-choice',
      questionText: `Vilken fågel finns vanligtvis i ${data.habitat}?`,
      options: [data.bird.swedishName, ...distractors.map(b => b.swedishName)],
      correctAnswer: data.bird.swedishName,
      category: 'Habitat & Utbredning',
      difficulty: 'medium',
      fact: `${data.bird.swedishName}: ${data.bird.habitat.join(', ')}. ${data.bird.status}`,
      breedName: data.bird.swedishName,
    };
  });
}

// Generera sant/falskt-frågor (Typ 6)
function generateTrueFalseQuestions(): Question[] {
  return [
    {
      id: 16,
      type: 'true-false',
      questionText: 'Sant eller falskt: Koltrasten är Sveriges nationalfågel.',
      options: ['Sant', 'Falskt'],
      correctAnswer: 'Sant',
      category: 'Fågelfakta',
      difficulty: 'easy',
      fact: 'Koltrasten röstades fram som Sveriges nationalfågel 1963. Den är känd för sin melodiska flöjtliknande sång.',
      breedName: swedishGardenBirds.koltrast.swedishName,
    },
    {
      id: 17,
      type: 'true-false',
      questionText: 'Sant eller falskt: Bofinken är den #2 vanligaste fågeln i Sverige med 16,8 miljoner par.',
      options: ['Sant', 'Falskt'],
      correctAnswer: 'Sant',
      category: 'Populationsfakta',
      difficulty: 'medium',
      fact: 'Bofinken har 16,8 miljoner häckande par i Sverige, vilket gör den till den näst vanligaste fågeln efter lövsångaren.',
      breedName: swedishGardenBirds.bofink.swedishName,
    },
    {
      id: 18,
      type: 'true-false',
      questionText: 'Sant eller falskt: Talgoxen är den #2 vanligaste fågeln vid svenska fågelbord.',
      options: ['Sant', 'Falskt'],
      correctAnswer: 'Falskt',
      category: 'Fågelbordsfakta',
      difficulty: 'medium',
      fact: 'Talgoxen är faktiskt den #1 vanligaste fågeln vid svenska fågelbord, inte #2. Blåmesen är #2.',
      breedName: swedishGardenBirds.talgoxe.swedishName,
    },
  ];
}

// Generera ytterligare fotoidentifieringsfrågor (Typ 7)
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
      questionText: `Identifiera denna fågel:`,
      imageUrl: bird.imageUrl,
      options: [bird.swedishName, ...distractors.map(b => b.swedishName)],
      correctAnswer: bird.swedishName,
      category: 'Fotoidentifiering',
      difficulty: bird.difficulty,
      fact: `${bird.swedishName}: ${bird.funFacts[0]}`,
      breedName: bird.swedishName,
    };
  });
}

// Kombinera alla frågor
export const swedishBirdQuestions: Question[] = [
  ...generatePhotoQuestions(),
  ...generateSwedishNameQuestions(),
  ...generateScientificNameQuestions(),
  ...generateFieldMarkQuestions(),
  ...generateHabitatQuestions(),
  ...generateTrueFalseQuestions(),
  ...generateAdditionalPhotoQuestions(),
];

// Quiz-konfiguration
export const swedishBirdQuizConfig: QuizConfig = {
  questions: swedishBirdQuestions,
  title: 'Svenska Trädgårdsfåglar Quiz',
  description: 'Testa dina kunskaper om de 12 vanligaste svenska trädgårdsfåglarna! Lär dig identifiera dem utseendemässigt, efter namn och fältkännetecken.',
  timePerQuestion: 35,
  theme: {
    name: 'Nordisk Skog',
    primaryColor: '#166534', // green-700
    secondaryColor: '#14532d', // green-800
    backgroundColor: '#052e16', // green-950 - dark background
    textColor: '#dcfce7', // green-100 - light text
    accentColor: '#22c55e', // green-500
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
};

// Hjälpfunktioner för tester
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
  
  if (!bird.swedishName) errors.push('Saknar swedishName');
  if (!bird.englishName) errors.push('Saknar englishName');
  if (!bird.scientificName) errors.push('Saknar scientificName');
  if (!bird.fieldMarks || bird.fieldMarks.length === 0) errors.push('Saknar fieldMarks');
  if (!bird.status) errors.push('Saknar status');
  if (!bird.habitat || bird.habitat.length === 0) errors.push('Saknar habitat');
  if (!bird.funFacts || bird.funFacts.length === 0) errors.push('Saknar funFacts');
  if (!bird.imageUrl) errors.push('Saknar imageUrl');
  if (!bird.difficulty) errors.push('Saknar difficulty');
  if (bird.imageUrl && !bird.imageUrl.includes('wikimedia.org')) {
    errors.push('Bild-URL måste vara från Wikimedia Commons');
  }
  
  return errors;
}

export function validateAllBirds(): { valid: boolean; errors: Record<string, string[]> } {
  const allBirds = getAllBirds();
  const errors: Record<string, string[]> = {};
  
  allBirds.forEach(bird => {
    const birdErrors = validateBirdData(bird);
    if (birdErrors.length > 0) {
      errors[bird.swedishName || 'Okänd'] = birdErrors;
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
    errors.push('Inga frågor definierade');
  }
  
  questions.forEach((q) => {
    if (!q.options.includes(q.correctAnswer)) {
      errors.push(`Fråga ${q.id}: Rätt svar finns inte bland alternativen`);
    }
    if (q.options.length !== 4 && q.options.length !== 2) {
      errors.push(`Fråga ${q.id}: Bör ha 4 alternativ (eller 2 för sant/falskt)`);
    }
    if (q.type === 'image-identification' && !q.imageUrl) {
      errors.push(`Fråga ${q.id}: Bildidentifiering saknar imageUrl`);
    }
  });
  
  // Kontrollera att vi har tillräckligt många frågor
  if (questions.length < 12) {
    errors.push(`Endast ${questions.length} frågor, behöver minst 12`);
  }
  
  return {
    valid: errors.length === 0,
    errors,
  };
}
