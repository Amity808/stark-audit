import { useState } from 'react';

export function useOpenAI<T>() {
  const [result, setResult] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateResponse = async (prompt: any) => {
    setLoading(true);
    setError(null);
    console.log(prompt)

    try {
      const response = await fetch('/api/openai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });
      console.log(response)

      if (!response.ok) {
        throw new Error('Failed to generate response');
      }

      const data = await response.json();
      console.log(data)
      setResult(data.result);
    } catch (err) {
      setError('Error generating response');
    } finally {
      setLoading(false);
    }
  };

  return { result, loading, error, generateResponse };
}