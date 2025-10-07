import { MessageRepository, Message } from './message.repo';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessageService {
  constructor(public messageRepo: MessageRepository) {}
  findOne(id: string): Promise<Message | undefined> {
    return this.messageRepo.findOne(id);
  }
  findAll(): Promise<Record<string, Message>> {
    return this.messageRepo.findAll();
  }
  create(message: string, name: string): Promise<Message> {
    return this.messageRepo.create(message, name);
  }
  reset() {
    return this.messageRepo.reset();
  }
  resetById(id: number) {
    return this.messageRepo.resetById(id);
  }
}
