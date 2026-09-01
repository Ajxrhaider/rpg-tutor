import { NextResponse } from 'next/server';
import Groq from 'groq-sdk';
import { getNPCPrompt } from '@/lib/prompts';

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function POST(req: Request) {
  try {
    const { messages, scenario, language, role } = await req.json();

    const systemMessage = {
      role: 'system' as const,
      content: getNPCPrompt(scenario, language, role),
    };

    const chatCompletion = await groq.chat.completions.create({
      messages: [systemMessage, ...messages],
      model: 'openai/gpt-oss-20b',
      temperature: 0.7,
      max_tokens: 512,
    });

    const reply = chatCompletion.choices[0]?.message?.content || '';
    return NextResponse.json({ reply });
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json({ error: 'Failed to fetch AI response' }, { status: 500 });
  }
}