import { NextResponse } from "next/server"
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const { prompt } = await req.json();
  console.log(prompt, "api")
  try {

    
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      // temperature: 1,
      // max_tokens: 2048,
      // top_p: 1,
      // frequency_penalty: 0,
      // presence_penalty: 0,
      messages: [
        {
          "role": "system",
          "content": [
            {
              "type": "text",
              "text": "You will be provided with a piece of code, and your task is to explain it in a concise way."
            }
          ]
        },
        { role: "user", content: prompt.userPrompt }
      ],
      
      
      
      response_format: prompt.responseFormat,
    });

    const result = completion.choices[0].message.content;
    console.log(result)
    return NextResponse.json({ result: result ? JSON.parse(result) : null });
  } catch (error) {
    console.error('OpenAI API error:', error);
    return NextResponse.json({ error: 'Failed to generate response' }, { status: 500 });
  }
}