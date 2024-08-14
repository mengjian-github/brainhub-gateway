import { Controller, Get } from '@nestjs/common';
import { AiService } from './ai.service';

@Controller('ai')
export class AiController {
  constructor(private aiService: AiService) {}

  @Get('test')
  test() {
    return this.aiService.generate('claude-3-5-sonnet', 'hello world');
  }
}
