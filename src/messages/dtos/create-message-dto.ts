import { IsString } from 'class-validator';

export class CreateMessageDto {
  id: number;
  @IsString()
  content: string;
  name: string;
}

export class AuthenticationDTO {
  username: string;
  passeword: string;
  gender: string;
  age: number;
  email: string;
}
