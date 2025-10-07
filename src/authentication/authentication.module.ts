import { Module } from '@nestjs/common';
import { AuthenticationController } from './authentication.controller';
import { AuthenticationService } from './authenticaion.service';
import { AuthenticationRepository } from './authentication.repo';

@Module({
  controllers: [AuthenticationController],
  providers: [AuthenticationService, AuthenticationRepository],
})
export class AuthenticationModule {}
