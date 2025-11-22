import { describe, it, expect } from 'vitest';

describe('OpenAI API Integration', () => {
  it('should have VITE_OPENAI_API_KEY environment variable', () => {
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
    expect(apiKey).toBeDefined();
    expect(apiKey).not.toBe('');
    expect(typeof apiKey).toBe('string');
    
    // Check if it starts with 'sk-' (OpenAI API key format)
    if (apiKey) {
      expect(apiKey.startsWith('sk-')).toBe(true);
    }
  });

  it('should be able to call OpenAI API', async () => {
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
    
    if (!apiKey) {
      console.warn('Skipping OpenAI API test: VITE_OPENAI_API_KEY not set');
      return;
    }

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'user',
              content: 'مرحباً'
            }
          ],
          max_tokens: 10
        })
      });

      expect(response.ok).toBe(true);
      
      const data = await response.json();
      expect(data).toHaveProperty('choices');
      expect(Array.isArray(data.choices)).toBe(true);
      expect(data.choices.length).toBeGreaterThan(0);
    } catch (error) {
      console.error('OpenAI API test failed:', error);
      throw error;
    }
  }, 30000); // 30 second timeout for API call
});
