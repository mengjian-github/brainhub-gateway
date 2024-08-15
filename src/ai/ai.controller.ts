import { Body, Controller, Post, Response } from '@nestjs/common';
import { AiService } from './ai.service';

@Controller('ai')
export class AiController {
  constructor(private aiService: AiService) {}

  @Post('chat')
  async chat(@Body() body, @Response() res) {
    const { messages, model } = body;
    const { pipeAIStreamToResponse } = await this.aiService.chat(
      model,
      messages,
    );
    pipeAIStreamToResponse(res);
  }
}
