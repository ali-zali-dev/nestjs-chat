import { Inject, Injectable } from '@nestjs/common';
import { chatModuleOptions } from 'src/chat.module';
import { CHAT_MODULE_OPTIONS } from 'src/constants';

@Injectable()
export class ChatService {
  constructor(@Inject(CHAT_MODULE_OPTIONS) options: chatModuleOptions) {}
}
