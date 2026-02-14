import type { QuizConfig } from '../types';
import styles from './QuizSelector.module.css';

interface QuizOption {
  id: string;
  config: QuizConfig;
  icon: string;
  color: string;
}

interface QuizSelectorProps {
  quizzes: QuizOption[];
  onSelectQuiz: (quizId: string) => void;
}

export function QuizSelector({ quizzes, onSelectQuiz }: QuizSelectorProps) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>🎯 Quiz Time!</h1>
        <p className={styles.subtitle}>Choose a quiz to test your knowledge</p>
      </div>

      <div className={styles.quizGrid}>
        {quizzes.map((quiz) => (
          <button
            key={quiz.id}
            className={styles.quizCard}
            onClick={() => onSelectQuiz(quiz.id)}
            style={{ '--card-color': quiz.color } as React.CSSProperties}
          >
            <div className={styles.iconWrapper}>
              <span className={styles.icon}>{quiz.icon}</span>
            </div>
            <h3 className={styles.quizTitle}>{quiz.config.title}</h3>
            <p className={styles.quizDescription}>{quiz.config.description}</p>
            <div className={styles.quizMeta}>
              <span className={styles.badge}>
                {quiz.config.questions.length} questions
              </span>
              <span className={styles.badge}>
                {quiz.config.timePerQuestion}s per question
              </span>
            </div>
          </button>
        ))}
      </div>

      <div className={styles.footer}>
        <p>More quizzes coming soon! 🚀</p>
      </div>
    </div>
  );
}
