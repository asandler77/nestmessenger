import { Module } from "@nestjs/common";
import { MoviesService } from "./movies.service";
import { MoviesController } from "./movies.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Movie, MoviesSchema } from "../schemas/movies.schema";
import { MoviesRepository } from "./movies.repository";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Movie.name, schema: MoviesSchema }]),
  ],
  controllers: [MoviesController],
  exports: [MoviesService],
  providers: [MoviesService, MoviesRepository],
})
export class MoviesModule {}
