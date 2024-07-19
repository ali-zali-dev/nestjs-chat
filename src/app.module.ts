import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { chatModule } from 'src/chat.module';

@Module({
  imports: [
    chatModule.register({
      dbName: 'chat',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
