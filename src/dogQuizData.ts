import type { Question, QuizConfig } from './types';

// Dog Breed Quiz Questions - 35 breeds total
// Each question shows a dog image and asks for the breed with 4 alternatives

export const dogBreedQuestions: Question[] = [
  {
    id: 1,
    imageUrl: '/images/golden-retriever.jpg',
    options: ['Golden Retriever', 'Labrador Retriever', 'Cocker Spaniel', 'Irish Setter'],
    correctAnswer: 'Golden Retriever',
    category: 'Sporting Dogs',
    difficulty: 'easy',
  },
  {
    id: 2,
    imageUrl: '/images/french-bulldog.jpg',
    options: ['French Bulldog', 'Boston Terrier', 'Pug', 'English Bulldog'],
    correctAnswer: 'French Bulldog',
    category: 'Companion Dogs',
    difficulty: 'easy',
  },
  {
    id: 3,
    imageUrl: '/images/german-shepherd.jpg',
    options: ['German Shepherd', 'Belgian Malinois', 'Doberman', 'Rottweiler'],
    correctAnswer: 'German Shepherd',
    category: 'Working Dogs',
    difficulty: 'easy',
  },
  {
    id: 4,
    imageUrl: '/images/beagle.jpg',
    options: ['Beagle', 'Basset Hound', 'Bloodhound', 'Dachshund'],
    correctAnswer: 'Beagle',
    category: 'Hound Dogs',
    difficulty: 'medium',
  },
  {
    id: 5,
    imageUrl: '/images/bulldog.jpg',
    options: ['Bulldog', 'Mastiff', 'Boxer', 'Pit Bull'],
    correctAnswer: 'Bulldog',
    category: 'Non-Sporting',
    difficulty: 'easy',
  },
  {
    id: 6,
    imageUrl: '/images/poodle.jpg',
    options: ['Poodle', 'Bichon Frise', 'Maltese', 'Cockapoo'],
    correctAnswer: 'Poodle',
    category: 'Non-Sporting',
    difficulty: 'medium',
  },
  {
    id: 7,
    imageUrl: '/images/chihuahua.jpg',
    options: ['Chihuahua', 'Yorkshire Terrier', 'Pomeranian', 'Maltese'],
    correctAnswer: 'Chihuahua',
    category: 'Toy Dogs',
    difficulty: 'easy',
  },
  {
    id: 8,
    imageUrl: '/images/husky.jpg',
    options: ['Siberian Husky', 'Alaskan Malamute', 'Samoyed', 'Akita'],
    correctAnswer: 'Siberian Husky',
    category: 'Working Dogs',
    difficulty: 'medium',
  },
  {
    id: 9,
    imageUrl: '/images/dachshund.jpg',
    options: ['Dachshund', 'Corgi', 'Basset Hound', 'Pembroke Welsh Corgi'],
    correctAnswer: 'Dachshund',
    category: 'Hound Dogs',
    difficulty: 'easy',
  },
  {
    id: 10,
    imageUrl: '/images/shih-tzu.jpg',
    options: ['Shih Tzu', 'Lhasa Apso', 'Pekingese', 'Maltese'],
    correctAnswer: 'Shih Tzu',
    category: 'Toy Dogs',
    difficulty: 'hard',
  },
  {
    id: 11,
    imageUrl: '/images/boxer.jpg',
    options: ['Boxer', 'Doberman', 'Great Dane', 'Mastiff'],
    correctAnswer: 'Boxer',
    category: 'Working Dogs',
    difficulty: 'medium',
  },
  {
    id: 12,
    imageUrl: '/images/rottweiler.jpg',
    options: ['Rottweiler', 'Doberman', 'German Shepherd', 'Cane Corso'],
    correctAnswer: 'Rottweiler',
    category: 'Working Dogs',
    difficulty: 'medium',
  },
  {
    id: 13,
    imageUrl: '/images/yorkshire-terrier.jpg',
    options: ['Yorkshire Terrier', 'Maltese', 'Shih Tzu', 'Silky Terrier'],
    correctAnswer: 'Yorkshire Terrier',
    category: 'Toy Dogs',
    difficulty: 'hard',
  },
  {
    id: 14,
    imageUrl: '/images/border-collie.jpg',
    options: ['Border Collie', 'Australian Shepherd', 'Shetland Sheepdog', 'Collie'],
    correctAnswer: 'Border Collie',
    category: 'Herding Dogs',
    difficulty: 'medium',
  },
  {
    id: 15,
    imageUrl: '/images/corgi.jpg',
    options: ['Corgi', 'Dachshund', 'Basset Hound', 'Shiba Inu'],
    correctAnswer: 'Corgi',
    category: 'Herding Dogs',
    difficulty: 'easy',
  },
  // NEW BREEDS - 20 more
  {
    id: 16,
    imageUrl: '/images/labrador.jpg',
    options: ['Labrador Retriever', 'Golden Retriever', 'Chesapeake Bay Retriever', 'Flat-Coated Retriever'],
    correctAnswer: 'Labrador Retriever',
    category: 'Sporting Dogs',
    difficulty: 'easy',
  },
  {
    id: 17,
    imageUrl: '/images/australian-shepherd.jpg',
    options: ['Australian Shepherd', 'Border Collie', 'Australian Cattle Dog', 'Blue Heeler'],
    correctAnswer: 'Australian Shepherd',
    category: 'Herding Dogs',
    difficulty: 'medium',
  },
  {
    id: 18,
    imageUrl: '/images/pug.jpg',
    options: ['Pug', 'French Bulldog', 'Boston Terrier', 'Shih Tzu'],
    correctAnswer: 'Pug',
    category: 'Toy Dogs',
    difficulty: 'easy',
  },
  {
    id: 19,
    imageUrl: '/images/great-dane.jpg',
    options: ['Great Dane', 'Irish Wolfhound', 'Scottish Deerhound', 'Mastiff'],
    correctAnswer: 'Great Dane',
    category: 'Working Dogs',
    difficulty: 'medium',
  },
  {
    id: 20,
    imageUrl: '/images/doberman.jpg',
    options: ['Doberman', 'Rottweiler', 'German Pinscher', 'Miniature Pinscher'],
    correctAnswer: 'Doberman',
    category: 'Working Dogs',
    difficulty: 'medium',
  },
  {
    id: 21,
    imageUrl: '/images/cocker-spaniel.jpg',
    options: ['Cocker Spaniel', 'Springer Spaniel', 'Cavalier King Charles Spaniel', 'Brittany'],
    correctAnswer: 'Cocker Spaniel',
    category: 'Sporting Dogs',
    difficulty: 'medium',
  },
  {
    id: 22,
    imageUrl: '/images/pomeranian.jpg',
    options: ['Pomeranian', 'Japanese Spitz', 'American Eskimo Dog', 'Samoyed'],
    correctAnswer: 'Pomeranian',
    category: 'Toy Dogs',
    difficulty: 'hard',
  },
  {
    id: 23,
    imageUrl: '/images/shiba.jpg',
    options: ['Shiba Inu', 'Akita', 'Chow Chow', 'Jindo'],
    correctAnswer: 'Shiba Inu',
    category: 'Non-Sporting',
    difficulty: 'medium',
  },
  {
    id: 24,
    imageUrl: '/images/bernese-mountain.jpg',
    options: ['Bernese Mountain Dog', 'Saint Bernard', 'Newfoundland', 'Great Pyrenees'],
    correctAnswer: 'Bernese Mountain Dog',
    category: 'Working Dogs',
    difficulty: 'medium',
  },
  {
    id: 25,
    imageUrl: '/images/maltese.jpg',
    options: ['Maltese', 'Bichon Frise', 'Havanese', 'Coton de Tulear'],
    correctAnswer: 'Maltese',
    category: 'Toy Dogs',
    difficulty: 'hard',
  },
  {
    id: 26,
    imageUrl: '/images/pitbull.jpg',
    options: ['Pit Bull Terrier', 'American Staffordshire Terrier', 'Staffordshire Bull Terrier', 'Bull Terrier'],
    correctAnswer: 'Pit Bull Terrier',
    category: 'Terrier Dogs',
    difficulty: 'medium',
  },
  {
    id: 27,
    imageUrl: '/images/whippet.jpg',
    options: ['Whippet', 'Italian Greyhound', 'Greyhound', 'Saluki'],
    correctAnswer: 'Whippet',
    category: 'Hound Dogs',
    difficulty: 'hard',
  },
  {
    id: 28,
    imageUrl: '/images/cane-corso.jpg',
    options: ['Cane Corso', 'Mastiff', 'Dogue de Bordeaux', 'Neapolitan Mastiff'],
    correctAnswer: 'Cane Corso',
    category: 'Working Dogs',
    difficulty: 'hard',
  },
  {
    id: 29,
    imageUrl: '/images/newfoundland.jpg',
    options: ['Newfoundland', 'Saint Bernard', 'Leonberger', 'Mastiff'],
    correctAnswer: 'Newfoundland',
    category: 'Working Dogs',
    difficulty: 'medium',
  },
  {
    id: 30,
    imageUrl: '/images/dalmatian.jpg',
    options: ['Dalmatian', 'Pointer', 'English Setter', 'Weimaraner'],
    correctAnswer: 'Dalmatian',
    category: 'Non-Sporting',
    difficulty: 'easy',
  },
  {
    id: 31,
    imageUrl: '/images/weimaraner.jpg',
    options: ['Weimaraner', 'Vizsla', 'Rhodesian Ridgeback', 'German Shorthaired Pointer'],
    correctAnswer: 'Weimaraner',
    category: 'Sporting Dogs',
    difficulty: 'hard',
  },
  {
    id: 32,
    imageUrl: '/images/basset-hound.jpg',
    options: ['Basset Hound', 'Bloodhound', 'Beagle', 'Coonhound'],
    correctAnswer: 'Basset Hound',
    category: 'Hound Dogs',
    difficulty: 'easy',
  },
  {
    id: 33,
    imageUrl: '/images/jack-russell.jpg',
    options: ['Jack Russell Terrier', 'Parson Russell Terrier', 'Fox Terrier', 'Rat Terrier'],
    correctAnswer: 'Jack Russell Terrier',
    category: 'Terrier Dogs',
    difficulty: 'medium',
  },
  {
    id: 34,
    imageUrl: '/images/samoyed.jpg',
    options: ['Samoyed', 'American Eskimo Dog', 'Siberian Husky', 'Alaskan Malamute'],
    correctAnswer: 'Samoyed',
    category: 'Working Dogs',
    difficulty: 'medium',
  },
  {
    id: 35,
    imageUrl: '/images/chow-chow.jpg',
    options: ['Chow Chow', 'Shar Pei', 'Akita', 'Shiba Inu'],
    correctAnswer: 'Chow Chow',
    category: 'Non-Sporting',
    difficulty: 'medium',
  },
];

