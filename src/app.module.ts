import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { UsersModule } from "./users/users.module";
import { MongooseModule } from "@nestjs/mongoose";
import { MONGO_DB_URL } from "../constants";
import { MessagesModule } from "./messages/messages.module";
import { AppSocketGW } from "./app.socketgw";
import { ChatsModule } from "./chats/chatsModule";
import { ChatsService } from "./chats/chats.service";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(MONGO_DB_URL),
    AuthModule,
    UsersModule,
    ChatsModule,
    MessagesModule,
  ],
  controllers: [
    AppController,
    // ChatsController
  ],
  // redundant providers???
  providers: [AppService, UsersModule, ChatsModule, AppSocketGW],
})
export class AppModule {}
