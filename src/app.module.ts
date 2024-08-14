import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AiService } from './ai/ai.service';
import { AiController } from './ai/ai.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // 使配置模块在整个应用程序中全局可用
    }),
  ],
  controllers: [AppController, AiController],
  providers: [AppService, AiService],
})
export class AppModule {}
