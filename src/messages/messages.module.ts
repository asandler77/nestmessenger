import { Module } from "@nestjs/common";
import { MessagesService } from "./messages.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Message, MessageSchema } from "../schemas/message.schema";
import { MessagesRepository } from "./messages.repository";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Message.name, schema: MessageSchema }]),
  ],
  providers: [MessagesService, MessagesRepository],
  exports: [MessagesService],
})
export class MessagesModule {}
