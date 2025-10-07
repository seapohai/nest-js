import { Body, Controller, Get, Post, Param , NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message-dto';
import { MessageService } from './message.service';

@Controller('/messages')
export class MessagesController {
    messageService: MessageService;

  constructor(){
    this.messageService = new MessageService();
  }
  @Get()
  getAllMessages() {
    return this.messageService.findAll();
  }
  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.messageService.create(body.content);
  }
  @Get('/:id')
 async getOneMessage(@Param('id') id: string) {

    const messageById = await this.messageService.findOne(id);
    if(!messageById){
      throw new NotFoundException('message not found');
    }
    return messageById;

  }
}
