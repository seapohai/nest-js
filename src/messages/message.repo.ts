import { readFile, writeFile } from 'fs/promises';
import { Body, Injectable } from '@nestjs/common';

export interface Message {
  id: number;
  content: string;
  name: string;
}
@Injectable()
export class MessageRepository {
  private file = 'message.json';
  async findOne(id: string): Promise<Message | undefined> {
    const contents = await readFile(this.file, 'utf-8');
    const messages = JSON.parse(contents) as Record<string, Message>;

    return messages[id];
  }
  async findAll(): Promise<Record<string, Message>> {
    const contents = await readFile(this.file, 'utf-8');
    const messages = JSON.parse(contents) as Record<string, Message>;

    return messages;
  }
  async create(content: string, name: string): Promise<Message> {
    const messages = await this.findAll();

    // Auto-increment ID
    const ids = Object.keys(messages).map(Number);
    const newId = ids.length ? Math.max(...ids) + 1 : 1;

    const newMessage: Message = { id: newId, content, name };
    messages[newId] = newMessage;

    await writeFile(this.file, JSON.stringify(messages, null, 2));
    return newMessage;
  }

  async reset() {
    await writeFile(this.file, JSON.stringify({}, null, 2));
    return { message: 'All messages deleted.' };
  }
  async resetById(id: number) {
    const contents = await readFile(this.file, 'utf-8');
    const messages = JSON.parse(contents) as Record<string, Message>;

    if (!messages[id]) {
      return { message: `Message ID=${id} not found.` };
    }

    delete messages[id];

    await writeFile(this.file, JSON.stringify(messages, null, 2));
    return { message: `Message deleted. the id is ${id}.` };
  }
}
