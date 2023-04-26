import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { MessageDto } from "../dto/message.dto";

export class MessagesRepository {
  constructor(
    @InjectModel("Message")
    private messageModel: Model<MessageDto>
  ) {}

  async createMessage(message): Promise<any> {
    const createOne = await this.messageModel.create(message);
    return createOne;
  }

  async findAllMessages(id): Promise<any> {
    const findAll = await this.messageModel.find({ chat_id: { $all: [id] } });
    return findAll;
  }
}
