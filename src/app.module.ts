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
import { ConfigModule } from "@nestjs/config";
import { MoviesModule } from "./movies/movies.module";

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(MONGO_DB_URL),
    AuthModule,
    UsersModule,
    ChatsModule,
    MessagesModule,
    MoviesModule,
  ],
  controllers: [
    AppController,
    // ChatsController
  ],
  // redundant providers???
  providers: [AppService, UsersModule, ChatsModule, AppSocketGW],
})
export class AppModule {}
