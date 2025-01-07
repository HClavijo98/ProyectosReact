// Importación correcta
import cohere from 'cohere-ai';
import { SUPPORTED_LANGUAGES } from '../constants';
import { type FromLanguage, type Language } from '../types';

// Inicialización de cohere con la API Key
(cohere as any).init(import.meta.env.VITE_COHERE_API_KEY); // El 'as any' evita errores de TypeScript

export async function translate({
  fromLanguage,
  toLanguage,
  text,
}: {
  fromLanguage: FromLanguage;
  toLanguage: Language;
  text: string;
}) {
  const fromCode = fromLanguage === 'auto' ? 'auto' : SUPPORTED_LANGUAGES[fromLanguage];
  const toCode = SUPPORTED_LANGUAGES[toLanguage];

  try {
    const response = await cohere.generate({
      model: 'command-xlarge-2023',
      prompt: `Translate the following text:\n\nSource Language: ${fromCode}\nTarget Language: ${toCode}\n\nText: ${text}\n\nTranslation:`,
      max_tokens: 300,
      temperature: 0.7,
    });

    if (response?.body?.generations?.length > 0) {
      return response.body.generations[0].text.trim();
    } else {
      throw new Error('No translation found in the response');
    }
  } catch (error) {
    console.error('Error during translation:', error);
    return 'Error';
  }
}
