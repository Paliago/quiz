import type { QuizConfig } from '../types';
import styles from './ResultsScreen.module.css';

interface ResultsScreenProps {
  config: QuizConfig;
  score: number;
  totalQuestions: number;
  onRestart: () => void;
  onHome: () => void;
}

export function ResultsScreen({ 
  config, 
  score, 
  totalQuestions, 
  onRestart, 
  onHome 
}: ResultsScreenProps) {
  const percentage = Math.round((score / totalQuestions) * 100);
  const { theme, title } = config;

  const getMessage = () => {
    if (percentage === 100) return "Perfect! You're a master!";
    if (percentage >= 80) return "Excellent work! Great job!";
    if (percentage >= 60) return "Good effort! Keep learning!";
    if (percentage >= 40) return "Not bad! Room for improvement!";
    return "Keep practicing! You'll get better!";
  };

  const getEmoji = () => {
    if (percentage === 100) return '🏆';
    if (percentage >= 80) return '🌟';
    if (percentage >= 60) return '👍';
    if (percentage >= 40) return '🤔';
    return '💪';
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {/* Trophy/Icon */}
        <div className={styles.icon}>
          <span className={styles.emoji}>{getEmoji()}</span>
        </div>

        {/* Title */}
        <h1 className={styles.title}>Quiz Complete!</h1>
        
        {/* Quiz Name */}
        <p className={styles.quizName}>{title}</p>

        {/* Score Circle */}
        <div className={styles.scoreContainer}>
          <div 
            className={styles.scoreCircle}
            style={{ '--percentage': percentage } as React.CSSProperties}
          >
            <span className={styles.scorePercent}>{percentage}%</span>
          </div>
        </div>

        {/* Score Details */}
        <div className={styles.scoreDetails}>
          <div className={styles.scoreStat}>
            <span className={styles.scoreNumber}>{score}</span>
            <span className={styles.scoreLabel}>Correct</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.scoreStat}>
            <span className={styles.scoreNumber}>{totalQuestions - score}</span>
            <span className={styles.scoreLabel}>Incorrect</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.scoreStat}>
            <span className={styles.scoreNumber}>{totalQuestions}</span>
            <span className={styles.scoreLabel}>Total</span>
          </div>
        </div>

        {/* Message */}
        <p className={styles.message}>{getMessage()}</p>

        {/* Buttons */}
        <div className={styles.buttons}>
          <button 
            className={styles.restartButton}
            onClick={onRestart}
            style={{ '--accent-color': theme.accentColor } as React.CSSProperties}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
              <path d="M21 3v5h-5" />
              <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
              <path d="M8 16H3v5" />
            </svg>
            Play Again
          </button>
          
          <button 
            className={styles.homeButton}
            onClick={onHome}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Choose Quiz
          </button>
        </div>
      </div>
    </div>
  );
}
