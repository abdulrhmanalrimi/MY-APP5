import { useState, useEffect } from 'react';

export interface UserProgress {
  completedLessons: number[];
  totalPoints: number;
  badges: string[];
  streak: number;
  lastVisit: string;
  quizScores: Record<number, { score: number; total: number }>;
}

const STORAGE_KEY = 'nahw_user_progress';

const getInitialProgress = (): UserProgress => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {
      console.error('Failed to parse stored progress:', e);
    }
  }
  return {
    completedLessons: [],
    totalPoints: 0,
    badges: [],
    streak: 0,
    lastVisit: new Date().toISOString(),
    quizScores: {},
  };
};

export const useProgress = () => {
  const [progress, setProgress] = useState<UserProgress>(getInitialProgress);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const markLessonComplete = (lessonId: number, score: number, total: number) => {
    setProgress((prev) => {
      const newProgress = { ...prev };
      
      // Add to completed lessons if not already there
      if (!newProgress.completedLessons.includes(lessonId)) {
        newProgress.completedLessons.push(lessonId);
      }
      
      // Update quiz score
      newProgress.quizScores[lessonId] = { score, total };
      
      // Add points (10 points per correct answer)
      const pointsEarned = score * 10;
      newProgress.totalPoints += pointsEarned;
      
      // Check for badges
      if (newProgress.completedLessons.length === 1 && !newProgress.badges.includes('first_lesson')) {
        newProgress.badges.push('first_lesson');
      }
      if (newProgress.completedLessons.length === 5 && !newProgress.badges.includes('five_lessons')) {
        newProgress.badges.push('five_lessons');
      }
      if (newProgress.totalPoints >= 100 && !newProgress.badges.includes('points_100')) {
        newProgress.badges.push('points_100');
      }
      
      // Update streak
      const today = new Date().toISOString().split('T')[0];
      const lastVisit = new Date(newProgress.lastVisit).toISOString().split('T')[0];
      
      if (today !== lastVisit) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toISOString().split('T')[0];
        
        if (lastVisit === yesterdayStr) {
          newProgress.streak += 1;
        } else {
          newProgress.streak = 1;
        }
        newProgress.lastVisit = new Date().toISOString();
      }
      
      return newProgress;
    });
  };

  const isLessonCompleted = (lessonId: number) => {
    return progress.completedLessons.includes(lessonId);
  };

  const getLessonScore = (lessonId: number) => {
    return progress.quizScores[lessonId];
  };

  const resetProgress = () => {
    const initialProgress = {
      completedLessons: [],
      totalPoints: 0,
      badges: [],
      streak: 0,
      lastVisit: new Date().toISOString(),
      quizScores: {},
    };
    setProgress(initialProgress);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialProgress));
  };

  return {
    progress,
    markLessonComplete,
    isLessonCompleted,
    getLessonScore,
    resetProgress,
  };
};
