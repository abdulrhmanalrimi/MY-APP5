import { useState, useEffect } from 'react';

const FONT_SIZE_KEY = 'nahw_font_size';

export type FontSize = 'small' | 'medium' | 'large' | 'xlarge';

const FONT_SIZE_VALUES: Record<FontSize, string> = {
  small: '14px',
  medium: '16px',
  large: '18px',
  xlarge: '20px',
};

export const useFontSize = () => {
  const [fontSize, setFontSize] = useState<FontSize>(() => {
    const stored = localStorage.getItem(FONT_SIZE_KEY);
    return (stored as FontSize) || 'medium';
  });

  useEffect(() => {
    localStorage.setItem(FONT_SIZE_KEY, fontSize);
    document.documentElement.style.setProperty('--base-font-size', FONT_SIZE_VALUES[fontSize]);
  }, [fontSize]);

  const increaseFontSize = () => {
    const sizes: FontSize[] = ['small', 'medium', 'large', 'xlarge'];
    const currentIndex = sizes.indexOf(fontSize);
    if (currentIndex < sizes.length - 1) {
      setFontSize(sizes[currentIndex + 1]);
    }
  };

  const decreaseFontSize = () => {
    const sizes: FontSize[] = ['small', 'medium', 'large', 'xlarge'];
    const currentIndex = sizes.indexOf(fontSize);
    if (currentIndex > 0) {
      setFontSize(sizes[currentIndex - 1]);
    }
  };

  const resetFontSize = () => {
    setFontSize('medium');
  };

  return {
    fontSize,
    setFontSize,
    increaseFontSize,
    decreaseFontSize,
    resetFontSize,
    fontSizeValue: FONT_SIZE_VALUES[fontSize],
  };
};
