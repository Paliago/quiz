export interface Question {
  id: number;
  imageUrl: string;
  options: string[];
  correctAnswer: string;
  category?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
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
