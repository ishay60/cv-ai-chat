'use server';

/**
 * @fileOverview Chatbot engine for answering questions related to Ishay's CV content.
 *
 * - chatbotEngine - A function that handles the chatbot engine process.
 * - ChatbotEngineInput - The input type for the chatbotEngine function.
 * - ChatbotEngineOutput - The return type for the chatbotEngine function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ChatbotEngineInputSchema = z.object({
  cvData: z.string().describe('The CV data of Ishay Rosengarten.'),
  userQuestion: z.string().describe('The user question related to Ishay\'s CV.'),
});
export type ChatbotEngineInput = z.infer<typeof ChatbotEngineInputSchema>;

const ChatbotEngineOutputSchema = z.object({
  answer: z.string().describe('The answer to the user question based on the CV data.'),
});
export type ChatbotEngineOutput = z.infer<typeof ChatbotEngineOutputSchema>;

export async function chatbotEngine(input: ChatbotEngineInput): Promise<ChatbotEngineOutput> {
  return chatbotEngineFlow(input);
}

const answerQuestion = ai.defineTool({
  name: 'answerQuestion',
  description: 'Answers the user question based on the provided CV data.',
  inputSchema: z.object({
    cvData: z.string().describe('The CV data of Ishay Rosengarten.'),
    userQuestion: z.string().describe('The user question related to Ishay\'s CV.'),
  }),
  outputSchema: z.string(),
},
async (input) => {
  const { cvData, userQuestion } = input;
  //console.log('CV Data:', cvData);
  //console.log('User Question:', userQuestion);
  const { text } = await ai.generate({
    prompt: `You are a helpful assistant for Ishay Rosengarten's CV. Use the following CV data to answer the user question.

If the user asks about salary expectations or other personal details not present in the CV, politely state that this information is not available in the document and recommend contacting Ishay directly for such matters. Provide his email from the CV.

CV Data: ${cvData}

User Question: ${userQuestion}`,
  });
  return text;
}
);

const chatbotEngineFlow = ai.defineFlow(
  {
    name: 'chatbotEngineFlow',
    inputSchema: ChatbotEngineInputSchema,
    outputSchema: ChatbotEngineOutputSchema,
  },
  async input => {
    const answer = await answerQuestion(input);
    return { answer };
  }
);
