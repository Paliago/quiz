import type { Question, QuizConfig } from './types';

// Dog Breed Facts Quiz - 12 AKC Breeds with Multiple Question Types
// All images sourced from Wikimedia Commons (verified, public domain or CC-BY-SA)

// 12 Popular AKC Breeds with comprehensive facts
const akcBreeds = {
  goldenRetriever: {
    name: 'Golden Retriever',
    group: 'Sporting',
    origin: 'Scotland',
    lifespan: '10-12 years',
    facts: [
      'Originally bred to retrieve waterfowl during hunting',
      'Excellent family dogs known for their gentle temperament',
      'Require regular exercise and mental stimulation',
      'Their water-resistant double coat requires regular grooming',
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Golden_Retriever_Dukedestiny01_drvd.jpg/640px-Golden_Retriever_Dukedestiny01_drvd.jpg',
  },
  germanShepherd: {
    name: 'German Shepherd',
    group: 'Herding',
    origin: 'Germany',
    lifespan: '9-13 years',
    facts: [
      'One of the most popular breeds for police and military work',
      'Highly intelligent and easily trained',
      'Need consistent mental and physical exercise',
      'Prone to hip dysplasia, requiring health screening',
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/German_Shepherd_-_DSC_0346_%2810096362833%29.jpg/640px-German_Shepherd_-_DSC_0346_%2810096362833%29.jpg',
  },
  labradorRetriever: {
    name: 'Labrador Retriever',
    group: 'Sporting',
    origin: 'Newfoundland, Canada',
    lifespan: '10-12 years',
    facts: [
      'Most popular dog breed in the US for over 30 years',
      'Comes in three colors: yellow, black, and chocolate',
      'Originally bred to help fishermen retrieve nets',
      'Known for their friendly, outgoing, and high-spirited nature',
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Labrador_on_Quantock_%282175262184%29.jpg/640px-Labrador_on_Quantock_%282175262184%29.jpg',
  },
  frenchBulldog: {
    name: 'French Bulldog',
    group: 'Non-Sporting',
    origin: 'France',
    lifespan: '10-12 years',
    facts: [
      'Known for their distinctive bat-like ears',
      'Cannot swim due to their heavy head and short legs',
      'Brachycephalic breed requiring care in hot weather',
      'Excellent apartment dogs due to low exercise needs',
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/French_Bulldog_Male.jpg/640px-French_Bulldog_Male.jpg',
  },
  beagle: {
    name: 'Beagle',
    group: 'Hound',
    origin: 'England',
    lifespan: '12-15 years',
    facts: [
      'Originally bred for tracking hare and rabbit',
      'Have an excellent sense of smell with 220 million scent receptors',
      'Famous for their baying howl and tendency to follow their nose',
      'Snoopy from Peanuts is the world\'s most famous beagle',
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Beagle_puppy_sitting_on_grass.jpg/640px-Beagle_puppy_sitting_on_grass.jpg',
  },
  poodle: {
    name: 'Poodle',
    group: 'Non-Sporting',
    origin: 'Germany/France',
    lifespan: '12-15 years',
    facts: [
      'Comes in three sizes: Standard, Miniature, and Toy',
      'Hypoallergenic coat makes them good for allergy sufferers',
      'Originally bred as water retrievers for hunting',
      'Highly intelligent and excel in obedience training',
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Full_attention_%288067543690%29.jpg/640px-Full_attention_%288067543690%29.jpg',
  },
  rottweiler: {
    name: 'Rottweiler',
    group: 'Working',
    origin: 'Germany',
    lifespan: '9-10 years',
    facts: [
      'Descended from Roman drover dogs used to herd cattle',
      'Known for their black coat with distinctive tan markings',
      'Natural guardians who are calm and confident',
      'Require early socialization and consistent training',
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Rottweiler-standing.jpg/640px-Rottweiler-standing.jpg',
  },
  boxer: {
    name: 'Boxer',
    group: 'Working',
    origin: 'Germany',
    lifespan: '10-12 years',
    facts: [
      'Named for their tendency to stand on hind legs and box with front paws',
      'Developed from the now-extinct Bullenbeisser breed',
      'Brachycephalic with a short muzzle and underbite',
      'Playful, patient, and protective with children',
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Male_fawn_Boxer_undocked.jpg/640px-Male_fawn_Boxer_undocked.jpg',
  },
  dachshund: {
    name: 'Dachshund',
    group: 'Hound',
    origin: 'Germany',
    lifespan: '12-16 years',
    facts: [
      'Name means "badger dog" in German',
      'Long body and short legs designed for digging into burrows',
      'Come in standard and miniature sizes, with three coat varieties',
      'Famous for being stubborn and independent thinkers',
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Dachshund_brown_puppy.jpg/640px-Dachshund_brown_puppy.jpg',
  },
  siberianHusky: {
    name: 'Siberian Husky',
    group: 'Working',
    origin: 'Siberia, Russia',
    lifespan: '12-14 years',
    facts: [
      'Originally bred by the Chukchi people for sled pulling',
      'Have a thick double coat that sheds heavily twice a year',
      'Known for their striking blue or multi-colored eyes',
      'High energy dogs that need extensive daily exercise',
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Black-Magic-Big-Boy.jpg/640px-Black-Magic-Big-Boy.jpg',
  },
  shihTzu: {
    name: 'Shih Tzu',
    group: 'Toy',
    origin: 'Tibet/China',
    lifespan: '10-16 years',
    facts: [
      'Name means "lion dog" in Mandarin Chinese',
      'Bred to be companion dogs for Chinese royalty',
      'Have long flowing coats that require daily grooming',
      'Friendly, outgoing, and great with families',
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Shihtzu_%28cropped%29.jpg/640px-Shihtzu_%28cropped%29.jpg',
  },
  borderCollie: {
    name: 'Border Collie',
    group: 'Herding',
    origin: 'Scotland/England border',
    lifespan: '12-15 years',
    facts: [
      'Considered the most intelligent dog breed',
      'Bred specifically for herding sheep along the Anglo-Scottish border',
      'Require extensive mental and physical stimulation',
      'Can learn a new command in under 5 repetitions',
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Border_Collie_portrait.jpg/640px-Border_Collie_portrait.jpg',
  },
};

export const dogBreedQuestions: Question[] = [
  // Type 1: Image Identification (3 questions)
  {
    id: 1,
    type: 'image-identification',
    questionText: 'What breed is this dog?',
    imageUrl: akcBreeds.goldenRetriever.image,
    options: ['Golden Retriever', 'Labrador Retriever', 'Irish Setter', 'Cocker Spaniel'],
    correctAnswer: 'Golden Retriever',
    category: 'AKC Sporting Group',
    difficulty: 'easy',
    breedName: akcBreeds.goldenRetriever.name,
  },
  {
    id: 2,
    type: 'image-identification',
    questionText: 'Identify this working breed:',
    imageUrl: akcBreeds.germanShepherd.image,
    options: ['German Shepherd', 'Belgian Malinois', 'Doberman Pinscher', 'Rottweiler'],
    correctAnswer: 'German Shepherd',
    category: 'AKC Herding Group',
    difficulty: 'easy',
    breedName: akcBreeds.germanShepherd.name,
  },
  {
    id: 3,
    type: 'image-identification',
    questionText: 'What breed is shown here?',
    imageUrl: akcBreeds.frenchBulldog.image,
    options: ['French Bulldog', 'Boston Terrier', 'Pug', 'English Bulldog'],
    correctAnswer: 'French Bulldog',
    category: 'AKC Non-Sporting Group',
    difficulty: 'easy',
    breedName: akcBreeds.frenchBulldog.name,
  },

  // Type 2: True/False Facts (3 questions)
  {
    id: 4,
    type: 'true-false',
    questionText: 'True or False: Labrador Retrievers originally came from Labrador, Canada.',
    options: ['True', 'False'],
    correctAnswer: 'False',
    category: 'Breed Origins',
    difficulty: 'medium',
    fact: 'Labrador Retrievers originated in Newfoundland, not Labrador. They were bred to help fishermen retrieve nets and catch fish.',
    breedName: akcBreeds.labradorRetriever.name,
  },
  {
    id: 5,
    type: 'true-false',
    questionText: 'True or False: French Bulldogs are excellent swimmers due to their compact build.',
    options: ['True', 'False'],
    correctAnswer: 'False',
    category: 'Breed Characteristics',
    difficulty: 'medium',
    fact: 'French Bulldogs cannot swim due to their heavy head, short legs, and brachycephalic (flat-faced) structure.',
    breedName: akcBreeds.frenchBulldog.name,
  },
  {
    id: 6,
    type: 'true-false',
    questionText: 'True or False: Border Collies are widely considered the most intelligent dog breed.',
    options: ['True', 'False'],
    correctAnswer: 'True',
    category: 'Breed Intelligence',
    difficulty: 'easy',
    fact: 'Border Collies consistently rank #1 in intelligence tests and can learn new commands in under 5 repetitions.',
    breedName: akcBreeds.borderCollie.name,
  },

  // Type 3: Fact Multiple Choice (3 questions)
  {
    id: 7,
    type: 'fact-multiple-choice',
    questionText: 'What were Beagles originally bred for?',
    options: [
      'Tracking hare and rabbit',
      'Guarding livestock',
      'Herding sheep',
      'Pulling sleds in snow',
    ],
    correctAnswer: 'Tracking hare and rabbit',
    category: 'Breed History',
    difficulty: 'medium',
    fact: akcBreeds.beagle.facts[0],
    breedName: akcBreeds.beagle.name,
  },
  {
    id: 8,
    type: 'fact-multiple-choice',
    questionText: 'How many scent receptors do Beagles have in their nose?',
    options: [
      'Approximately 220 million',
      'Approximately 100 million',
      'Approximately 50 million',
      'Approximately 300 million',
    ],
    correctAnswer: 'Approximately 220 million',
    category: 'Breed Facts',
    difficulty: 'hard',
    fact: akcBreeds.beagle.facts[1],
    breedName: akcBreeds.beagle.name,
  },
  {
    id: 9,
    type: 'fact-multiple-choice',
    questionText: 'What does "Dachshund" mean in German?',
    options: [
      'Badger dog',
      'Sausage dog',
      'Little hunter',
      'Burrow dog',
    ],
    correctAnswer: 'Badger dog',
    category: 'Breed Names',
    difficulty: 'medium',
    fact: akcBreeds.dachshund.facts[0],
    breedName: akcBreeds.dachshund.name,
  },

  // Type 4: Characteristic Matching (3 questions)
  {
    id: 10,
    type: 'characteristic-match',
    questionText: 'Which breed has a distinctive underbite and was named for standing on hind legs to "box"?',
    imageUrl: akcBreeds.boxer.image,
    options: ['Boxer', 'Bulldog', 'Great Dane', 'Mastiff'],
    correctAnswer: 'Boxer',
    category: 'Breed Characteristics',
    difficulty: 'medium',
    fact: akcBreeds.boxer.facts[0],
    breedName: akcBreeds.boxer.name,
  },
  {
    id: 11,
    type: 'characteristic-match',
    questionText: 'Which breed is known for having bat-like ears and being brachycephalic?',
    imageUrl: akcBreeds.frenchBulldog.image,
    options: ['French Bulldog', 'Boston Terrier', 'Pug', 'Bulldog'],
    correctAnswer: 'French Bulldog',
    category: 'Breed Appearance',
    difficulty: 'easy',
    fact: akcBreeds.frenchBulldog.facts[0],
    breedName: akcBreeds.frenchBulldog.name,
  },
  {
    id: 12,
    type: 'characteristic-match',
    questionText: 'Which breed comes in Standard, Miniature, and Toy sizes with a hypoallergenic coat?',
    imageUrl: akcBreeds.poodle.image,
    options: ['Poodle', 'Schnauzer', 'Terrier', 'Spaniel'],
    correctAnswer: 'Poodle',
    category: 'Breed Varieties',
    difficulty: 'easy',
    fact: akcBreeds.poodle.facts[1],
    breedName: akcBreeds.poodle.name,
  },
];

export const dogBreedQuizConfig: QuizConfig = {
  questions: dogBreedQuestions,
  title: 'Dog Breed Facts Quiz',
  description: 'Test your knowledge of 12 popular AKC breeds with image identification, true/false, and fact-based questions!',
  timePerQuestion: 30,
  theme: {
    name: 'AKC Breeds',
    primaryColor: '#2563eb', // blue-600
    secondaryColor: '#1d4ed8', // blue-700
    backgroundColor: '#0f172a', // slate-900
    textColor: '#f8fafc', // slate-50
    accentColor: '#3b82f6', // blue-500
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
};

// Helper function to get all breeds for reference
export const getAllBreeds = () => akcBreeds;
