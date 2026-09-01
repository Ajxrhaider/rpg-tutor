import { NextResponse } from 'next/server';
import Groq from 'groq-sdk';
import { getTutorPrompt } from '@/lib/prompts';

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function POST(req: Request) {
  try {
    const { transcript, language } = await req.json();

    const systemMessage = {
      role: 'system' as const,
      content: getTutorPrompt(language),
    };

    const userMessage = {
      role: 'user' as const,
      content: `Here is the transcript:\n\n${transcript}`,
    };

    const chatCompletion = await groq.chat.completions.create({
      messages: [systemMessage, userMessage],
      model: 'openai/gpt-oss-20b', 
      temperature: 0.3,
      max_tokens: 2048,
    });

    const report = chatCompletion.choices[0]?.message?.content || '';
    return NextResponse.json({ report });
  } catch (error) {
    console.error('Review API Error:', error);
    return NextResponse.json({ error: 'Failed to generate review' }, { status: 500 });
  }
}