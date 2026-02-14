import { useState, useCallback } from 'react';
import type { QuizState, QuizConfig } from './types';
import { defaultQuizConfig } from './quizData';
import { dogBreedQuizConfig } from './dogQuizData';
import { QuizSelector } from './components/QuizSelector';
import { StartScreen } from './components/StartScreen';
import { QuizScreen as QuizScreenComponent } from './components/QuizScreen';
import { ResultsScreen } from './components/ResultsScreen';
import './App.css';

// Available quizzes configuration
const availableQuizzes = [
  {
    id: 'dog-breeds',
    config: dogBreedQuizConfig,
    icon: '🐕',
    color: '#d97706',
  },
  {
    id: 'world-wonders',
    config: defaultQuizConfig,
    icon: '🌍',
    color: '#3b82f6',
  },
];

type ScreenType = 'selector' | 'start' | 'quiz' | 'results';

function App() {
  const [, setSelectedQuizId] = useState<string | null>(null);
  const [config, setConfig] = useState<QuizConfig>(dogBreedQuizConfig);
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('selector');
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    score: 0,
    isQuizComplete: false,
    selectedAnswer: null,
    isAnswerChecked: false,
    timeRemaining: config.timePerQuestion,
  });

  const handleSelectQuiz = useCallback((quizId: string) => {
    const quiz = availableQuizzes.find(q => q.id === quizId);
    if (quiz) {
      setSelectedQuizId(quizId);
      setConfig(quiz.config);
      setQuizState({
        currentQuestionIndex: 0,
        score: 0,
        isQuizComplete: false,
        selectedAnswer: null,
        isAnswerChecked: false,
        timeRemaining: quiz.config.timePerQuestion,
      });
      setCurrentScreen('start');
    }
  }, []);

  const handleStart = useCallback(() => {
    setQuizState(prev => ({
      ...prev,
      currentQuestionIndex: 0,
      score: 0,
      isQuizComplete: false,
      selectedAnswer: null,
      isAnswerChecked: false,
      timeRemaining: config.timePerQuestion,
    }));
    setCurrentScreen('quiz');
  }, [config.timePerQuestion]);

  const handleAnswerSelect = useCallback((answer: string) => {
    setQuizState((prev) => ({
      ...prev,
      selectedAnswer: answer,
    }));

    setTimeout(() => {
      const isCorrect = answer === config.questions[quizState.currentQuestionIndex].correctAnswer;
      
      setQuizState((prev) => ({
        ...prev,
        score: isCorrect ? prev.score + 1 : prev.score,
        isAnswerChecked: true,
      }));
    }, 300);
  }, [config.questions, quizState.currentQuestionIndex]);

  const handleTimeUp = useCallback(() => {
    setQuizState((prev) => ({
      ...prev,
      isAnswerChecked: true,
    }));
  }, []);

  const handleNextQuestion = useCallback(() => {
    setQuizState((prev) => {
      const nextIndex = prev.currentQuestionIndex + 1;
      const isComplete = nextIndex >= config.questions.length;
      
      if (isComplete) {
        setCurrentScreen('results');
      }
      
      return {
        ...prev,
        currentQuestionIndex: nextIndex,
        selectedAnswer: null,
        isAnswerChecked: false,
        timeRemaining: config.timePerQuestion,
        isQuizComplete: isComplete,
      };
    });
  }, [config.questions.length, config.timePerQuestion]);

  const handleRestart = useCallback(() => {
    setQuizState(prev => ({
      ...prev,
      currentQuestionIndex: 0,
      score: 0,
      isQuizComplete: false,
      selectedAnswer: null,
      isAnswerChecked: false,
      timeRemaining: config.timePerQuestion,
    }));
    setCurrentScreen('quiz');
  }, [config.timePerQuestion]);

  const handleHome = useCallback(() => {
    setCurrentScreen('selector');
    setSelectedQuizId(null);
  }, []);

  const themeStyles = {
    '--primary-color': config.theme.primaryColor,
    '--secondary-color': config.theme.secondaryColor,
    '--background-color': config.theme.backgroundColor,
    '--text-color': config.theme.textColor,
    '--accent-color': config.theme.accentColor,
  } as React.CSSProperties;

  const renderScreen = () => {
    switch (currentScreen) {
      case 'selector':
        return (
          <QuizSelector
            quizzes={availableQuizzes}
            onSelectQuiz={handleSelectQuiz}
          />
        );
      
      case 'start':
        return <StartScreen config={config} onStart={handleStart} onBack={handleHome} />;
      
      case 'quiz':
        return (
          <QuizScreenComponent
            key={quizState.currentQuestionIndex}
            config={config}
            quizState={quizState}
            currentQuestion={config.questions[quizState.currentQuestionIndex]}
            onAnswerSelect={handleAnswerSelect}
            onNextQuestion={handleNextQuestion}
            onTimeUp={handleTimeUp}
          />
        );
      
      case 'results':
        return (
          <ResultsScreen
            config={config}
            score={quizState.score}
            totalQuestions={config.questions.length}
            onRestart={handleRestart}
            onHome={handleHome}
          />
        );
      
      default:
        return (
          <QuizSelector
            quizzes={availableQuizzes}
            onSelectQuiz={handleSelectQuiz}
          />
        );
    }
  };

  return (
    <div className="app" style={themeStyles}>
      {renderScreen()}
    </div>
  );
}

export default App;
