import { write } from 'fs';
import { readFile, writeFile } from 'fs/promises';

export class MessageRepository {
  async findOne(id: string) {
    const contents = await readFile('message.json', 'utf-8');
    const messages = JSON.parse(contents);

    return messages[id];
  }
  async findAll() {
    const contents = await readFile('message.json', 'utf-8');
    const messages = JSON.parse(contents);

    return messages;
  }
  async create(message: string) {
    const contents = await readFile('message.json', 'utf-8');
    const messages = JSON.parse(contents);
    const id = Math.floor(Math.random() * 1000);
    messages[id] = { id, content: message };

    await writeFile('message.json', JSON.stringify(messages));
  }
}
