import { MessageRepository } from './message.repo';
export class MessageService {
  messageRepo: MessageRepository;
  constructor() {
    this.messageRepo = new MessageRepository();
  }
  findOne(id: string) {
    return this.messageRepo.findOne(id);
  }
  findAll() {
    return this.messageRepo.findAll();
  }
  create(message: string) {
    return this.messageRepo.create(message);
  }
}
