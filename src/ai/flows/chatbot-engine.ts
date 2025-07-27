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
    prompt: `Use the following CV data to answer the user question.\n\nCV Data: ${cvData}\n\nUser Question: ${userQuestion}`,
  });
  return text;
}
);

const chatbotEnginePrompt = ai.definePrompt({
  name: 'chatbotEnginePrompt',
  tools: [answerQuestion],
  input: {
    schema: ChatbotEngineInputSchema,
  },
  output: {
    schema: ChatbotEngineOutputSchema,
  },
  prompt: `You are a chatbot designed to answer questions about a person's CV. Use the available tools to answer the user's question based on the provided CV data.\n\nUser Question: {{{userQuestion}}}`,
});

const chatbotEngineFlow = ai.defineFlow(
  {
    name: 'chatbotEngineFlow',
    inputSchema: ChatbotEngineInputSchema,
    outputSchema: ChatbotEngineOutputSchema,
  },
  async input => {
    const { output } = await chatbotEnginePrompt(input);
    return { answer: output?.answer ?? 'I am sorry, I cannot answer this question.' };
  }
);
