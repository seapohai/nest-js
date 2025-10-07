import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { MessageService } from './message.service';

interface Message {
  id: number;
  content: string;
  name: string;
}
@Controller('/messages')
export class MessagesController {
  constructor(public messageService: MessageService) {}
  @Get()
  getAllMessages() {
    return this.messageService.findAll();
  }
  @Post()
  createMessage(@Body() body: Message) {
    return this.messageService.create(body.content, body.name);
  }
  @Get('/:id')
  async getOneMessage(@Param('id') id: string) {
    const messageById = await this.messageService.findOne(id);
    if (!messageById) {
      throw new NotFoundException('message not found');
    }
    return messageById;
  }
  @Delete('/:id')
  async deleteMessage(@Param('id') id: string) {
    const messageById = await this.messageService.findOne(id);
    if (!messageById) {
      throw new NotFoundException('message not found');
    }
    return this.messageService.resetById(Number(id));
  }
  @Delete()
  deleteAllMessages() {
    return this.messageService.reset();
  }
}
