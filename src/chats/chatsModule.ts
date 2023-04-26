import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Chat, Chatschema } from "../schemas/chat.schema";
import { ChatsService } from "./chats.service";
import { ChatsRepository } from "./chats.repository";
import { ChatsController } from "./chats.controller";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Chat.name, schema: Chatschema }]),
  ],
  providers: [ChatsService, ChatsRepository],
  controllers: [ChatsController],
  exports: [ChatsService],
})
export class ChatsModule {}
