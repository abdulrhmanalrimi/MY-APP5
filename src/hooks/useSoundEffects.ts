import { useCallback } from 'react';

export type SoundType = 
  | 'correct'
  | 'incorrect'
  | 'lesson_complete'
  | 'badge_earned'
  | 'level_up'
  | 'reminder'
  | 'streak';

// Sound URLs - using Web Speech API for Arabic text-to-speech
const SOUND_TEXTS: Record<SoundType, string> = {
  correct: 'رائع! إجابة صحيحة',
  incorrect: 'حاول مرة أخرى',
  lesson_complete: 'أحسنت! درس مكتمل',
  badge_earned: 'مبروك! شارة جديدة',
  level_up: 'تهانينا! مستوى جديد',
  reminder: 'وقت التعلم!',
  streak: 'استمر! يوم جديد',
};

export const useSoundEffects = () => {
  const playSound = useCallback((type: SoundType) => {
    // Check if browser supports Speech Synthesis
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(SOUND_TEXTS[type]);
      utterance.lang = 'ar-SA'; // Arabic language
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      utterance.volume = 0.8;

      // Try to find an Arabic voice
      const voices = window.speechSynthesis.getVoices();
      const arabicVoice = voices.find(voice => voice.lang.startsWith('ar'));
      if (arabicVoice) {
        utterance.voice = arabicVoice;
      }

      window.speechSynthesis.speak(utterance);
    } else {
      // Fallback: Show toast notification
      console.log(`Sound: ${SOUND_TEXTS[type]}`);
    }
  }, []);

  const playCorrectSound = useCallback(() => playSound('correct'), [playSound]);
  const playIncorrectSound = useCallback(() => playSound('incorrect'), [playSound]);
  const playLessonCompleteSound = useCallback(() => playSound('lesson_complete'), [playSound]);
  const playBadgeEarnedSound = useCallback(() => playSound('badge_earned'), [playSound]);
  const playLevelUpSound = useCallback(() => playSound('level_up'), [playSound]);
  const playReminderSound = useCallback(() => playSound('reminder'), [playSound]);
  const playStreakSound = useCallback(() => playSound('streak'), [playSound]);

  return {
    playSound,
    playCorrectSound,
    playIncorrectSound,
    playLessonCompleteSound,
    playBadgeEarnedSound,
    playLevelUpSound,
    playReminderSound,
    playStreakSound,
  };
};
