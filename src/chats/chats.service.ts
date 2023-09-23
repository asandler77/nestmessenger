import { Injectable } from "@nestjs/common";
import { CreateChatDto } from "../dto/create-chat.dto";
import { ChatsRepository } from "./chats.repository";

@Injectable()
export class ChatsService {
  constructor(private readonly chatRepository: ChatsRepository) {}

  async createChat(createChatDto: CreateChatDto) {
    return await this.chatRepository.createChat(createChatDto);
  }

  async findAllChats(id: string) {
    return await this.chatRepository.findAllChats(id);
  }
}
