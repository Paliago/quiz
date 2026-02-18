export type QuestionType = 'image-identification' | 'true-false' | 'fact-multiple-choice' | 'characteristic-match';

export interface Question {
  id: number;
  type: QuestionType;
  questionText: string;
  imageUrl?: string;
  options: string[];
  correctAnswer: string;
  category?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
  fact?: string;
  breedName?: string;
}

export interface QuizState {
  currentQuestionIndex: number;
  score: number;
  isQuizComplete: boolean;
  selectedAnswer: string | null;
  isAnswerChecked: boolean;
  timeRemaining: number;
}

export interface QuizTheme {
  name: string;
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  textColor: string;
  accentColor: string;
  fontFamily: string;
}

export type QuizScreen = 'start' | 'quiz' | 'results';

export interface QuizConfig {
  questions: Question[];
  theme: QuizTheme;
  timePerQuestion: number;
  title: string;
  description?: string;
}
