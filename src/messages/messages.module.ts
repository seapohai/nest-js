import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessageService } from './message.service';
import { MessageRepository } from './message.repo';

@Module({
  controllers: [MessagesController],
  providers: [MessageRepository, MessageService],
})
export class MessagesModule {}
