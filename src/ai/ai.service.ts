import { generateText, LanguageModel } from 'ai';
import { openai } from '@ai-sdk/openai';
import { anthropic } from '@ai-sdk/anthropic';
import { google } from '@ai-sdk/google';
import { Injectable } from '@nestjs/common';

type ModuleName = 'gpt-4o' | 'claude-3-5-sonnet' | 'gemini-1.5-pro';
type SupportedAiModels = {
  [key in ModuleName]: LanguageModel;
};

const SUPPORTED_AI_MODELS: SupportedAiModels = {
  'gpt-4o': openai('gpt-4o'),
  'claude-3-5-sonnet': anthropic('claude-3-5-sonnet-20240620'),
  'gemini-1.5-pro': google('models/gemini-1.5-pro-latest'),
};

@Injectable()
export class AiService {
  generate(model: keyof typeof SUPPORTED_AI_MODELS, prompt: string) {
    return generateText({
      model: SUPPORTED_AI_MODELS[model],
      prompt,
    });
  }
}
