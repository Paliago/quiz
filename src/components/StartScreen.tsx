import type { QuizConfig } from '../types';
import styles from './StartScreen.module.css';

interface StartScreenProps {
  config: QuizConfig;
  onStart: () => void;
  onBack?: () => void;
}

export function StartScreen({ config, onStart, onBack }: StartScreenProps) {
  const { title, description, questions, theme } = config;

  return (
    <div className={styles.container} style={{ '--accent-color': theme.accentColor } as React.CSSProperties}>
      <div className={styles.card}>
        <div className={styles.icon}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <path d="M12 17h.01" />
          </svg>
        </div>
        
        <h1 className={styles.title}>{title}</h1>
        
        {description && (
          <p className={styles.description}>{description}</p>
        )}
        
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>{questions.length}</span>
            <span className={styles.statLabel}>Questions</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.stat}>
            <span className={styles.statNumber}>{config.timePerQuestion}s</span>
            <span className={styles.statLabel}>Per Question</span>
          </div>
        </div>
        
        <div className={styles.buttonGroup}>
          <button 
            className={styles.startButton}
            onClick={onStart}
          >
            Start Quiz
            <svg className={styles.arrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
          
          {onBack && (
            <button 
              className={styles.backButton}
              onClick={onBack}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
              Back to Quizzes
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
