import { Injectable } from "@nestjs/common";
import { CreateChatDto } from "../dto/create-chat.dto";
import { ChatsRepository } from "./chats.repository";

@Injectable()
export class ChatsService {
  constructor(private readonly chatRepository: ChatsRepository) {}

  async createChat(createChatDto: CreateChatDto) {
    console.log("createChat=====");

    return await this.chatRepository.createChat(createChatDto);
  }

  async findAllChats(id: string) {
    console.log("find all chats===");
    return await this.chatRepository.findAllChats(id);
  }
}
