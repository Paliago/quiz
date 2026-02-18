import { useEffect, useState } from 'react';
import type { Question, QuizState, QuizConfig } from '../types';
import styles from './QuizScreen.module.css';

interface QuizScreenProps {
  config: QuizConfig;
  quizState: QuizState;
  currentQuestion: Question;
  onAnswerSelect: (answer: string) => void;
  onNextQuestion: () => void;
  onTimeUp: () => void;
}

export function QuizScreen({ 
  config, 
  quizState, 
  currentQuestion, 
  onAnswerSelect, 
  onNextQuestion,
  onTimeUp 
}: QuizScreenProps) {
  const [timer, setTimer] = useState(config.timePerQuestion);
  const { questions, timePerQuestion, theme } = config;
  const { currentQuestionIndex, selectedAnswer, isAnswerChecked } = quizState;
  
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  const timerProgress = (timer / timePerQuestion) * 100;

  // Timer countdown effect - component remounts on each question change due to key prop
  useEffect(() => {
    if (isAnswerChecked) return;
    
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          onTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isAnswerChecked, onTimeUp]);

  const getButtonStyle = (option: string): string => {
    if (!isAnswerChecked) {
      return selectedAnswer === option ? styles.selected : '';
    }
    
    if (option === currentQuestion.correctAnswer) {
      return styles.correct;
    }
    
    if (selectedAnswer === option && option !== currentQuestion.correctAnswer) {
      return styles.incorrect;
    }
    
    return styles.disabled;
  };

  const getQuestionTypeLabel = (type: Question['type']): string => {
    switch (type) {
      case 'image-identification':
        return 'Image ID';
      case 'true-false':
        return 'True/False';
      case 'fact-multiple-choice':
        return 'Breed Facts';
      case 'characteristic-match':
        return 'Characteristics';
      default:
        return 'Question';
    }
  };

  return (
    <div className={styles.container}>
      {/* Progress Bar */}
      <div className={styles.progressBar}>
        <div 
          className={styles.progressFill}
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Header */}
      <div className={styles.header}>
        <span className={styles.questionCounter}>
          Question {currentQuestionIndex + 1} of {questions.length}
        </span>
        <div className={styles.timer}>
          <span className={timer <= 5 ? styles.timerWarning : ''}>
            {timer}s
          </span>
          <div className={styles.timerBar}>
            <div 
              className={`${styles.timerFill} ${timer <= 5 ? styles.timerFillWarning : ''}`}
              style={{ width: `${timerProgress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Question Type Badge */}
      <div className={styles.typeBadge}>
        {getQuestionTypeLabel(currentQuestion.type)}
        {currentQuestion.difficulty && (
          <span className={`${styles.difficulty} ${styles[currentQuestion.difficulty]}`}>
            {currentQuestion.difficulty}
          </span>
        )}
      </div>

      {/* Question Card */}
      <div className={styles.card}>
        {/* Image Container - only show if imageUrl exists */}
        {currentQuestion.imageUrl && (
          <div className={styles.imageContainer}>
            <img 
              src={currentQuestion.imageUrl} 
              alt="Quiz question"
              className={styles.image}
              loading="eager"
            />
          </div>
        )}

        {/* Question Text */}
        <h2 className={styles.questionText}>{currentQuestion.questionText}</h2>

        {/* Category hint */}
        {currentQuestion.category && (
          <p className={styles.categoryHint}>Category: {currentQuestion.category}</p>
        )}

        {/* Options */}
        <div className={styles.options}>
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              className={`${styles.option} ${getButtonStyle(option)}`}
              onClick={() => !isAnswerChecked && onAnswerSelect(option)}
              disabled={isAnswerChecked}
              data-testid={`option-${index}`}
            >
              <span className={styles.optionLetter}>
                {String.fromCharCode(65 + index)}
              </span>
              <span className={styles.optionText}>{option}</span>
              {isAnswerChecked && option === currentQuestion.correctAnswer && (
                <svg className={styles.checkmark} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </button>
          ))}
        </div>

        {/* Fact display for answered questions */}
        {isAnswerChecked && currentQuestion.fact && (
          <div className={styles.factBox} data-testid="fact-box">
            <h3 className={styles.factTitle}>Did You Know?</h3>
            <p className={styles.factText}>{currentQuestion.fact}</p>
            {currentQuestion.breedName && (
              <p className={styles.breedName}>About: {currentQuestion.breedName}</p>
            )}
          </div>
        )}

        {/* Next Button */}
        {isAnswerChecked && (
          <button 
            className={styles.nextButton}
            onClick={onNextQuestion}
            style={{ '--accent-color': theme.accentColor } as React.CSSProperties}
            data-testid="next-button"
          >
            {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'See Results'}
            <svg className={styles.arrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
