import {
  Controller,
  NotFoundException,
  Get,
  Post,
  Body,
  Param,
} from '@nestjs/common';
import { AuthenticationService } from './authenticaion.service';

@Controller('/auth')
export class AuthenticationController {
  constructor(private authentication: AuthenticationService) {}
  @Get()
  gettAllUsers() {
    return this.authentication.findAll();
  }
  @Post('/register')
  createUser(@Body() body) {
    return this.authentication.create(body);
  }
  @Get('/:id')
  async getUserById(@Param('id') id: number) {
    const messageById = await this.authentication.findOne(id);
    if (!messageById) {
      throw new NotFoundException('message not found');
    }
    return messageById;
  }
}
