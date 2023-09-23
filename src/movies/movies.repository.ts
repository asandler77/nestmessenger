import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ChatDto } from "../dto/chat.dto";
import { MovieDto } from "../dto/movie.dto";
import { CreateMovieDto } from "../dto/create-movie.dto";

export class MoviesRepository {
  constructor(
    @InjectModel("Movie")
    private movieModel: Model<MovieDto>
  ) {}

  async addMovie(movie: CreateMovieDto): Promise<any> {
    return await this.movieModel.create(movie);
  }

  async deleteAll(): Promise<any> {
    await this.movieModel.deleteMany({});
  }

  async findAll(): Promise<any> {
    return this.movieModel.find().exec();
  }
}
