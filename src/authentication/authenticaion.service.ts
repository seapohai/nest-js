import { AuthenticationRepository } from './authentication.repo';
import { Injectable } from '@nestjs/common';
import { createuser } from './type/userType';

@Injectable()
export class AuthenticationService {
  constructor(public authenticationRepo: AuthenticationRepository) {}
  findOne(id: number) {
    return this.authenticationRepo.findOne(id);
  }
  findAll() {
    return this.authenticationRepo.findAll();
  }
  create(body: createuser) {
    console.log(body);
    return this.authenticationRepo.create(body);
  }
}
