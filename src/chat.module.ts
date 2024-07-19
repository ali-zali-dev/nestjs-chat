import { DynamicModule, Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { CHAT_MODULE_OPTIONS } from 'src/constants';

export interface chatModuleOptions {
  dbName: string;
}
@Module({})
export class chatModule {
  static register(options: chatModuleOptions): DynamicModule {
    return {
      module: chatModule,
      providers: [
        {
          provide: CHAT_MODULE_OPTIONS,
          useValue: options,
        },
        ChatService,
      ],
      exports: [ChatService],
    };
  }
}
