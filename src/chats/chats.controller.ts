import { Body, Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { ChatsService } from "./chats.service";
import { JwtAuthchatGuard } from "./jwt-authchat.guard";
import { CreateChatDto } from "../dto/create-chat.dto";

@ApiTags("chats")
@Controller("chats")
export class ChatsController {
  constructor(private readonly chatService: ChatsService) {}

  @UseGuards(JwtAuthchatGuard)
  @Post("create-chat")
  @ApiResponse({
    status: 201,
    description: "The chat has been successfuly created!!",
  })
  async createChat(@Body() createChatDto: CreateChatDto) {
    return await this.chatService.createChat(createChatDto);
  }

  @UseGuards(JwtAuthchatGuard)
  @Get(":id")
  async getAllChatsByUserId(@Param(":id") id: string) {
    return await this.chatService.findAllChats(id);
  }
}
