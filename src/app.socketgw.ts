import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from "@nestjs/websockets";
import { Server, Socket } from "socket.io";
import { MessagesService } from "./messages/messages.service";
import { Logger } from "@nestjs/common";
import { CreateMessageDto } from "./dto/create-message.dto";

@WebSocketGateway({
  cors: {
    origin: "*",
  },
})
export class AppSocketGW
  implements OnGatewayConnection, OnGatewayInit, OnGatewayDisconnect
{
  constructor(private readonly messageService: MessagesService) {}

  @WebSocketServer()
  server: Server;

  private logger: Logger = new Logger("AppSocketGW");

  @SubscribeMessage("create_message")
  async handleSendMessage(
    @ConnectedSocket() client: Socket,
    @MessageBody() payload: CreateMessageDto
  ): Promise<void> {
    await this.messageService.createMessage(payload);
    await this.server.emit("response_message", payload);
  }

  afterInit(server: Server) {
    this.logger.log(server);
    //Do stuffs
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
    //Do stuffs
  }

  async handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id}`);
    //Do stuffs
  }
}
