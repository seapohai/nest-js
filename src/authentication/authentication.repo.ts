import { readFile, writeFile } from 'fs/promises';
import { Injectable } from '@nestjs/common';
import { createuser } from './type/userType';

@Injectable()
export class AuthenticationRepository {
  private file = 'authentication.json';

  async findOne(id: number): Promise<createuser | null> {
    const contents = await readFile(this.file, 'utf-8');
    const messages = JSON.parse(contents);
    return messages[id];
  }

  async findAll(): Promise<createuser | null> {
    const contents = await readFile(this.file, 'utf-8');
    const messages = JSON.parse(contents);

    return messages;
  }
  async create(body: createuser): Promise<createuser> {
    console.log(body.username, 'repo');

    const contents = await readFile(this.file, 'utf-8');
    const messages: Record<number, createuser> =
      contents && contents.trim() !== '' ? JSON.parse(contents) : {};

    const ids = Object.keys(messages).map((k) => Number(k));
    const newId = ids.length ? Math.max(...ids) + 1 : 1;

    const newMessage: createuser = {
      id: newId,
      username: body.username,
      password: body.password,
      name: body.name,
      gender: body.gender,
      age: body.age,
      email: body.email,
    };

    messages[newId] = newMessage;

    await writeFile(this.file, JSON.stringify(messages, null, 2));

    return newMessage;
  }
}