export const dogBreedQuizConfig: QuizConfig = {
  questions: dogBreedQuestions,
  title: 'Guess the Dog Breed',
  description: 'Can you identify these popular dog breeds from their photos? Test your knowledge with 35 questions!',
  timePerQuestion: 30,
  theme: {
    name: 'Paw Print',
    primaryColor: '#d97706', // amber-600
    secondaryColor: '#92400e', // amber-800
    backgroundColor: '#1c1917', // stone-900
    textColor: '#fafaf9', // stone-50
    accentColor: '#f59e0b', // amber-500
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
};

// Alternative dog quiz configurations for easy theme swapping
export const puppyQuizConfig: QuizConfig = {
  questions: dogBreedQuestions.slice(0, 10).map(q => ({
    ...q,
  })),
  title: 'Puppy Breed Quiz',
  description: 'Can you guess the breed of these adorable puppies?',
  timePerQuestion: 25,
  theme: {
    name: 'Puppy Love',
    primaryColor: '#ec4899', // pink-500
    secondaryColor: '#db2777', // pink-600
    backgroundColor: '#fdf2f8', // pink-50
    textColor: '#831843', // pink-900
    accentColor: '#f472b6', // pink-400
    fontFamily: '"Comic Sans MS", "Chalkboard", cursive',
  },
};

// Export all quiz configs for easy switching
export const allQuizConfigs = {
  dogBreeds: dogBreedQuizConfig,
  puppies: puppyQuizConfig,
};
