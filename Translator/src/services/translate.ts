import OpenAIApi from 'openai'
import { SUPPORTED_LANGUAGES } from "../constants"
import { type FromLanguage, type Language } from "../types"

//NO PUBLICAR ESTO O SE COLARA LA APIKEY AL CLIENTE
//NECESARIO PASAR ESTO A BACKEND

//const apiKey = import.meta.env.VITE_OPENAIA_API_KEY;

// if (!apiKey) {
//     throw new Error('API key is missing! Please set VITE_OPENAIA_API_KEY in your environment.')
//   }

//const configuration = new Configuration({ apiKey });
const openai = new OpenAIApi({
    apiKey: import.meta.env.VITE_COHERE_API_KEY,
    dangerouslyAllowBrowser: true
  })
  

export async function translate ({
    fromLanguage,
    toLanguage,
    text
}: {
    fromLanguage: FromLanguage
    toLanguage: Language
    text: string
}) {
    const messages = [
        {
            role: 'system',
            content: 'You are an AI that translates text. You recieve a text from the user. Do not answer,just translate the text. The original language is surrounded by `{{`and `}}`. You can also recieve {{auto}} wich means you have to detect the language. You can translate to any language. The language you translate to is surrounded by `[[` and `]]`.'
        },
        {
            role: 'user',
            content: 'Hola mundo {{Español}} [[English]]'
          },
          {
            role: 'assistant',
            content: 'Hello world'
          },
          {
            role: 'user',
            content: 'How are you? {{auto}} [[Deutsch]]'
          },
          {
            role: 'assistant',
            content: 'Wie geht es dir?'
          },
          {
            role: 'user',
            content: 'Bon dia, com estas? {{auto}} [[Español]]'
          },
          {
            role: 'assistant',
            content: 'Buenos días, ¿cómo estás?'
          }
    ]

    const fromCode = fromLanguage === 'auto' ? 'auto' : SUPPORTED_LANGUAGES[fromLanguage]
    const toCode = SUPPORTED_LANGUAGES[toLanguage]

    const completion = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [
            ...messages,
            {
                role: 'user',
                content: `${text} {{${fromCode}}} [[${toCode}]]`
            }
        ]
    })

    return completion.data.choices[0]?.message?.content
}